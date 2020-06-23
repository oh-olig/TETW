$(document).ready(function () {
    
    ////////////////////////////////////////////////////////////
    // P A G E   N A V I G A T I O N
    ////////////////////////////////////////////////////////////

    $(".content").load("content/home.html");

    $("header a").on("click", function (e) {
        var id = $(this).attr("id");
        $(".content").load(id);
        window.scroll(0, 0);
        $(".navbar").removeClass("responsive");
    });

    $(".icon").on("click", function (e) {
        var navBar = document.getElementById("header-navbar");
        if (navBar.className === "navbar") {
            $(".navbar").addClass("responsive");
        } else {
            $(".navbar").removeClass("responsive");
        }
    });

    ////////////////////////////////////////////////////////////
    // A N I M A T I O N
    //////////////////////////////////////////////////////////// 
    
    TweenMax.set($("footer img"), {filter: "grayscale(100%)", autoAlpha: 0.2});
    $("footer img").on({
        mouseenter:function() {
            TweenMax.to($(this), 0.5, {filter: "none", autoAlpha: 1});
        }, mouseleave:function() {
            TweenMax.to($(this), 0.2, {filter: "grayscale(100%)", autoAlpha: 0.2});
        }
    });
    
});