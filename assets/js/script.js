$('input.nav-checks').on('change', function() {
    $('input.nav-checks').not(this).prop('checked', false);  
});

