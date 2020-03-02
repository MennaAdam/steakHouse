$(function () {

    // Navbar

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1118) {
            $(".change").addClass("fixed-top");
        } else {
            $(".change").removeClass("fixed-top");
        }
    });

    // Smooth Scroll

    $('.nav-link[href*="#"]').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

    // Adjust Active Class

    $(".navbar-nav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


    // Trigger Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Triggrt Mixitup

    var mixer = mixitup("#container")

    // Adjust Shuffle

    $(".shuffle li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
});