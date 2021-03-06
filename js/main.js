AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
});

jQuery(document).ready(function ($) {

    "use strict";



    var siteMenuClone = function () {

        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function () {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();


    var sitePlusMinus = function () {
        $('.js-btn-minus').on('click', function (e) {
            e.preventDefault();
            if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
            } else {
                $(this).closest('.input-group').find('.form-control').val(parseInt(0));
            }
        });
        $('.js-btn-plus').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
        });
    };
    // sitePlusMinus();


    var siteSliderRange = function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    };
    // siteSliderRange();


    var siteMagnificPopup = function () {
        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    };
    siteMagnificPopup();


    var siteCarousel = function () {
        if ($('.nonloop-block-13').length > 0) {
            $('.nonloop-block-13').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                autoplay: true,
                margin: 20,
                nav: false,
                dots: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 20,
                        stagePadding: 0,
                        items: 1
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 0,
                        items: 2
                    },
                    1200: {
                        margin: 20,
                        stagePadding: 0,
                        items: 3
                    }
                }
            });
        }

        if ($('.slide-one-item').length > 0) {
            $('.slide-one-item').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 0,
                autoplay: true,
                pauseOnHover: false,
                nav: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
            });
        }


        if ($('.nonloop-block-4').length > 0) {
            $('.nonloop-block-4').owlCarousel({
                center: true,
                items: 1,
                loop: false,
                margin: 10,
                nav: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        items: 1
                    }
                }
            });
        }

    };
    siteCarousel();

    var siteStellar = function () {
        $(window).stellar({
            responsive: true,
            parallaxBackgrounds: true,
            parallaxElements: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            scrollProperty: 'scroll'
        });
    };
    siteStellar();

    var siteCountDown = function () {

        if ($('#date-countdown').length > 0) {
            $('#date-countdown').countdown('2020/10/10', function (event) {
                var $this = $(this).html(event.strftime(''
                    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
                    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
                    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
                    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
                    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
            });
        }

    };
    siteCountDown();

    var siteDatePicker = function () {

        if ($('.datepicker').length > 0) {
            $('.datepicker').datepicker();
        }

    };
    siteDatePicker();



});

//songs collections
SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});
// melody songs
$(document).ready(function () {
    SC.stream('/tracks/231182753', function (sound) {
        //function start for button
        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});

$(document).ready(function () {
    SC.stream('/tracks/64297109', function (sound) {
        //function start for button
        $('#start2').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop2').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/265579680', function (sound) {
        //function start for button
        $('#start3').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop3').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});

$(document).ready(function () {
    SC.stream('/tracks/663788831', function (sound) {
        //function start for button
        $('#start4').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop4').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/344884129', function (sound) {
        //function start for button
        $('#start5').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop5').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/54061165', function (sound) {
        //function start for button
        $('#start6').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop6').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/199637882', function (sound) {
        //function start for button
        $('#start7').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop7').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/314403631', function (sound) {
        //function start for button
        $('#start8').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop8').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
//beat songs
$(document).ready(function () {
    SC.stream('/tracks/550158225', function (sound) {
        //function start for button
        $('#start11').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop11').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});

$(document).ready(function () {
    SC.stream('/tracks/168166232', function (sound) {
        //function start for button
        $('#start12').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop12').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/235888867', function (sound) {
        //function start for button
        $('#start13').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop13').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});

$(document).ready(function () {
    SC.stream('/tracks/71180251', function (sound) {
        //function start for button
        $('#start14').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop14').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/117632080', function (sound) {
        //function start for button
        $('#start15').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop15').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/84551955', function (sound) {
        //function start for button
        $('#start16').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop16').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/126316215', function (sound) {
        //function start for button
        $('#start17').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop17').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/171656866', function (sound) {
        //function start for button
        $('#start18').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop18').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
//motivation songs

$(document).ready(function () {
    SC.stream('/tracks/268901709', function (sound) {
        //function start for button
        $('#start21').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop21').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/653922530', function (sound) {
        //function start for button
        $('#start22').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop22').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/28851205', function (sound) {
        //function start for button
        $('#start23').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop23').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/117459430', function (sound) {
        //function start for button
        $('#start24').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop24').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/243696733', function (sound) {
        //function start for button
        $('#start25').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop25').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/341743480', function (sound) {
        //function start for button
        $('#start26').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop26').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/174218080', function (sound) {
        //function start for button
        $('#start27').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop27').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});
$(document).ready(function () {
    SC.stream('/tracks/82615686', function (sound) {
        //function start for button
        $('#start28').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        // stop for function

        $('#stop28').click(function (e) {
            e.preventDefault();
            sound.stop();
        });
    });
});