(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // hero slider JS
         $('.hero_slider_wrapper').owlCarousel({
             loop: true,
             autoplay: 'true',
             animateOut: 'fadeOut',
             animateIn: 'fadeIn',
             margin: 0,
             items: 1,
             nav: true,
             navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
             dots: true,
             responsive: {
                 0: {
                    items: 1
                 },
                 767: {
                     items: 1
                 },
                 992: {
                     items: 1
                 }
             }
         });

         // meanmenu JS
        $('#mobile_menu').meanmenu({
            meanMenuContainer: '.header_menu',
            meanScreenWidth: "992"
        });

        // scroll to top JS
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.back_to_top').fadeIn('slow');
            } else {
                $('.back_to_top').fadeOut('slow');
            }
        });
        $('.back_to_top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1500, 'easeInOutExpo');
            return false;
        }); 
    

    });

   jQuery(window).load(function(){

   });

}(jQuery));	