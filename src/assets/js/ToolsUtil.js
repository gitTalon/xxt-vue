/*function formatDateTime
*desc 处理 日期时间和时间戳的转化
*time 2016-9-29 11:06:10
*author talon
*/

function formatDateTime(timeStamp,pattern) {
		var retrunStr="";
		var date=new Date(timeStamp*1000);
		var Y = date.getFullYear();
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
	    //var D = date.getDate() ;
	    var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate());
	  	/*var h = date.getHours() ;
	    var m = date.getMinutes() ;
	    var s = date.getSeconds();*/
	   var h = (date.getHours() <10? '0'+(date.getHours()):date.getHours() );
	    var m =  (date.getMinutes() <10? '0'+(date.getMinutes()):date.getMinutes() );
	    var s = (date.getSeconds() <10? '0'+(date.getSeconds()):date.getSeconds() );

	    switch(pattern){
	    		case "yyyy-MM-dd hh:mm:ss":
		    			retrunStr=Y+"-"+M+"-"+D+" "+h+":"+m+":"+s;break;
		    	case "yyyy-MM-dd":
		    			retrunStr=Y+"-"+M+"-"+D;break;
		    	case "MM-dd hh:mm":
		    			retrunStr=M+"-"+D+" "+h+":"+m;break;

		    	case "yyyy/MM/dd":
		    			retrunStr=Y+"/"+M+"/"+D;break;

		    	case "年月日":
		    			retrunStr=Y+"年"+M+"月"+D+"日";break;

		    	case "yyyy-MM":
		    			retrunStr=Y+"-"+M;break;
		    	case "yyyy/MM":
		    			retrunStr=Y+"/"+M;break;

		    	case "年月":
		    			retrunStr=Y+"年"+M+"月";break;
		    	case "yyyy":
		    			retrunStr=Y;break;

		    	case "年":
		    			retrunStr=Y+"年";break;

		    	default:
		    		retrunStr=Y+"-"+M+"-"+D;
	    }

	    return retrunStr;
		
}

/*function formatStamp
*desc 处理 日期时间和时间戳的转化
*time 2016-9-29 11:06:10
*author talon
*/

function formatStamp(dateTime){
	//yy-mm-dd (其他格式支不支持，待验证^_^)
	var dateTime=dateTime;
	var timeStamp="";
	timeStamp=new Date(dateTime).getTime()/1000;

	return timeStamp;
}
/*=========================================================================================*/

function isMobileNum(dom){
	
}

/*function name wait
 * param dom
 * desc 验证码按钮倒计时 （点击触发 wait(this)）
 * talon 2016-10-25 16:57:53
 * */
function wait(dom){
	var wait=20;
	var countdown;
	var  time= function(dom) {
        if (wait == 0) {
            $(dom).removeAttr("disabled");
            //$(dom).removeClass("am-btn-default").addClass("am-btn-success");
            $(dom).html("获取验证码");
            wait = 20;
            countdown.clearTimeout();
        } else {
             $(dom).attr("disabled", true);
            // $(dom).removeClass("am-btn-success").addClass("am-btn-default");
           	 wait--;
             $(dom).html(""+wait+"s重新获取");
            countdown=setTimeout(function() {
                time(dom);
            },
            1000);
              
        }
	};
	time(dom);
}


/*     function test()
           {
              var temp = document.getElementById("text1");
              //对电子邮件的验证
              var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
              if(!myreg.test(temp.value))
              {
                   alert('提示\n\n请输入有效的E_mail！');
                   myreg.focus();
                  return false;
            }
         }
          //由于方法相同，一下只写出相关的正则表达式
         //对于手机号码的验证（提供了两种方法）
         var mobile=/^((13[0-9]{1})|159|153)+\d{8}$/;
          var mobile1=/^(13+\d{9})|(159+\d{8})|(153+\d{8})$/;
          //对于区号的验证
         var phoneAreaNum = /^\d{3,4}$/;
         //对于电话号码的验证
          var phone =/^\d{7,8}$/;

二.解释相关的意义 
     1.  /^$/ 这个是个通用的格式。 
         ^ 匹配输入字符串的开始位置；$匹配输入字符串的结束位置 
     2. 里面输入需要实现的功能。 
        * 匹配前面的子表达式零次或多次； 
       + 匹配前面的子表达式一次或多次； 
       ？匹配前面的子表达式零次或一次； 
       \d  匹配一个数字字符，等价于[0-9]*/

/**
 * function		toast
 * param  msg --信息  ms--毫秒
 * desc		闪提示弹框
 * author	talon
 * timer	2016-11-20 15:06:09
 * */
function toast(msg,ms){
	var ms=ms||500;
	var toastDiv='<div class="tl-toast">'+msg+'</div>';
	var timer;
	
	$("body").append(toastDiv);
	 timer= setTimeout("delDoast()",ms);
}
function delDoast(timer){
	$(".tl-toast").remove();
	//clearTimeout(timer);
}

/*==================================================================================*/
/* function	secondTimer
*  param seconds(秒数)
*  retrun timer(天时分秒对象)
*  athor talon 
*  time 2016-11-23 14:52:39
*  desc 将传入的秒数（正整数）转换成 json对象{"day":d,"hour":h,"minute":m,"seconds":s}
*/
function secondTimer(seconds) {
	var timer={};		//返回对象
	var seconds=seconds;//秒数
	var d=0,
		h=0,
		m=0,
		s=0;

	d=parseInt(seconds/(60*60*24));//天
	d=d+'';

	h=parseInt(seconds%(60*60*24)/3600);//时
	h=(h<10?'0'+h:h+'');//优化

	m=parseInt(seconds%(60*60*24)%3600/60);//分
	m=(m<10?'0'+m:m+'');//优化

	s=parseInt(seconds%(60*60*24)%3600%60);//秒
	s=(s<10?'0'+s:s+'');//优化
		
	timer={
		"day":d,
		"hour":h,
		"minute":m,
		"seconds":s
	}
	return timer;
}
/*==================================================================================*/