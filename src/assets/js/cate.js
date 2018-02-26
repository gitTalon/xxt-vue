function getCate(){
      var cur = $('.w6em a.cur'),
          cateId = cur.data('cateid'),//分类id
          isLoad = cur.data('load');//是否载入
      if(!isLoad){
        $.ajax({
          url: '/deyismart/index.php/weixin/public/cate',
          type: 'GET',
          dataType: 'json',
          data: {cate: cateId},
        })
        .done(function(data) {
          var res = eval(data);
          var lis = '';
          for (var i = 0,len = res.length; i <len; i++) {
            lis+='<li class="e-grid-1-3"><a href="'+res[i].url+'"><img src="'+res[i].thumb+'" alt=""><p>'+res[i].title+'</p></a></li>'
          };
          var ul = document.createElement('ul');
          ul.className = 'e-grid catelist'+cateId;
          ul.innerHTML = lis;
          $(ul).appendTo('#catelist').show().siblings('ul').hide();
          cur.data('load',true)
        })
      }
    }