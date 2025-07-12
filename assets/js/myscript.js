$(document).ready(function () {
    $(".scroll").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1000);
    });
    $('#scroll-to-top').hide();
    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();

        if (currentScroll <= 657) {
            $('#scroll-to-top').hide();
        } else {
            $('#scroll-to-top').show();
        }
    });

    //btn scroll to top
    $('#scroll-to-top').on('click', function (){
        $('html, body').animate({
            scrollTop: (0)
        }, 1000);
    });

    $("#typer-me").typer({
        strings: [
            "I'm a Graphic Designer",
            "I'm a Web Developer"
        ],
        useCursor:true,
        typeSpeed: 100,
        backspaceSpeed: 20,
        backspaceDelay: 800,
        repeatDelay: 1000,
        repeat: true,
        autoStart: true,
        startDelay: 100,
    });

    $("#about-img").faceCursor({
        perspective:"5rem"
    });

});