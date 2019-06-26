/*global $,   document, setInterval, setTimeout */
/* eslint-disable no-console */

$(document).ready(function () {
    "use strict";

    ////////// Header Menu Active Link
    $('.nav-item').click(function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    })

    ////////////// Header Slider
    $('.construction__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
    });

    ///////////// Customer Slider
    $('.procoor__customers--slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    });

    ////// product Accordion
    $(function () {
        $("#accordion").accordion();
    });

    ////// product Accordion ACtive
    $('.procoor__project--title').click(function () {
        $('.procoor__project--title').removeClass('active');
        $(this).addClass('active');
    })

    ////////// social Media with scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= $('.header__wrapper').height()) {
            $('#nav_header').addClass('fixed__header');
            $('.social__media').css({
                transform: 'translateX(0)',
            });
        }
        else {
            $('#nav_header').removeClass('fixed__header')
            $('.social__media').css({
                transform: 'translateX(50px)',
            });
        }

    });

    //////////// Contact Us 

    console.log($('.contact__us input, .contact__us textarea').val())
    $('.contact__us input, .contact__us textarea').focus(function () {
        $(this).prev().addClass('focused__label');
    });

    $('.contact__us input , .contact__us textarea').blur(function () {
        if ($('.contact__us input, .contact__us textarea').val() == '') {
            $(this).prev().removeClass('focused__label');
        } else {
            $(this).prev().addClass('focused__label');
        }
        console.log($('.contact__us input, .contact__us textarea').val())
    });

});

