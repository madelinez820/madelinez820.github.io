(function($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      
      // places the resumebutton correctly
      if ($(document).width() >= 992){
        $("#resume-button").height("0px")
        $("#resume-button").css("line-height", "0px")
        $("#resume-button").height($("#navbarResponsive").height() + "px")
        $("#resume-button").css("line-height", $("#navbarResponsive").height() + "px")
      }
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      // places the resumebutton correctly
      if ($(document).width() >= 992){
        $("#resume-button").height("0px")
        $("#resume-button").css("line-height", "0px")
        $("#resume-button").height($("#navbarResponsive").height() + "px")
        $("#resume-button").css("line-height", $("#navbarResponsive").height() + "px")
      }

    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // fixing the resume-button when it's resized
  $(document).ready(larg);
  $(window).resize(larg);
  // $(window).resize(larg);
 
  function larg(){
    if ($(document).width() < 992){
      $("#resume-button").css("border","none")
      $("#resume-button").height("0px")
      $("#resume-button").css("line-height", 0 + "px")
      $("#resume-button").css("padding", 0 + "px")
      $("#resume-button-li").css("padding-top", "5px")
      $("#resume-button-li").css("padding-bottom", "5px")
      $("#resume-button-li").height("30px")

    }else{
      $("#resume-button").height("0px")
      $("#resume-button").css("line-height", "0px")
      $("#resume-button").height($("#navbarResponsive").height() + "px")
      $("#resume-button").css("line-height", $("#navbarResponsive").height() + "px")
      $("#resume-button").css("padding", 5 + "px")
      $("#resume-button").css("border","solid")
      $("#resume-button-li").css("padding-top", "0px")
      $("#resume-button-li").css("padding-bottom", "0px")
    }
  }

})(jQuery); // End of use strict
