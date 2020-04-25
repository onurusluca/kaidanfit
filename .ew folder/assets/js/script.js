/* Let only one tab bar menu open */
$('input.nav-checks').on('change', function () {
    $('input.nav-checks').not(this).prop('checked', false);
});

/* Shrink navbar and change color on scroll down */
$(window).on("scroll touchmove", function () {
    $('#nav-bar-toggle').toggleClass('scrolled', $(document).scrollTop() > 0);
});


/*  Hide tab menu and go to top button on on scroll down */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#bottom-tab-bar, #button-up').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class 
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#bottom-tab-bar').removeClass('tab-bar-toggle').addClass('hide-tab-bar');
        $('#button-up').removeClass('show').addClass('hide'); /* go to top button */

    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#bottom-tab-bar').removeClass('hide-tab-bar').addClass('tab-bar-toggle');
            $('#button-up').removeClass('hide').addClass('show'); /* go to top button */

        }
    }
    lastScrollTop = st;
}

/* Go to top*/
var btn = $('#button-up');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

/* ---------------------------- */


/* Function for loading courses to div */
$('.loadLessonButton').on('click', function (clickEvent) {
    // get the page link from the clicked button
    var clickedButton = clickEvent.currentTarget;
    var link = clickedButton.getAttribute('data-page');
    $('.course-content').load(link);

  })



