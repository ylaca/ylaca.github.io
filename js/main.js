$( document ).ready(function() {

  // Toogle Hamburger Menu
  $(".navbar-toggler").on("click", function() {
    console.log("plm");
    $(".burger-container").toggleClass('change');
  });

});
