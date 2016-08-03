# swiper
自己写的一款移动端swiper组件

目前只实现了很少部分的功能，
简单的滑动切换，索引，自适应屏幕以及自动播放幻灯片功能。

调用方式：
JS：   
    var swiper = new Swiper('x_swiper_container',{});
      

API:
    initialSlide : 索引，默认是0，当前显示第几个幻灯片。
    autoPlay   ： 是否自动播放，默认false
    autoTime   ： 播放事件间隔，单位毫秒
    speed      ： 滚动速度，单位秒
    slideSpeed ： 滑动速度 默认1，加快滑动速度，就在1的基础上增加，比如1.1,1.2...
