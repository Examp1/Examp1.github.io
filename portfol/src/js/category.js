$(window).on('load', function () {
  // cookie
  const cookieEl = document.querySelector('.privacy');


  let cookies = () => {
      if (!Cookies.get('hide-cookie')) {
          setTimeout(() => {
              cookieEl.style.display = 'block';
          }, 100);
      }

      Cookies.set('hide-cookie', 'true', {
          expires: 30
      });
  }

  console.log( document.cookie );
  cookies();

  function OffScroll () {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll',function () {
        $(window).scrollTop(winScrollTop);
    });
  }
  OffScroll();
  function fadePrivacy() {
    $('.privacy').fadeOut().remove();
    // console.log('privacy fade');
    $(window).unbind('scroll');
  };
  setTimeout(fadePrivacy, 7000);

  function fadePreload() {
    $('.preload').fadeOut();
    console.log('preload fade');
    $(window).unbind('scroll');
  }

  setTimeout(fadePreload, 1000);
var $page = $('html, body');
$('.up').click(function(e) {
    e.preventDefault();
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
  
  let menuBtn = $('.menu'),
      menuCircle = $('.menu-block'),
      menuList = $('.menu-inner');
  $(menuBtn).on('click',function(event) {!!
    console.log(this);
    event.preventDefault();
    $(this).toggleClass('menu-open');
    $(menuCircle).toggleClass('active-bg');
    $(menuList).toggleClass('opened');
    $('.portfol__link, .up').toggleClass('opa0');
  });


 $('.form-anim-block > input').focus(function(event) {
      console.log('123');
      $(this).closest('.form-anim-block').addClass('inp-anim');
  });
   $('.form-anim-block > input').blur(function(event) {
      console.log('123');
      $(this).closest('.form-anim-block').removeClass('inp-anim');
  });

  $('.services .col-left img:first').addClass('active-img');

  $('li[data-slide]').on('click', function(event) {
    event.preventDefault();
    let dataSlide = $(this).data('slide');
    console.log(dataSlide);  
    $('.services .col-left img').removeClass('active-img');
    $('#' + dataSlide).addClass('active-img');
  });
  $('.services__ul li:first').addClass('hover-el');
  $('.services__ul li').on('click', function(event) {
    event.preventDefault();
    $('.services__ul li').removeClass('hover-el');
    $(this).addClass('hover-el');
  });
  $('.menu-inner ul li a').on('mouseover', function(event) {
    $('.menu-inner ul li a').removeClass('hover-li-a');
    $(this).addClass('hover-li-a');
  });
  // parallax effect
  let text1 = document.querySelector('.anim-left'),
      text2 = document.querySelector('.anim-right'),
      block = document.querySelector('.case-item');
      block2 = document.querySelector('.case-item2');
  window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value + "px");
    text1.style.left = -400 + value + "px";
    text2.style.right = -600 + value + "px";
    // block.style.top = -400 + value + "px"
    // block2.style.top = -500 + value + "px"
  });
  $('.slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider2',
    dots: false
  });
   $('.slider2').slick({
    slidesToShow: 1,
    asNavFor: '.slider',
    nextArrow: '<div class="sprite-next"></div>', // Кастомная стрелка "далее"
    prevArrow: '<div class="sprite-prev"></div>' // Кастомная стрелка "назад"
  });
  //    wow = new WOW(
  //   {
  //   // mobile: false,
  // });
  // wow.init();
   AOS.init({
    anchorPlacement: 'top-bottom',
    offset: 120

   });
    function randomInteger(min,max){
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
    // $('body').addClass('bg' + randomInteger(1,4));
    $('.case-item').each(function(index, el) {
      $(el).find('.case-bg').addClass('bg' + randomInteger(1,4));
    });
    $('.accordion > ul').hide();
    $('.accordion-btn').on('click',function(event) {
      event.preventDefault();
      $(this).closest('.accordion').find('ul').slideToggle();
      $(this).toggleClass('accordion-open');
    });
    // filter modal
      let filterModal = $('.filter-modal'),
          filterBtn   = $('.filter-modal-btn'),
          filterClose = $('.close-modal');
      $(filterBtn).on('click',function(event) {
        event.preventDefault();
        $(filterModal).addClass('filter-modal-open');
      });
      $(filterClose).on('click',function(event) {
        event.preventDefault();
        $(filterModal).removeClass('filter-modal-open');
      });
});
