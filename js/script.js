$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
 })
 
 function mainInit(){
   visual();
   story ();
   site_map();
   footer ();
 }

 function visual(){
  let current = 0, old=0, size = $('#visual .main-banner li').length
  let timer = null, interval=4000;

  timer =setInterval (make, interval)
  function make(){
    current++
    if (current >size -1 ){
      current = 0
    }
    banner('100%','-100%')
  }

  $('#visual .main-banner li').css({overflow:'hidden'})

  $('#visual .btn .next').on('click',function(){
    current++
    if (current >size -1 ){
      current = 0
    }
    banner('100%','-100%')
  })

  $('#visual .btn .prev').on('click',function(){
    current--
    if (current < 0){
      current = size -1
    }
    banner('-100%','100%')
  })

  function banner (start,end) {
    if (current != old ) {
      $('#visual .main-banner li').eq(current).stop().css({left:start}).animate({left:0},600)
      $('#visual .main-banner li').eq(old).stop().css({left:0}).animate({left:end},600)
      $('#visual .paging li').removeClass('on')
      $('#visual .paging li').eq(current).addClass('on')

      clearInterval(timer);
      timer = setInterval(make,interval);
      old = current 
    }
  }
 }

 function story (){
  let cnt = 0, size = $('.story ul li').length
  let arrleft = ['-1000','-150','700','1550']
  let arrtop = ['0','200','0','200']
  let timer = null, interval=4000
  timer = setInterval(make, interval)
  function make(){
    cnt ++
    if (cnt > size-1) {cnt=0}
    if (cnt + 2 == 4 ) {cnt = -2} 
    if (cnt + 1 == 4 ) {cnt = -1}
    $('.story ul li').eq(cnt-1).animate({left:arrleft[0], top:arrtop[0]},600,function(){
      $(this).css({opacity:0})
      $(this).removeClass('on')
    })
    $('.story ul li').eq(cnt).animate({left:arrleft[1], top:arrtop[1]},600,function(){
      $(this).removeClass('on')
    })
    $('.story ul li').eq(cnt+1).animate({left:arrleft[2], top:arrtop[2]},600,function(){
      $(this).removeClass('on')
      $(this).addClass('on')
    })
    $('.story ul li').eq(cnt+2).animate({left:arrleft[3], top:arrtop[3]},600,function(){
      $(this).css({opacity:1})
      $(this).removeClass('on')
    })

    clearInterval(timer)
    timer = setInterval(make,interval);
  }

  $('.story .arrow .next').on('click',function(){
    cnt ++
    if (cnt > size-1) {cnt=0}
    if (cnt + 2 == 4 ) {cnt = -2} 
    if (cnt + 1 == 4 ) {cnt = -1}
    $('.story ul li').eq(cnt-1).animate({left:arrleft[0], top:arrtop[0]},600,function(){
      $(this).css({opacity:0})
      $(this).removeClass('on')
    })
    $('.story ul li').eq(cnt).animate({left:arrleft[1], top:arrtop[1]},600,function(){
      $(this).removeClass('on')
    })
    $('.story ul li').eq(cnt+1).animate({left:arrleft[2], top:arrtop[2]},600,function(){
      $(this).removeClass('on')
      $(this).addClass('on')
    })
    $('.story ul li').eq(cnt+2).animate({left:arrleft[3], top:arrtop[3]},600,function(){
      $(this).css({opacity:1})
      $(this).removeClass('on')
    })

    clearInterval(timer)
    timer = setInterval(make,interval);
  })
 }

 function site_map(){
  $('.all-menu').click(function(){
    $('.site-map').show();
  })
  $('.site-map .close').click(function(){
    $('.site-map').hide();
  })
 }

 function footer(){
  $('.global .title').on('click',function(){
    $('.global ul').toggleClass('on')
  })

  let ty =0 
  let h = $('#header').height();

  $('.top').on('click',function(){
    $('html,body').animate({scrollTop:0},300)
  })

  $('.top').hide();
  $(window).on('scroll',function(){
    ty=$(window).scrollTop();
    if (ty >500) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  })

  $(window).on('scroll',function(){
    if(ty > h) {
      $('#header').addClass('on')
    } else {
      $('#header').removeClass('on')
    }
  })

  $('#nav .gnb li a').hover(function(){
    $('#header').css({overflow:'visible'})
    $('#header').addClass('on')
  })
  $('#header').on('mouseleave',function(){
    $('#header').css({overflow:'hidden'})
    ty=$(window).scrollTop();
    if ( ty<h ) {
      $('#header').removeClass('on')
    }
  })
 }