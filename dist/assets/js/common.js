$(document).ready(function(){

    // header
    let headerAll = $('.keyvisual').height();  

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        if(scroll > headerAll) {
            $('.header_wrap.sroll').stop().slideDown(300);
        } else {
            $('.header_wrap.sroll').stop().slideUp(100);
        }
    });

    // banner1 슬라이드
    let swiper = new Swiper('.banner.swiper-container', {
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // banner1 right 호버효과
    $('.section.bestSeller .thumbnail .right li').mouseover(function(){
        $(this).css({'top':'-20px'});
    })
    .mouseout(function(){
        $(this).css({'top':'0'});
    });


    // location 슬라이드
    new Swiper('.location.swiper-container', {
        spaceBetween: 50,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });

    //  banner2 호버효과
    $('.section.banner2 .banner').mouseover(function(){
        $(this).find('.info').show();
    })
    .mouseout(function(){
        $(this).find('.info').hide();
    });

    // 모바일 메뉴 오픈
    $('.mo_header .btn_menu').click(function(){
      $('.mo_gnb').css({'left':'0','transition':'0.5s'});
    });

    $('.mo_gnb > .btn').click(function(){
      $('.mo_gnb').css({'left':'-100%'});
    });

});
