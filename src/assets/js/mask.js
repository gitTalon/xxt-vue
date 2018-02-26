/**
 * 蒙版层
 * author Talon
 * time 2016-4-22 15:13:51
 * version v1.0.0
 */
(function( $ ) { 
	$.fn.masker = function(options) { 
		$.fn.masker.defaults={
			title:"slide", //标题
			html:"",	//蒙版内放置子定义内容
			unmaskBtn:true
		};
		
		return this.each(function() {

			var opts = $.extend({},$.fn.masker.defaults,options);

			var  createMask=function(){
				var maskDiv=''+
				'<div class="mask">'+
						'<section class="confirm" >'+
							'<p class="find_studbo">'+opts.title
							'</p>'+opts.html+
						'</section>'+
				'</div>';
				$("body").append(maskDiv);
			};
			
			$(this).bind("click",createMask);
		});//each End

		
		
	}; 
})(jQuery); 