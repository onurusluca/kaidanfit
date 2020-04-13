/* Let only one tab bar menu open */
$('input.nav-checks').on('change', function() {
    $('input.nav-checks').not(this).prop('checked', false);  
});

/* Shrink navbar and change color on scroll down */
$(window).on("scroll touchmove", function () {
    $('#nav-bar-toggle').toggleClass('scrolled', $(document).scrollTop() > 0);
});

/* Button for returning to top*/
var btn = $('#button-up');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

