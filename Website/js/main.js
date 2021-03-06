$(document).ready(function () {
    
    ////////////////////////////////////////////////////////////
    // R E S P O N S I V E   N A V B A R
    ////////////////////////////////////////////////////////////

    $(".icon").on("click", function (e) {
        $(".navbar").toggleClass("responsive");
    });

    ////////////////////////////////////////////////////////////
    // R E S I Z E   H E A D E R
    ////////////////////////////////////////////////////////////

    window.onscroll = function() {resizeHeader()};

    var header = document.getElementById("header-navbar");
    var offset = header.offsetTop;

    function resizeHeader() {
        if (window.pageYOffset > offset) {
            $(".navbar").addClass("resize");
            $(".content").addClass("resize");
        } else {
            $(".navbar").removeClass("resize");
            $(".content").removeClass("resize");
        }
    }

    ////////////////////////////////////////////////////////////
    // A N I M A T I O N
    //////////////////////////////////////////////////////////// 
    
    gsap.set($("footer img"), {filter: "grayscale(100%)", autoAlpha: 0.2});
    $("footer img").on({
        mouseenter:function() {
            gsap.to($(this), {filter: "none", autoAlpha: 1});
        }, mouseleave:function() {
            gsap.to($(this), {filter: "grayscale(100%)", autoAlpha: 0.2});
        }
    });
    
});