/**
 * Created by talosdigital on 12/13/17.
 */
$(document).ready(function(){

  /* Show menu */
  $( ".r-menu" ).click(function() {
    if($(".r-nav-list").hasClass("r-show"))
    {
      $(".r-nav-list").removeClass("r-show");
      $(".r-nav").removeClass("r-show");
    }
    else
    {
      $(".r-nav-list").addClass("r-show");
      $(".r-nav").addClass("r-show");
    }
  });

  /* Scroll for changing the menu div */
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 120){
      $(".r-nav-wp").addClass('r-scroll-wp');
      $(".r-nav-header-wp").addClass('r-scroll');
    }
    else{
      $(".r-nav-wp").removeClass('r-scroll-wp');
      $(".r-nav-header-wp").removeClass('r-scroll');
    }
  });

  /* Toggle - footer */
  $( ".r-footer-content-box-title" ).click(function() {
    if($(this).hasClass("r-show-info"))
    {
      $(this).removeClass("r-show-info");
      $(this).siblings().removeClass("r-show-info");
    }
    else
    {
      $(this).addClass("r-show-info");
      $(this).siblings().addClass("r-show-info");
    }
  });

});
