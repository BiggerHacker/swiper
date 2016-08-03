# swiper
自己写的一款移动端swiper组件<br />
<br />
目前只实现了很少部分的功能，<br />
简单的滑动切换，索引，自适应屏幕以及自动播放幻灯片功能。<br />

调用方式：<br />
JS：<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var swiper = new Swiper('x_swiper_container',{});<br />
      

API:<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initialSlide : 索引，默认是0，当前显示第几个幻灯片。<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoPlay   ： 是否自动播放，默认false<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoTime   ： 播放事件间隔，单位毫秒<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;speed      ： 滚动速度，单位秒<br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slideSpeed ： 滑动速度 默认1，加快滑动速度，就在1的基础上增加，比如1.1,1.2...<br />
