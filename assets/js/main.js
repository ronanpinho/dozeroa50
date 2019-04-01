(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('#preloader').fadeOut();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });
        jQuery('#clock').countdown('2020/2/21', function (event) {
            var $this = jQuery(this).html(event.strftime(''
                + '<div class="time-entry days"><span>%-D</span> <b>:</b> Dias</div> '
                + '<div class="time-entry hours"><span>%H</span> <b>:</b> Horas</div> '
                + '<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutos</div> '
                + '<div class="time-entry seconds"><span>%S</span> Segundos</div> '));
        });
        var logo_path = $('.mobile-menu').data('logo');
        $('#navbarCollapse').slicknav({
            appendTo: '.mobile-menu',
            removeClasses: false,
            label: '',
            closedSymbol: '<i class="lni-chevron-right"><i/>',
            openedSymbol: '<i class="lni-chevron-down"><i/>',
            brand: '<a href="index.html"><img src="' + logo_path + '" class="img-responsive" alt="logo"></a>'
        });
      
        $('.lightbox').nivoLightbox({effect: 'fadeScale', keyboardNav: true,});
        $('.navbar-nav').onePageNav({currentClass: 'active'});
       
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 600);
            return false;
        });
    });
}(jQuery));

