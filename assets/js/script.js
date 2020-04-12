$('input.nav-checks').on('change', function() {
    $('input.nav-checks').not(this).prop('checked', false);  
});


/* 
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("#nav-bar").removeClass("large").addClass("small");
	} else {
		$("#nav-bar").removeClass("small").addClass("large");
	}
	
}); */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-bar").style.backgroundColor = "red";
  } else {
    document.getElementById("nav-bar").style.backgroundColor = "gray";
  };
};