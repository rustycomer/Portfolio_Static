$(document).ready(function(){
    $('.page-scroll').click(function(e) {
        var linkHref = $(this).attr('href');
        var headerHeight = $('header').outerHeight();
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1500);

        e.preventDefault();
    });
});