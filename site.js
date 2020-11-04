$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        // adaptiveHeight: true,
        // slidesToScroll: 3,
        // speed: 1000,
        // easing: 'easy',
        // infinite: false,
        // initialSLide: 0,
        // autoplay: false,
        // autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // pauseOnDotsHover: true,
        // draggable: false,
        // swipe: true,
        // touchThreshold: 10,
        // touchMove: true,
        // waitForAnimate: false,
        // centerMode: false,
        // variableWidth: false,
        // rows: 1,
        // slidesPerRow: 1,
        // vertical: false,
        // verticalSwiping: true,
        // asNavFor: '.sliderbig',
        // responsive: [{
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow: 1,
        //     }
        // }],
        // mobileFirst: false,
        // appendArrows: $('.content'),
        // appenDots: $('.content'),
        // accessibility: false,
        // nextArrow: '<button type="button" class="slick-next"></button>',
        // prevArrow: '<button type="button" class="slick-prev"></button>',
    });

    // $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     console.log(nextSlide);
    // });
    
    // $('.slider').on('afterChange', function(event, slick, currentSlide) {
    //     console.log(currentSlide);
    // });

    // $('.slider').slick('setPosition');
    // $('.slider').slick('goTo', 3);
    // $('.slider').slick('slickPrev');
    // $('.slider').slick('slickNext');
    // $('.slider').slick('slickPlay');
    // $('.slider').slick('slickPause');
    // $('.slider').slick('slickAdd');
    // $('.slider').slick('slickRemove');
    // $('.slider').slick('unslick');

    // $('.sliderbig').slick({
    //     arrows: false,
    //     fade: true, // <------new
    //     asNavFor: '.slider',
    // });
});