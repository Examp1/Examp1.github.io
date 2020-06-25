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
  };

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
  }
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
    event.preventDefault();
    $(this).toggleClass('menu-open');
    $(menuCircle).toggleClass('active-bg');
    $(menuList).toggleClass('opened');
    $('.portfol__link, .up').toggleClass('opa0');
  });

  $('.services .col-left img:first').addClass('active-img');

  $('li[data-slide]').on('click', function(event) {
    event.preventDefault();
    let dataSlide = $(this).data('slide');
    // console.log(dataSlide);  
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
  // let text1 = document.querySelector('.anim-left'),
  //     text2 = document.querySelector('.anim-right'),
  //     block = document.querySelector('.case-item');
  //     block2 = document.querySelector('.case-item2');
  // window.addEventListener('scroll', function(){
  //   let value = window.scrollY;
  //   // console.log(value + "px");
  //   text1.style.left = -400 + value + "px";
  //   text2.style.right = -600 + value + "px";
  //   // block.style.top = -400 + value + "px"
  //   // block2.style.top = -500 + value + "px"
  // });
  let imgW = $('.img-wrapper').children('*'),
      imgB = $('.img-block').children('*'),
      rowImg = $('.row-img .container .img-wrapp').children('*');

      
  if (rowImg.length == 1){
    rowImg.css('width', '100%');
  } else if (rowImg.length == 2) {
    rowImg.css('width', 'calc(50% - 10px)');
  } else if (rowImg.length >= 3) {
    rowImg.css('width', 'calc(33% - 10px)');
  }
  function width576() {
    if (rowImg.length >= 3) {
      rowImg.css('width', 'calc(50% - 10px)');
      rowImg.css('margin-bottom', '20px');
    }
  }
  if (screen.width < 576){
    width576();
  }
    
  console.log(imgW);
 function offsetBottom () {
  if ($(imgW).length > 1) {
    $(imgW).css('margin-bottom', '4rem');
  }
  if ($(window).width() < 769){
   if ($(imgW).length > 1) {
     $(imgW).css('margin-bottom', '2rem');
   }
  }
  if ($(imgB).length > 1) {
    $(imgB).css('margin-bottom', '40px');
  }
 }
 offsetBottom();
 console.log(rowImg);

   
   console.log('h1: ' + $('h1').text().length);
   let strText = $('h1').text().length,
       strH1   = $('h1');
    // count symbols  
   function fontSize(){
    if ($(window).width() >= 960) {
      console.log('1600 +');
      if (strText <= 13){
        $(strH1).css('font-size','103px');
        }else if (strText <= 26){
          $(strH1).css('font-size','70px');
        }else{
        $(strH1).css('font-size','50px');
        }
    }
        else if ($(window).width() <= 1600 && $(window).width() >= 480) {
      if (strText <= 13){
        $(strH1).css('font-size','70px');
        }else if (strText <= 26){
          $(strH1).css('font-size','52px');
        }else{
        $(strH1).css('font-size','40px');
        }
    }else{
      if (strText <= 13){
        $(strH1).css('font-size','60px');
        }else if (strText <= 26){
          $(strH1).css('font-size','42px');
        }else{
        $(strH1).css('font-size','25px');
        }
    }
   }
   fontSize();
   $(window).resize(function () { 
    fontSize();
    offsetBottom();
    width576();
   });
  function randomInteger(min,max){
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
    // $('body').addClass('bg' + randomInteger(1,4));
    $('.case-item').each(function(index, el) {
      $(el).find('.case-bg').addClass('bg' + randomInteger(1,4));
    });
    $('.language-mob li a, .language li a').on('click', function(e) {
      $('.language-mob li a, .language li a').removeClass('active');
      $(this).addClass('active');
    }); 

    function iframeFhd () {
      let iframe = $('iframe');
      $(iframe).height($(iframe).width() / 1.777);
    }
    iframeFhd();
    $(window).resize(function () { 
      iframeFhd();
     });

    //  native js
});

