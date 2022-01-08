$(function () {

  const headerInner = document.querySelector('.content-bottom');

  document.addEventListener('scroll', headerInnerFixed);

  function headerInnerFixed() {
    if (window.scrollY > 50) {
      headerInner.classList.add('content-bottom-active');
    } else {
      headerInner.classList.remove('content-bottom-active');
    }
    if (width > 992) {
      headerInner.classList.add('header');
    } else {
      headerInner.classList.remove('header');
    }

  }



  $(".catalog-price").ionRangeSlider({
    type: "double",
    prefix: "$",
    min: 100,
    max: 1000,
    from: 100,
    to: 1000,
    onStart: function (data) {
      $('.catalog__input-from').text(data.from);
      $('.catalog__input-to').text(data.to);
    },
    onChange: function (data) {
      $('.catalog__input-from').text(data.from);
      $('.catalog__input-to').text(data.to);
    },
  });





  $('.catalog__btn-svg').on("click", function (event) {
    $('.catalog__btn-svg').removeClass('active');
    $(this).addClass('active');
  });

  $('.catalog__btn-list').on("click", function (event) {
    $('.catalog__grid-inner').addClass('catalog__list-inner');
  });
  $('.catalog__btn-grid').on("click", function (event) {
    $('.catalog__grid-inner').removeClass('catalog__list-inner');
  });


  $('.catalog__select').styler();



  $('.user-nav__btn, .header__btn, .header__btn-close, .user-nav__btn-close, .catalog__left, .catalog__filters-close').on("click", function (event) {
    $('body').toggleClass('noscroll');
  });


  $('.productplace__catalog').on("click", function (event) {
    $('.productplace__catalog').toggleClass('active');
    $('.productplace__menu').toggleClass('active').slideToggle("linear");
  });


  $('.user-nav__search').on("click", function (event) {
    $('.form').toggleClass('active');
  });


  $('.user-nav__btn, .user-nav__btn-close').on("click", function (event) {
    $('.user-nav__basket, .user-nav__btn-close').toggleClass('active');
  });


  $('.counter__btn, .counter__btn.active').on("click", function (event) {
    $('.counter__btn').toggleClass('active');
  });


  $('.header__btn, .header__btn-close').on("click", function (event) {
    $('.header__wrapper').toggleClass('active');
  });


  $('.counter__btn').on("click", function (event) {
    $(this).parents('.cart__item').css('display', 'none');
  });



  $('.catalog__left, .catalog__filters-close').on("click", function (event) {
    $('.catalog__filters').toggleClass('active');
  });


  $('.tabs__link').on("click", function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });


  $(".catalog__btn").on("click", function (t) {
      $(this).toggleClass("active");
      $(this).parents('.catalog__top').next('.catalog__list').slideToggle(300);
    }),



    $('.counter__plus').on("click", function (event) {
      $(this).prev().val(+$(this).prev().val() + 1);
    });
  $('.counter__minus').on("click", function (event) {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
  });




  $(".logo, .header__menu a ").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  $('.slider').slick({
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 2000,
    nextArrow: '<button type ="button" class ="slider__prev"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d = "M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z"fill = "#505050" / >/svg></button>',
    prevArrow: '<button type ="button" class ="slider__next"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d = "M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z"fill = "#505050" / ></svg></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
      }
    }]
  });



  $('.brands__list').slick({
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });

  $('.prod-page__inner').slick({
    arrows: true,
    dots: false,
    infinite: false,
    nextArrow: '<button type ="button" class ="slider__prev"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d = "M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z"fill = "#505050" / >/svg></button>',
    prevArrow: '<button type ="button" class ="slider__next"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d = "M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z"fill = "#505050" / ></svg></button>',
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 575,
      settings: {
        dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }]
  });

  $('.interest__inner').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    nextArrow: '<button type ="button" class ="slider__prev"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d = "M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z"fill = "#505050" / >/svg></button>',
    prevArrow: '<button type ="button" class ="slider__next"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d = "M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z"fill = "#505050" / ></svg></button>',
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


});




$(".product__rating").rateYo({
  spacing: "5px",
  starWidth: "15px",
  starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d = "M0.0250291 6.16429C0.0799909 5.99457 0.226213 5.87088 0.402253 5.84526L5.34767 5.12448L7.55938 0.629902C7.63809 0.469903 7.80057 0.368622 7.97845 0.368622C8.15636 0.368622 8.31882 0.469903 8.39755 0.629902L10.6094 5.12448L15.5547 5.84526C15.7307 5.87088 15.877 5.99457 15.9319 6.16426C15.9869 6.33397 15.9411 6.52025 15.8137 6.64478L12.2353 10.1433L13.0799 15.0834C13.11 15.2593 13.0379 15.437 12.894 15.5419C12.8126 15.6012 12.7161 15.6314 12.6192 15.6314C12.5448 15.6314 12.4702 15.6136 12.4018 15.5775L7.97848 13.2451L3.55533 15.5775C3.39783 15.6605 3.20705 15.6467 3.06314 15.5418C2.91922 15.437 2.84709 15.2592 2.87716 15.0833L3.72206 10.1433L0.143272 6.64475C0.0159004 6.52025 -0.0299951 6.33397 0.0250291 6.16429Z"fill = "#FFB800"fill - opacity = "0.7" /></svg>'

});