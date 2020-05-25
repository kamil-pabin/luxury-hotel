$(document).ready(function() {
    $("#scroll-down").click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $("#pricing").offset().top + 'px'
      }, 'slow');
    })
    $("#scroll-up").click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $("#main").offset().top + 'px'
      }, 'slow');
    });
  });


 