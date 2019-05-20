$(document).ready(function () {
    
    ////////////////////////////////////////////////////////////
    // A N I M A T I O N
    //////////////////////////////////////////////////////////// 
    
    // Footer Logos Tween
    TweenMax.set($("footer img"), {filter: "grayscale(100%)", autoAlpha: 0.2});
    $("footer img").on({
        mouseenter:function() {
            TweenMax.to($(this), 0.5, {filter: "none", autoAlpha: 1});
        }, mouseleave:function() {
            TweenMax.to($(this), 0.2, {filter: "grayscale(100%)", autoAlpha: 0.2});
        }
    }); 
    
    ////////////////////////////////////////////////////////////
    // S C R O L L   M A G I C
    ////////////////////////////////////////////////////////////  
    
    // Init Scroll Magic Controller
    var controller = new ScrollMagic.Controller();  
    
    // Animate Scroll
    controller.scrollTo(function (newpos) {
        newpos = newpos - 50;
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });
    
    // Bind Scroll Anchor Links
    $("ul.nav li a, a.navbar-brand img").on("click", function (e) {  
        
        // Navbar Inactive/Active Link
        $("ul.nav li").removeClass("active");
        $(this).parent().toggleClass("active");
        $(".navbar-collapse").removeClass("in");
        
        // Anchor Link ID
        var id = $(this).attr("href");
       
        if ($(id).length > 0) {
            e.preventDefault(); 
            
            // Trigger Scroll
            controller.scrollTo(id);
            
            // Update URL
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });

    ////////////////////////////////////////////////////////////
    // M O D A L
    //////////////////////////////////////////////////////////// 

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    ////////////////////////////////////////////////////////////
    // J A W G   M A P
    //////////////////////////////////////////////////////////// 
    
    // Allow map srcoll zoom after click
    $('.map-container').click(function () {
        $('.map-container iframe').css("pointer-events", "auto");
    });
    
    // Prevent map scroll zoom
    $( ".map-container" ).mouseleave(function() {
      $('.map-container iframe').css("pointer-events", "none");
    });
    
});