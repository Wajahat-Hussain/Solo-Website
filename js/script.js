/*=====================================
|            Preloader                |
 =====================================*/
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});



/*=====================================
|              Navigation             |
 =====================================*/
//    Show and hide white navigation

$(function(){
    
    showHideNav();
    
    $(window).scroll(function(){
        showHideNav();
    });
    
    function showHideNav(){
        if( $(window).scrollTop() > 50) {
//           Show White Nav
            $("nav").addClass("white-nav-top");
            
//            Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            
//              Show back to top button
            $("#back-to-top").fadeIn();
            
           }
           else{
//            Hide white Nav
               $("nav").removeClass("white-nav-top");
               
//            Show Normal logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

               
//              Hide back to top button
            $("#back-to-top").hide();
 
               
            }
        }
});

/*=====================================
|              Mobile Menu             |
 =====================================*/

$(function(){
    
//    Show Mobile Nav
    $("#mobile-nav-open-btn").click(function() {
       $("#mobile-nav").css("height", "100%"); 
    });
    //    Hide Mobile Nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
       $("#mobile-nav").css("height", "0%"); 
    });
    
});





//        Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        
//        get section id like #about,#team etc
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});




/*=====================================
|         Team Owl-Carousel           |
 =====================================*/
$(function(){
  $("#team-members").owlCarousel({
      items: 2,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left fa-2x"><i/>', '<i class="fa fa-angle-right fa-2x"><i/>'],
      responsive: {
          0: {
              items: 1
          },
          480: {
              items: 2
          }
      }
  });
});


/*=====================================
|           Progress Bars              |
 =====================================*/
$(function(){
   $(".progress-bar").each(function(){
       $(this).animate({
           width: $(this).attr("aria-valuenow") + "%"
       }, 1000);
   });
});




/*=====================================
|         Responsive-Tabs             |
 =====================================*/

$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});




/*=====================================
|      Testimonial Owl-Carousel       |
 =====================================*/
$(function(){
  $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      navText: ['<i class="fa fa-angle-left fa-2x"><i/>', '<i class="fa fa-angle-right fa-2x"><i/>']
  });
});



/*=====================================
|           Magnifier                 |
 =====================================*/

$(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/*=====================================
|             Stats                   |
 =====================================*/

$(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});



/*=====================================
|               CLients               |
 =====================================*/
$(function(){
  $("#client-list").owlCarousel({
      items: 6,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left fa-2x"><i/>', '<i class="fa fa-angle-right fa-2x"><i/>']
  });
});


/*=====================================
|                Animation             |
 =====================================*/

$(function(){
    
    new WOW().init();
    
});

$(window).on('load', function(){
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated fadeInUp");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
    $(".site-nav-wrapper ul.nav").addClass("animated fadeInRight");
});


































