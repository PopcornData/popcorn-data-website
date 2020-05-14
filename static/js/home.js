//SCROLLING EFFECT
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Change bar while scrolling
var nav = $('nav');
var navHeight = nav.outerHeight();
$('body').scrollspy({
  target: '#mainNav',
  offset: navHeight
});

//TYPING EFFECT
if ($('.text-slider').length == 1) {
  var typed_strings = $('.text-slider-items').text();
  var typed = new Typed('.text-slider', {
    strings: typed_strings.split(','),
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
  });
}