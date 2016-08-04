/**
 * Swiper 0.0.1
 * 
 * https://github.com/BiggerHacker
 * 
 * Copyright 2016, xt
 * 
 * email：1049025971@qq.com
 * 
 * 更新时间：2016-08-05
 */


/*===========================
Swiper Component-------------
===========================*/
;(function ($,window){
	'use strict';
	$(document).on('touchmove',function(ev){
		ev.preventDefault();
	});
	var Swiper = function (container,configs){
		var _this = this;
		var settings = {
			initialSlide : 0,
			autoPlay : false,
			autoTime : 5000,
			speed : 0.5,
			slideSpeed : 1
		};
		_this.options = $.extend({},settings,configs);
		_this.container = $(container);
		_this.wrapper = _this.container.find('.x_swiper_wrapper');
		_this.slide = _this.wrapper.find('.x_swiper_slide');
		_this.slideBtn = _this.container.find('.x_swiper_index a');

		/* autoPlay */
		_this.slideX = 0;
		_this.iTimer = null;
		if(configs !== undefined && _this.options.autoPlay ){
			auto();
		}
		function auto(){
			_this.iTimer = setInterval(function (){
				_this.options.initialSlide++;

				_this.options.initialSlide = _this.options.initialSlide % _this.slide.length;

				autoPlay(_this.options.speed);

			},_this.options.autoTime);
		}
		function autoPlay(s){
			_this.slideX = -_this.options.initialSlide*_this.slide.width();
			_this.slideBtn.eq(_this.options.initialSlide).addClass('x_active').siblings().removeClass('x_active');
			_this.wrapper.css({
				'transition' : ''+s+'s linear',
				'transform' : 'translateX('+_this.slideX+'px)'
			});
		}

		/* move slide */
		_this.startTouchX = 0;
		_this.startX = 0;
		_this.container.on('touchstart',function(ev){
			var touch = ev.originalEvent.changedTouches[0];
			_this.startTouchX = touch.pageX;
			_this.startX = _this.slideX;
			clearInterval(_this.iTimer);
		})
		_this.container.on('touchmove',function (ev){
			var touch = ev.originalEvent.changedTouches[0];
			var disX = (touch.pageX - _this.startTouchX) * _this.options.slideSpeed;
			_this.slideX = _this.startX + disX;
			_this.wrapper.css({
				'transition' : 'none',
				'transform' : 'translateX('+_this.slideX+'px)'
			});
		})
		_this.container.on('touchend',function (){
			_this.options.initialSlide = _this.slideX / _this.container.width();
			_this.options.initialSlide = -Math.round(_this.options.initialSlide);
			if(_this.options.initialSlide < 0){
				_this.options.initialSlide = 0;
			} else if(_this.options.initialSlide > _this.slide.length - 1){
				_this.options.initialSlide = _this.slide.length - 1;
			}
			autoPlay(0.2);
			if(configs !== undefined && _this.options.autoPlay ){
				auto();
			}
		})

		/* settings slideSize */
		function sizeSetting(){
			var slideLen = _this.slide.length;
			_this.slide.width((100/slideLen)+'%');
			_this.wrapper.width((slideLen * 100)+'%');
		}

		sizeSetting();
		_this.init();
	}

	Swiper.prototype = {
		init : function (){
			this.slideBtn.eq(this.options.initialSlide).addClass('x_active').siblings().removeClass('x_active');
			this.wrapper.css({
				'transform' : 'translateX('+(-this.options.initialSlide*this.slide.width())+'px)'
			});
		}
	}

	window.Swiper = Swiper;
})(jQuery,window);