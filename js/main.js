$(document).ready(function(){
  $('.slider-header').owlCarousel({
  	items: 1,
  	loop: true,
  	margin: 10,
  	nav: true,
  	dots: false,
  	autoplay: true,
  	smartSpeed: 1000,
  	autoplayTimeout: 5000,
  	center: true,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
       0:{
        nav:false
      },
      554:{
        nav:true
      }
    }
  });

  $('.slider-aside').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    center: true,
    responsive:{
      0:{
        dots:false
      },
      1016:{
        dots:true
      }
    }
  });






});

function burgerMenu(icon) {
  icon.classList.toggle("change");
  $('.nav-menu-mobile').toggleClass('visible');
}
