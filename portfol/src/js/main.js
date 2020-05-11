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
  $(menuBtn).on('click',function(event) {
    console.log(this);
    event.preventDefault();
    $(this).toggleClass('menu-open');
    $(menuCircle).toggleClass('active-bg');
    $(menuList).toggleClass('opened');
    $('.portfol__link, .up').toggleClass('opa0');
  });
  
    setInterval($items => {
        $items.each((i, n) => $(n).css({
         left: Math.random() * window.innerWidth + 'px',
         top: Math.random() * window.innerHeight + 'px',
       }));
      }, 500, $('.glitch'));



 $('.form-anim-block > input').focus(function(event) {
      console.log('123');
      $(this).closest('.form-anim-block').addClass('inp-anim');
  });
   $('.form-anim-block > input').blur(function(event) {
      console.log('123');
      $(this).closest('.form-anim-block').removeClass('inp-anim');
  });


  function randomInteger(min,max){
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
});
$('.services .col-left img:first').addClass('active-img');

$('.services__ul').each(function(index, el) {
  $(el).find('li[data-slide]').on('click', function(event) {
    event.preventDefault();
    let dataSlide = $(this).data('slide');
    console.log(dataSlide); 
    $(el).closest('section').find('.col-left .img-wrapper img').removeClass('active-img');
    $('#' + dataSlide).addClass('active-img');
    $(el).find('li').removeClass('hover-el');
    $(this).addClass('hover-el');
  });
  $(el).find('li:first').addClass('hover-el');
});

// $('.services__ul li:first').addClass('hover-el');
// $('.services__ul li').on('click', function(event) {
//   event.preventDefault();
//   $('.services__ul li').removeClass('hover-el');
//   $(this).addClass('hover-el');
// });
$('.menu-inner ul li a').on('mouseover', function(event) {
  $('.menu-inner ul li a').removeClass('hover-li-a');
  $(this).addClass('hover-li-a');
});

function afterReveal (el) {
      $(el).on('animationend', function () {
        console.log('This runs once finished!');
        $(this).addClass('finished');
      });
  };
  wow = new WOW(
    {
    callback: afterReveal,
    // mobile: false,
  });
  wow.init();
  