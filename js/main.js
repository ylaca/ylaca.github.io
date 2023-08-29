$( document ).ready(function() {

  // Toogle Hamburger Menu
  $(".navbar-toggler").on("click", function() {
    $(".hamburger-menu").toggleClass('change');
  });

  // Slider/Carousel
  $('.app-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
  });

});
