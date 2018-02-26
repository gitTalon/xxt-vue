/*
 * 手机端动态设置html font-size 
 * time 2016-9-6 16:23:05
 * author  talon
 * desc 设计图宽度按750
 * 參考新浪wap http://www.sina.cn/
 * */

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        //新浪最大 html font-size 最大值就是62px 对应document的宽度就是465px（465应该是市场手机最大屏了吧）
        if(windowWidth>465){
        	windowWidth=465;
        }
        html.style.fontSize = windowWidth / 7.5 + 'px';
        // 等价于html.style.fontSize = windowWidth / 750 * 100 + 'px';
    }, false);
    
    window.addEventListener("resize", function () {
    	  var html = document.documentElement;
        var windowWidth = html.clientWidth;
        //新浪最大 html font-size 最大值就是62px 对应document的宽度就是465px（465应该是市场手机最大屏了吧）
        if(windowWidth>465){
        	windowWidth=465;
        }
        html.style.fontSize = windowWidth / 7.5 + 'px';
        // 等价于html.style.fontSize = windowWidth / 750 * 100 + 'px';
    }, false);
})();
