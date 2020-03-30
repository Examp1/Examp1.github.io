$(window).on('load', function () {
  function OffScroll () {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll',function () {
        $(window).scrollTop(winScrollTop);
    });
  }
  // OffScroll();
  function fadePrivacy() {
    $('.privacy').fadeOut();
    console.log('privacy fade');
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
  function afterReveal (el) {
      $(el).on('animationend', function () {
        console.log('This runs once finished!');
        $(this).addClass('finished');
      });
  };
  wow = new WOW(
    {
    callback: afterReveal,
    mobile: false,
  });
  wow.init();
  
  let menuBtn = $('.menu'),
      menuCircle = $('.menu-block'),
      menuList = $('.menu-inner');
  $(menuBtn).on('click',function(event) {
    console.log(this);
    event.preventDefault();
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

  function cssAndScript() {
     setInterval($items => {
      $items.each((i, n) => $(n).css({
       left: Math.random() * window.innerWidth + 'px',
       top: Math.random() * window.innerHeight + 'px',
     }));
    }, 500, $('.glitch'));
     // menu
      let menuBtn = $('.menu'),
      menuCircle = $('.menu-block'),
      menuList = $('.menu-inner');
  $(menuBtn).on('click',function(event) {
    console.log(this);
    event.preventDefault();
    $(menuCircle).toggleClass('active-bg');
    $(menuList).toggleClass('opened');
    $('.portfol__link, .up').toggleClass('opa0');
  });
  }


  const swup = new Swup();
  swup.on('contentReplaced', cssAndScript);
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