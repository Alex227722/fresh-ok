$(function() {

  const headerInner = document.querySelector('.content--green');

  document.addEventListener('scroll', headerInnerFixed);

  function headerInnerFixed() {
    if (window.scrollY > 50) {
      headerInner.classList.add('content--green--active');
    } else {
      headerInner.classList.remove('content--green--active');
    }
    
  }
 

  $(".logo, .header__menu a ").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('.slider').slick({
    arrows: true,
    dots: false,
    speed: 500,
    nextArrow: '<img class="slider__next" src="images/next-ar.svg" alt="nextArrow">',
    prevArrow: '<img class="slider__prev" src="images/prev-ar.svg" alt="prevArrow">',
  });




  var mixer = mixitup('.product__items');

  var mixer = mixitup('.stock__items'); 



  
  
  /*

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  */
  

  /*

  $('.product__items').mixItUp({
    selectors: {
      filter: '.product__btn'
    }
  });

  $('.stock__items').mixItUp({
    selectors: {
      filter: '.stock__btn'
    }
  });

  */

});