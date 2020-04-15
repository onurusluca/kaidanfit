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
  if ($(window).scrollTop() > 1000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/*  Hide tab menu on on scroll down */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#bottom-tab-bar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#bottom-tab-bar').removeClass('tab-bar-toggle').addClass('hide-tab-bar');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#bottom-tab-bar').removeClass('hide-tab-bar').addClass('tab-bar-toggle');
        }
    }
    lastScrollTop = st;
}
/* ---------------------------- */