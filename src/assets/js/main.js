
   $(function () {

    //筛选
    $('.sildes div p').click(function(event) {
       if($(this).hasClass('selected')){
          $(this).find('img').css({
            opacity: '1'
          });
          $(this).removeClass('selected')
       }else{
          $(this).find('img').css({
            opacity: '0'
          });
          $(this).addClass('selected')
       }
       
    });
    
    $('.filter').click(function(event) {
      event.preventDefault();
      $('.mask').show();
      $('.sildes').addClass('in')
    });
    
    $('.makesure,.cans').click(function(event) {
      event.preventDefault();
      $('.mask').hide();
      $('.sildes').removeClass('in');
      if(this.className=='makesrue'){
        //点击的是确定按钮
      }
    });

    $('.nodelcol').click(function(event) {
      event.preventDefault();
	 
      if($(this).hasClass('check')){
        $(this).removeClass('check');
        if($(this).hasClass('fp')){//发票下选择
          $('.fapiao').css({
            opacity: '0'
          })
        }
		if($(this).hasClass('dk')){//低扣下选择
          $('.dikou').hide();
        }
      }else{
        $(this).addClass('check');
        if($(this).hasClass('fp')){//发票下选择
          $('.fapiao').css({
            opacity: '1'
          })	   
        }
        if($(this).hasClass('dk')){//低扣下选择
          $('.dikou').show();	   
        }

	 
        if($(this).hasClass('adds')){//地址下选择,只能选一个
          $(this).parents('.forad').siblings('.forad').find('.nodelcol').removeClass('check');
        }
      }

    });



$('.from_send').click(function(){
    if($('.from_send').is(':checked')){
        $('.send_box').hide();
        $('.send_input').show();
    }
});

$(function(){
    $(".select_box>li").click(function(){
        $(this).parent().prev().val($(this).html());
        $(this).parent().hide();
    });
});

//ul li 模拟select框
$(function(){
  $(".tl-select_status").click(function(){
      $(this).siblings(".tl-selected-list").slideToggle();
  });
  
  $(".tl-selected-list ul>li").click(function(){
      //收起
      $(this).parents(".tl-selected-list").slideUp();
      
      //ul赋值
      $(this).parents(".tl-selected-list").siblings(".tl-select_status").find(".tl-selected-val").html($(this).html());
      
      //ul 选中添加样式
      $(this).addClass("tl-checked").siblings().removeClass("tl-checked");
      //select赋值
      
      $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).prop("selected", true);   
      $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).siblings().prop("selected", false);  
  });
  
  $(".tl-selected-list").parents(".tl-select-box").mouseleave(function(){
                 $(".tl-selected-list").slideUp();
    });
});

//页面加载之后,设置.样式.
       jQuery(function(){
           //使用id选择器;例如:tab对象->tr->td对象.
           $(".sed_p").each(function(i){
               //获取td当前对象的文本,如果长度大于25;
               if($(this).text().length>15){
                   //给td设置title属性,并且设置td的完整值.给title属性.
                   $(this).attr("title",$(this).text());
                   //获取td的值,进行截取。赋值给text变量保存.
                   var text=$(this).text().substring(0,15)+"...";
                   //重新为td赋值;
                   $(this).text(text);
               }
           });
       });

$(function(){
    //解决ios手机端textarea被遮挡
    $("textarea,input").focus(function(){
       $('html,body').animate({scrollTop:$(this).offset().top}, 800);
    });
});

/*校讯通select选择框end*/

/*底部菜单*/
$(".foot-menu").on("click",function(){
  $(this).toggleClass("open");
  if($(this).hasClass("open")){
      $('.mask').show();

      $('.function_menu').removeClass("hide");
     // $('.function_menu').slideUp("slow");
  }else{
     $('.mask').hide();

      $('.function_menu').addClass("hide");
     // $('.function_menu').slideDown("slow");
  }
	
 // $('.mask').show();

    //$('.function_menu').removeClass("hide");
	//家长
	if($("#identity").val()=="1"){
		$("#view3_ul").slideDown("slow");
   // $("#view3_ul").slideToggle("slow");
		$("#view2_ul").hide();
		$("#view1_ul").hide();
        $('.genearch').show();
        $('.conservator').hide();
	}else{
		$("#view2_ul").hide();
		$("#view3_ul").hide();
        $("#view4_ul,.manager").hide();
		$("#view1_ul").slideDown("slow");
    //$("#view1_ul").slideToggle("slow");
        $('.conservator').show();
	}
});


//点击人员管理
$("#menu_rygl").on("click",function(){
	$(this).parent().hide();
	$("#view2_ul").slideDown("slow");
	$("#view1_ul").hide();
	$("#view3_ul").hide();
});

//蒙版点击


$('.mask').on("click",function(){
   //菜单项隐藏，如果有的话
        $('.function_menu').addClass("hide");
        $(this).hide();
        //蒙版隐藏并清空
       // $(this).siblings().remove();
       // $(this).parent().hide();
        //$(".nodelcol").removeClass("check");
});



/*弹出框*/
$('.back').click(function(){
    // $(this).parents("section").hide();
    // $('.mask').hide();
    //$('.mask-bg').click();
    layer.closeAll();
});
/*弹出框end*/

  });





/*************************************************************************/
/*
  author:Talon
  time: 2016-4-14 14:21:08
  desc:整理的一部分
 * */
 /**************************************************************/
   /*校讯通select选择框*/
   function selected(e){
       $(e).next().show();
       $(e).parent().siblings().find(".select_box").hide();

   }
 /**************************************************************/
 /*查找学生模块*/
//查找按钮
 function seekStudent(){
     $.post("mask/seekStudent.html",{},function(data,status){
          //alert("Data: " + data + "nStatus: " + status);
          //$(".mask").html(data).show();
           layer.open({
            content: data
          }); 
        },"html");
 }

//查找学生，提交验证
 function checkStuInput(){
    if($("#stuName").val()==""){
        alert("请输入学生姓名");
        $("#stuName").focus();
        return false;
    }else if($("#pareName").val()==""){
        alert("请输入家长姓名");
         $("#pareName").focus();
        return;
    }else if($("#phone").val()==""){
      alert("请输入手机号");
       $("#phone").focus();
      return;
    }else if($("#stuID").val()==""){
      alert("请输入学生编号");
       $("#stuID").focus();
      return;
    }else{
        alert("请输入学生卡号");
         $("#stuCardID").focus();
        return;
    }
   
 }

//检验手机
 function checkPhone(dom){
    //数字验证
    if(isNaN($(dom).val())){
       alert("输入手机格式有误！");
       $(dom).focus();
       return;
    }
    //"."验证
    if($(dom).val().indexOf(".")!=-1){
         alert("输入手机格式有误！");
       $(dom).focus();
       return;
    }
    

 }
 //手机长度
function checkPhoneLength(dom){
  //长度验证
    if($(dom).val().length<11){
      alert("手机号长度必须是11位！");
      $(dom).focus();

    }
}

//学生基本信息
function stuInfo(stuID){
     $.post("mask/stuInfo.html",{},function(data,status){
          //alert("Data: " + data + "nStatus: " + status);
          //$(".mask").html(data).show();
           layer.open({
            content: data
          }); 
        },"html");
}
//发送短信--学生
 function sendStuSMS(stuID){
     $.post("mask/stuSMS.html",{},function(data,status){
          //alert("Data: " + data + "nStatus: " + status);
          //$(".mask").html(data).show();
           layer.open({
            content: data
          }); 
        },"html");
 }

 
//发送短信检验--学生
function checkStuSMS(){
  if($("#smsTitle").val()==""){
      alert("请输入短信标题");
      $("#smsTitle").focus();
      return;
  }else if($("#smsCont").val()==""){
      alert("请输入短信内容");
      $("#smsCont").focus();
      return;
  }
}

/*查找老师模块*/
//查找按钮
function seekTeacher(){
     $.post("mask/seekTeacher.html",{},function(data,status){
         
           layer.open({
            content: data
          }); 
        },"html");
}

//查找老师提交验证

 function checkTeaInput(){
    if($("#teaName").val()==""){
       alert("请输入教师姓名");
       $("#teaName").focus();
       return;
    }else if($("#teaPhone").val()==""){
      alert("请输入教师号码");
      $("#teaPhone").focus();
      return;
    }
 }

//发送短信检验--老师
function checkTeaSMS(){
  if($("#smsTitle").val()==""){
      alert("请输入短信标题");
      $("#smsTitle").focus();
      return;
  }else if($("#smsCont").val()==""){

      alert("请输入短信内容");
       $("#smsCont").focus();
       return;
  }
}

//发送短信--学生
 function sendTeaSMS(stuID){
     $.post("mask/teaSMS.html",{},function(data,status){
          //alert("Data: " + data + "nStatus: " + status);
          //$(".mask").html(data).show();
           layer.open({
            content: data
          }); 
        },"html");
 }

 /**************************************************************/
 /*成绩通知*/
 //定时发送-显示科目
 function showSubject(){

  $.post("mask/subject_list.html",{},function(data,status){ 
         //打开蒙版
           layer.open({
            content: data
          }); 

         /*
          *注意：
          *因为蒙版是异步请求生成
          *故生成之后要绑定点击事件，点击图片复选才生效
          */
          $('.check_none').click(function(){
              $(this).siblings("input[type='checkbox']").attr("checked",true);
              $(this).addClass("hide").siblings("img").removeClass("hide");
          });
          $('.checked').click(function(){
            $(this).siblings("input[type='checkbox']").attr("checked",false);
              $(this).addClass("hide").siblings("img").removeClass("hide");
          });

          var se_subject=function(){

              if($("input[name='subName']:checked").length==0){
                  aler("请选择科目名称");
                  return;
              }

              $('.send_table1').removeClass("hide");
                  //$('.confirm1,.mask').hide();
              $('.send_table').hide();
              $('.marked').hide();

              $(".score").empty();
              if(!$('.chinese').hasClass("hide")){

                  $('.score').append("<input type='text' onkeyup='checkInputSore(this)' placeholder='语文' maxlength='5' class='height_2_5em width_55px border margin_left10 text_center bottom_6em'>");
              }

              if(!$('.math').hasClass("hide")){

                  $('.score').append("<input type='text'  onkeyup='checkInputSore(this)'  placeholder='数学' maxlength='5'  class='height_2_5em width_55px border margin_left10 text_center bottom_6em'>");
              }

              if(!$('.english').hasClass("hide")){

                  $('.score').append("<input type='text'  onkeyup='checkInputSore(this)'  placeholder='英语' maxlength='5'  class='height_2_5em width_55px border margin_left10 text_center bottom_6em'>");
              }

              if(!$('.physics').hasClass("hide")){
              
                  $('.score').append("<input type='text'  onkeyup='checkInputSore(this)'  placeholder='物理' maxlength='5'  class='height_2_5em width_55px border margin_left10 text_center bottom_6em'>");
              }

              if(!$('.morality').hasClass("hide")){

                  $('.score').append("<input type='text'  onkeyup='checkInputSore(this)'  placeholder='思想品德' maxlength='5'  class='height_2_5em width_55px margin_left10 border text_center bottom_6em'>");
              }

              if(!$('.geography').hasClass("hide")){

                  $('.score').append("<input type='text'  onkeyup='checkInputSore(this)' placeholder='地理' maxlength='5' class='height_2_5em width_55px border margin_left10 text_center bottom_6em'>");
              }

              layer.closeAll();
          };


          $("#se_subject").on("click",function(){
                se_subject();
                $(".score>input").focus(function(){
                   //$('.foot').animate({scrollTop:$(this).offset().top}, 800);
                   $(".foot").css("bottom","0!important");
              });
          });



        },"html"); 
 }

function checkInputSore(dom){
    var inputVal=$(dom).val();
    // if(inputVal==""){
    //     alert("请输入分数！");
    //     return;
    // }else
     if(isNaN(inputVal)){
         alert("请输入数字");
         return;
    }else if(parseFloat(inputVal)>120){
      alert("输入分数不能大于120");
    }
}

 //发送成绩通知按钮事件
 function sendScore(){
    
    if($("#sendTitle").val()==""){//判断标题
        alert("请输入标题");
        $("#sendTitle").focus();
        return;
    }

    if($("#testTime").val()==""){//判断标题
        alert("请输入考试时间");
        $("#testTime").focus();
        return;
    }

    if(!$(".marked").is(":hidden")){
        alert("请选择科目");
        return;
    }

 }

 /**************************************************************/
 //班务通知
  //创建新群--点击
 function createNewGroup(){
   $.post("mask/createNewGroup.html", {},function(data,status){
              layer.open({
                content: data
              }); 
          },"html");
    $('.service_ul').hide();

 }
 //创建新群组校验
 function checkNewGroup(){
    if($("#newGroupName").val()==""){
        alert("请输入名称！");
        $("#newGroupName").focus();
        return;
    };
 }

 //创建临时群组
 function createTempGroup(){
    $.post("mask/createTempGroup.html",{},function(data,status){
             layer.open({
                  content: data
                });

             //绑定下拉
             $(".select_box>li").click(function(){
               $(this).parent().prev().val($(this).html());
                  $(this).parent().hide();
            });
            //下拉失去焦点
            $(".select_box").parent().mouseleave(function(){
               $(".select_box").hide();
            });

            },"html");
      $('.service_ul').hide();
 }

//邀请成员
function inviteMember(){
    $.post("mask/inviteMember.html",{},function(data,status){
             layer.open({
                  content: data
                });

             //绑定下拉
            $(".branch .tl-select_status").click(function(){
                $(this).siblings(".tl-selected-list").slideToggle();
            });
            $(".branch .tl-selected-list ul>li").click(function(){
                //收起
                $(this).parents(".tl-selected-list").slideUp();
                //ul赋值
                $(this).parents(".tl-selected-list").siblings(".tl-select_status").find(".tl-selected-val").html($(this).html());
                //ul 选中添加样式
                $(this).addClass("tl-checked").siblings().removeClass("tl-checked");
                //select赋值
                $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).prop("selected", true);   
      $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).siblings().prop("selected", false);   
            });
             $(".branch .tl-selected-list").parents(".tl-select-box").mouseleave(function(){
               $(".branch .tl-selected-list").slideUp();
          });
          
          /*
           $('.branch .student_box').click(function(){
            mb_selected=parseInt($(".branch .selected").html());
            mb_unselected=parseInt($(".branch .unselected").html());
            
               if(!$(this).hasClass("stu_on")){
                  // $(this).css({"border":"1px solid #B0DAFF","background":"#B0DAFF"});
                  $(this).addClass("stu_on");
                  $(this).children("input[type='checkbox']").attr("checked",true);
                  // $(this).children("span").removeClass("stud_img").addClass("stud_img2");
                   
                   //未选和已选变化
                   mb_selected++;
                   mb_unselected--;
                  
                   $(".branch .selected").html(mb_selected);
                   $(".branch .unselected").html(mb_unselected);
               }else{
                   //$(this).css({"border":"1px solid #ccc","background":"white"});
                   $(this).removeClass("stu_on");
                   $(this).children("input[type='checkbox']").attr("checked",false);
                   //$(this).children("input[type='checkbox']")[0].checked=true;
                  // $(this).children("span").removeClass("stud_img2").addClass("stud_img");
                   
                   //未选和已选变化
                   mb_selected--;
                   mb_unselected++;
                    $(".branch .selected").html(mb_selected);
                   $(".branch .unselected").html(mb_unselected);
               }

           });
          */
         
           $("#inv_grade_ul").click(function(){
           
              
              $("#inv_class").show();
             
          });

          //班级点击
          $("#inv_class_ul").click(function(){
            //alert($("#classId").val());
            var classId=$("#inv_classId").val();
            var url="mask/class"+classId+".html";
             $.get(url, function(s) {
                $("#inv_students").append(s);;
               
                // cleartest();
                 var duplicateChk = {};
                  $('#inv_students .one-stu[id]').each (function () {
                      if (duplicateChk.hasOwnProperty(this.id)) {
                          $(this).remove();
                      } else {
                         duplicateChk[this.id] = 'true';
                      }
                  });
                // jQuery("#unSelectTab").html(jQuery("input:checkbox[name*='teacherlist']").length - jQuery("input[name*='teacherlist']:checked").length);
                // });

                //显示学生
                $("#inv_students").show();
                //未选赋值
                $(".branch .unselected").html($(".branch .one-stu input[type='checkbox']").length-$(".branch .one-stu input[type='checkbox']:checked").length);
                //文字 选择学生后才能发送。。 隐藏
                $(".mermber-tip").hide();

            });
             
             
        });

         


            },"html");
      $('.service_ul').hide();
}

//编辑成员
function editMember(){
    $.post("mask/editMember.html",{},function(data,status){
             layer.open({
                  content: data
                });

             //绑定下拉
             $(".select_box>li").click(function(){
               $(this).parent().prev().val($(this).html());
                  $(this).parent().hide();
            });
            //下拉失去焦点
            $(".select_box").parent().mouseleave(function(){
               $(".select_box").hide();
            });

              //成员点击添加样式事件
             $('.mermber-box').click(function(){
               if(!$(this).hasClass("stu_on")){
                  
                  $(this).addClass("stu_on");
                  $(this).children("input[type='checkbox']").attr("checked",true);
               }else{
                   $(this).removeClass("stu_on");
                   $(this).children("input[type='checkbox']").attr("checked",false);
               }

            });

            },"html");
      $('.service_ul').hide();
}

//编辑成员校验
function checkEditMember(){
    if($("#editGroup").val()==""){
        alert("请选择要编辑的群组");
        $("#editGroup").focus();
        return;
    }
    var members=$('.mermber-box').filter(".stu_on");
    if(members.length==0){
        alert("请选择成员");
        return;
    }
}

//重命名群组
function renameGroup(){
    $.post("mask/renameGroup.html",{},function(data,status){
             layer.open({
                  content: data
                });

             //绑定下拉
             $(".select_box>li").click(function(){
               $(this).parent().prev().val($(this).html());
                  $(this).parent().hide();
            });
            //下拉失去焦点
            $(".select_box").parent().mouseleave(function(){
               $(".select_box").hide();
            });

            },"html");
      $('.service_ul').hide();
}

//重命名群组校验
function checkRenameGroup(){
    if($("#renameGroup").val()==""){
        alert("请选择要删除的群组");
        $("#renameGroup").focus();
        return;
    }else if($("#newName").val()==""){
         alert("请输入新群组名");
        $("#newName").focus();
        return;
    }
}

//删除群组
function deleteGroup(){
    $.post("mask/deleteGroup.html",{},function(data,status){
             layer.open({
                  content: data
                });

             //绑定下拉
             $(".select_box>li").click(function(){
               $(this).parent().prev().val($(this).html());
                  $(this).parent().hide();
            });
            //下拉失去焦点
            $(".select_box").parent().mouseleave(function(){
               $(".select_box").hide();
            });

            },"html");
      $('.service_ul').hide();
}

//删除群组校验
function checkDeleteGroup(){
    if($("#delGroupName").val()==""){
        alert("请选择要删除的分组");
        $("#delGroupName").focus();
        return;
    }
}

//添加到分组校验
function checkAddToGroup(){
  if($("#add_groupId").val()==""){
     alert("请选择添加到的群组");
     return;
  }

  if($("#inv_students .one-stu input[type='checkbox']:checked").length==0){
       alert("请选择学生");
       return;
  }
}

//发送通知校验
function checkNoticeSend(){
  var stus= $("#students .one-stu input[type='checkbox']:checked").length;
  if(stus==0){
      alert("请选择学生！");
      return;
  }

  if($("textarea[name='send_cont']").val()==""){
      alert("请填写发送内容");
      return;
  }
}
 /**************************************************************/


// 选择家长、教师身份切换
function check(e){
      if(e==1){
          $('.parent img').attr("src","img/parent.png");
          $('.teach img').attr("src","img/teacher1.png");
          $('.parent').css("background","white");
          $('.parent a').css("color","black");
          $('.teach a').css("color","white");
          $('.stud_list').removeClass("hide");
          $('.teach_list').addClass("hide");
          $('.teach').css("background","#C5C8CD");
          
          //身份隐藏域 1
          $("#identity").val("1");

      }else if(e==2){
          $('.teach img').attr("src","img/teacher.png");
          $('.parent img').attr("src","img/parent1.png");
          $('.teach').css("background","white");
          $('.parent').css("background","#C5C8CD");
          $('.parent a').css("color","white");
          $('.teach a').css("color","black");
          $('.teach_list').removeClass("hide");
          $('.stud_list').addClass("hide");
          
          //身份隐藏域 2
          $("#identity").val("2");
      }
}
/**************************************************************/

//统计发送通知内容文字数字--公用
function countWords(dom){
  var len=$(dom).val().length;
  if(len<=120){
    $("#words").html(len);
  }
}
/**************************************************************/
//咨询记录

//点击搜索
function advisorySearch(){
    if($("#replyType").val()==""){
      alert("请选择回复状态");
      $("#replyType").focus();
      return;
    }

    if($("#startTime").val()==""){
      alert("输入开始时间");
     // $("#startTime").focus();
      return;
    }

    if($("#endTime").val()==""){
      alert("输入结束时间");
      //$("#endTime").focus();
      return;
    }

    if($("#search_cont").val()==""){
      alert("输入搜索内容");
      $("#search_cont").focus();
      return;
    }

     $('.column').hide();
     $('.dd').removeClass("hide");
  }


/*结束时间必须大于开始时间*/
   function compareTime(time){
       var starttime=$('#startTime').val();
       var endtime=$('#endTime').val();

       if($("#endTime").val()!=""){
           if(starttime==""){
               $('#endTime').val("");
               alert("请先填写开始时间");
               return;
           }
           
           endtime = new Date(Date.parse(endtime.replace(/-/g,'/')));
           endtime = endtime.getTime();

           starttime = new Date(Date.parse(starttime.replace(/-/g,'/')));
           starttime = starttime.getTime();

           if(endtime<starttime){
              $('#endTime').val("");
               alert("结束时间必须大于开始时间");
            }
          /*
           if(endtime>=starttime){
           //if(timestamp>timestamp2){

           }else{
               $('#endTime').val("");
               alert("结束时间必须大于开始时间");
           }*/
       }

   }

/*记录与回复*/
  //公用
   function showSMS(sid){
       //$(".mask,.confirm2").show();
       var html=$("#sid_"+sid).html();
        layer.open({ content: html});
   }
   //查看
   function reply(){
      $.post("mask/lookAdv.html",{},function(data,status){
             layer.open({ content: data});

            },"html");
       
   }
   //点击回复
   function unreply(){
      $.post("mask/replyAdv.html",{},function(data,status){
             layer.open({ content: data});

            },"html");
   }


   function massageSearch(){
      if($("#smsType").val()==""){
      alert("请选择短信类别");
      $("#smsType").focus();
      return;
    }

    if($("#startTime").val()==""){
      alert("输入开始时间");
      //$("#startTime").focus();
      return;
    }

    if($("#endTime").val()==""){
      alert("输入结束时间");
     // $("#endTime").focus();
      return;
    }

    if($("#search_cont").val()==""){
      alert("输入搜索内容");
      $("#search_cont").focus();
      return;
    }

     $('.column').hide();
     $('.dd').removeClass("hide");
   }
   /*记录与回复end*/
/********************************************************************/
//门禁查看

//搜索确定按钮
  function accessSearch(){
      if($("#beginTime").val()==""){
          alert("请选择时间");
          $("#beginTime").focus();
          return;
      }

      if($("#roomType").val()==""){
          alert("请选择走读类型");
          $("#roomType").focus();
          return;
      }

      
      if($("input[type='checkbox'][name='hour']:checked").length==0){
           alert("请勾选时刻");
           return;
      }
  }

  //正常上学
  function goSchool(){
       $.post("mask/goSchool.html",{},function(data,status){
             layer.open({ content: data});

            },"html");
  }

  //迟到
  function beLate(){
       $.post("mask/beLate.html",{},function(data,status){
             layer.open({ content: data});

            },"html");
  }

  //正常放学
   function afterSchool(){
       $.post("mask/afterSchool.html",{},function(data,status){
             layer.open({ content: data});

            },"html");
  }

/********************************************************************/
//成绩查看 

//查看科目列表
function scoreList(){
      $.post("mask/scoreList.html",{},function(data,status){
             layer.open({ content: data});

            $(".tl-select_status").click(function(){
                //$(this).siblings(".tl-selected-list").slideDown();
                $(this).siblings(".tl-selected-list").slideToggle();
            });
            
            $(".tl-selected-list ul>li").click(function(){
                //收起
                $(this).parents(".tl-selected-list").slideUp();
                
                //ul赋值
                $(this).parents(".tl-selected-list").siblings(".tl-select_status").find(".tl-selected-val").html($(this).html());
                
                //ul 选中添加样式
                $(this).addClass("tl-checked").siblings().removeClass("tl-checked");
                //select赋值
                
                $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).prop("selected", true);   
      $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).siblings().prop("selected", false);  
            });

             $(".tl-selected-list").parents(".tl-select-box").mouseleave(function(){
                 $(".tl-selected-list").slideUp();
            });

            },"html");
}

//点击查看排名
function scoreRank(){
      layer.closeAll();
      $.post("mask/scoreRank.html",{},function(data,status){
             layer.open({ content: data});
             $(".select_box>li").click(function(){
                $(this).parent().prev().val($(this).html());
                $(this).parent().hide();
              }); 

            $(".select_box").parent().mouseleave(function(){
               $(".select_box").hide();
            });

            },"html");
}

function findSubject(){
    if($("#testTitle").val()==""){
       alert("请输入考试标题");
        $("#testTitle").focus();
        return;
    }

    if($("#subjectName").val()==""){
       alert("请选择科目");
        $("#subjectName").focus();
        return;
    }
}

/********************************************************************/
/*短信查看*/

function smgSearch(){
  if($("#dispatch").val()==""){
        alert("请选择收发类型");
        $("#dispatch").focus();
        return;
    }
    if($("#objType").val()==""){
        alert("请选择对象类别");
        $("#objType").focus();
        return;
    }
    if($("#startTime").val()==""){
        alert("请选择开始时间");
        //$("#startTime").focus();
        return;
    }
    if($("#endTime").val()==""){
        alert("请选择结束时间");
        //$("#endtime").focus();
        return;
    }

    if($("#search_cont").val()==""){
        alert("请输入搜索内容");
        $("#search_cont").focus();
        return;
    }

    $('.column').hide();
     $('.dd').removeClass("hide");
}
/********************************************************************/
/*咨询查看*/
function AdvSearch(){
     if($("#replyType").val()==""){
        alert("请选择回复类型");
        $("#replyType").focus();
        return;
    }
    
    if($("#startTime").val()==""){
        alert("请选择开始时间");
        //$("#startTime").focus();
        return;
    }
    if($("#endTime").val()==""){
        alert("请选择结束时间");
       // $("#endtime").focus();
        return;
    }

    if($("#search_cont").val()==""){
        alert("请输入搜索内容");
        $("#search_cont").focus();
        return;
    }

    $('.column').hide();
     $('.dd').removeClass("hide");
}

function checkReply(){
    if($("#reply_cont").val()==""){
        alert("请输入内容");
        $("#reply_cont").focus();
        return;
    }
}
/********************************************************************/
/*更多*/

//后台管理学生老师
 function adminFindStu(e){
      $.post("mask/admin_stuFilter.html",{},function(data,status){
             layer.open({ content: data});

            

            },"html"); 
}

function adminSearchStu(){

      if($("#schoolName").val()==""){
        alert("请输入学校名称");
        $("#schoolName").focus();
        return;
    }

    if($("#stuName").val()==""){
        alert("请输入学生姓名");
        $("#stuName").focus();
        return;
    }
    if($("#parent").val()==""){
        alert("请输入家长姓名");
        $("#parent").focus();
        return;
    }
    if($("#phone").val()==""){
        alert("请输入手机号");
        $("#phone").focus();
        return;
    }

    if($("#stuNo").val()==""){
        alert("请输入学生编号");
        $("#stuNo").focus();
        return;
    }
    if($("#stuCard").val()==""){
        alert("请输入学生卡号");
        $("#stuCard").focus();
        return;
    }
    if($("#ICCard").val()==""){
        alert("请输入IC卡号");
        $("#ICCard").focus();
        return;
    }
      layer.closeAll();
      $('.column').hide();
      $('.salt_list').removeClass("hide");

}

//admin stu基本信息
function adminStuInfo(){
     $.post("mask/adminStuInfo.html",{},function(data,status){
             layer.open({ content: data});

            },"html"); 
}

//admin 发送学生基本信息
function adminSendToStu(){
     $.post("mask/adminSendToStu.html",{},function(data,status){
             layer.open({ content: data});

            },"html"); 
}

function checkAdminSend(){
    alert("发送中");
}

//admin查找老师过滤条件
function adminFindTea(){
    $.post("mask/admin_teaFilter.html",{},function(data,status){
             layer.open({ content: data});

            },"html"); 
}

//点击确认搜索
function adminSearchTea(){

      if($("#teacherName").val()==""){
        alert("请输入教师名称");
        $("#teacherName").focus();
        return;
    }

    if($("#teachPhone").val()==""){
        alert("请输入教师手机");
        $("#teachPhone").focus();
        return;
    }

    layer.closeAll();
}

function changeInfo(){
    $.post("mask/changeInfo.html",{},function(data,status){
             layer.open({ content: data});
  
            },"html"); 
}

function adminSendToTea(){
    $.post("mask/adminSendToTea.html",{},function(data,status){
             layer.open({ content: data});

            },"html"); 
}

function checkAdminSendToTea(){
    if($("#adminSendTitle").val()==""){
        alert("请输入标题");
        $("#adminSendTitle").focus();
        return;
    }

    if($("#adminSendCont").val()==""){
        alert("请输入内容");
        $("#adminSendCont").focus();
        return;
    }

    layer.closeAll();
}
/********************************************************************/
// 管理员
function adminFindSchool(){
    $.post("mask/schoolFilter.html",{},function(data,status){
             layer.open({ content: data});
              
                //绑定下拉
            $(".tl-select_status").click(function(){
                $(this).siblings(".tl-selected-list").slideToggle();
            });
            $(".tl-selected-list ul>li").click(function(){
                //收起
                $(this).parents(".tl-selected-list").slideUp();
                //ul赋值
                $(this).parents(".tl-selected-list").siblings(".tl-select_status").find(".tl-selected-val").html($(this).html());
                //ul 选中添加样式
                $(this).addClass("tl-checked").siblings().removeClass("tl-checked");
                //select赋值
                $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).prop("selected", true);   
      $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).siblings().prop("selected", false);  
            });
             $(".tl-selected-list").parents(".tl-select-box").mouseleave(function(){
               $(".tl-selected-list").slideUp();
          });
            },"html"); 
}

function schoolMSG(){
     $.post("mask/schoolMSG.html",{},function(data,status){
             layer.open({ content: data});
        /*      
              $('.sel_group').click(function(){
              $(this).parent().prev().val($(this).find("span").html());
              $(this).parent().hide();
              $(this).parents(".e-br").siblings().eq(0).hide();
        $(".students").show();
    });

    $(".select_box").parent().mouseleave(function(){
        $(".select_box").hide();
    });
    $(".select_box1").parent().mouseleave(function(){
        $(".select_box1").hide();
    });
    $(".select_box2").parent().mouseleave(function(){
        $(".select_box2").hide();
    });
    $(".service_ul").parent().mouseleave(function(){
        $(".service_ul").hide();
    });*/
       //绑定下拉
            $(".tl-select_status").click(function(){
                $(this).siblings(".tl-selected-list").slideToggle();
            });
            $(".tl-selected-list ul>li").click(function(){
                //收起
                $(this).parents(".tl-selected-list").slideUp();
                //ul赋值
                $(this).parents(".tl-selected-list").siblings(".tl-select_status").find(".tl-selected-val").html($(this).html());
                //ul 选中添加样式
                $(this).addClass("tl-checked").siblings().removeClass("tl-checked");
                //select赋值
                $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).prop("selected", true);   
      $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).siblings().prop("selected", false);  
            });
             $(".tl-selected-list").parents(".tl-select-box").mouseleave(function(){
               $(".tl-selected-list").slideUp();
          });

          //选择发送对象
        $(".role .check_none").on("click",function(){
          $(this).addClass("hide").siblings("img").removeClass("hide");
            $(this).parent().siblings("li.role").children("img.sel_check").addClass("hide");
            $(this).parent().siblings("li.role").children("img.check_none").removeClass("hide");
            // $(this).parent().siblings("li.hour").children("input[type='checkbox']").attr("checked",false);
            //$(this).siblings("input[type='checkbox']").attr("checked",true);
            $(this).parent().siblings("li.role").children("input[type='checkbox']")[0].checked=false;
            $(this).siblings("input[type='checkbox']")[0].checked=true;
        });


            },"html"); 
}

function adminFindTeacher(){
    $.post("mask/teacherFilter.html",{},function(data,status){
             layer.open({ content: data});
              

            },"html"); 
}

function checkTeaFilter(){
    if($("#teaName").val()==""){
        $("#teaName").focus();
        return;
    }

    if($("#teaPhone").val()==""){
        $("#teaPhone").focus();
        return;
    }

    layer.closeAll();
}

//记录筛选
 function recordFilter(){
    $.post("mask/recordFilter.html",{},function(data,status){
             layer.open({ content: data});
             //绑定下拉
            $(".tl-select_status").click(function(){
                $(this).siblings(".tl-selected-list").slideToggle();
            });
            $(".tl-selected-list ul>li").click(function(){
                //收起
                $(this).parents(".tl-selected-list").slideUp();
                //ul赋值
                $(this).parents(".tl-selected-list").siblings(".tl-select_status").find(".tl-selected-val").html($(this).html());
                //ul 选中添加样式
                $(this).addClass("tl-checked").siblings().removeClass("tl-checked");
                //select赋值
                $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).prop("selected", true);   
      $(this).parents(".tl-dropdown").siblings(".tl-select").find("option").eq($(this).attr("data-index")).siblings().prop("selected", false);  
            });
             $(".tl-selected-list").parents(".tl-select-box").mouseleave(function(){
               $(".tl-selected-list").slideUp();
          });
              //日期
            
            var currYear = (new Date()).getFullYear();  
            var opt={};
            opt.date = {preset : 'date'};
            //opt.datetime = { preset : 'datetime', minDate: new Date(2012,3,10,9,22), maxDate: new Date(2014,7,30,15,44), stepMinute: 5  };
            opt.datetime = {preset : 'datetime'};
            opt.time = {preset : 'time'};
            opt.default = {
                theme: 'android-ics light', //皮肤样式
                display: 'modal', //显示方式 
                mode: 'scroller', //日期选择模式
                lang:'zh',
                startYear:currYear - 10, //开始年份
                endYear:currYear + 10 //结束年份
            };

             opt.default2 = {
                theme: 'android-ics light', //皮肤样式
                display: 'modal', //显示方式 
                mode: 'scroller', //日期选择模式
                lang:'zh',
                onSelect:function(){
                  compareTime($('#endTime').val());
                },
                startYear:currYear - 10, //开始年份
                endYear:currYear + 10 //结束年份
            };

            $("#startTime").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default']));
            $("#endTime").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default2']));

           // $('#startTime').date({theme:"datetime"});
           /* $('#startTime').date();
            $('#endTime').date(function(time){
                $('#endTime').val(time);
                compareTime(time);
            }); */
            },"html"); 
 }

 function checkRecordFilter(){
    if($("#filterType").val()==""){
      alert("请选择类别！");
      $("#filterType").focus();
      return;
    }

     if($("#startTime").val()==""){
      alert("请选择开始时间");
      //$("#startTime").focus();
      return;
    }
     if($("#endTime").val()==""){
      //alert("请选择结束时间");
      $("#endTime").focus();
      return;
    }
     if($("#acceptName").val()==""){
      alert("请输入接收姓名");
      $("#acceptName").focus();
      return;
    }
     if($("#acceptPhone").val()==""){
      alert("请输入接收号码");
      $("#acceptPhone").focus();
      return;
    }
      if($("#schoolId").val()==""){
      alert("请输入学校ID");
      $("#schoolId").focus();
      return;
    }
     if($("#searchCont").val()==""){
      alert("请输入搜索内容");
      $("#searchCont").focus();
      return;
    }
    
    $('.column').hide();
    $('.salt_list').removeClass("hide");
    layer.closeAll();
 }

 function recordDesc(){
     $.post("mask/recordDesc.html",{},function(data,status){
             layer.open({ content: data});
              
            },"html");
 }
/********************************************************************/
   /*提示框*/

   function seach(e){
       if(e==1){
           $('.column').hide();
           $('.dd').removeClass("hide");
       }else if(e==2){
           $('.column').hide();
           $('.salt_list').removeClass("hide");
           $('.confirm,.mask').hide();
       }

   }
  /*提示框end*/
 








