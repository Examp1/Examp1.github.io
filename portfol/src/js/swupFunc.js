 // для работы полсе релоада контента 
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
      // form
      $('.form-anim-block > input').focus(function(event) {
        console.log('123');
        $(this).closest('.form-anim-block').addClass('inp-anim');
      });
     $('.form-anim-block > input').blur(function(event) {
        console.log('123');
        $(this).closest('.form-anim-block').removeClass('inp-anim');
      });
     // up
      var $page = $('html, body');
      $('.up').click(function(e) {
          e.preventDefault();
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 400);
          return false;
      });
      // wow
       wow = new WOW(
    {
    callback: afterReveal,
    // mobile: false,
  });
  wow.init();
  }
  const swup = new Swup();
  swup.on('contentReplaced', cssAndScript);