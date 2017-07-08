$(function () {

    //slide
  $('.slide').click(function () {
     $('.slide2').slideDown();

   });
    new WOW().init();

  //animate
        //easy
    /*$('.animate').animate({
        width: '200px'
    }, 1000);*/
        //second step
    $('.animate').animate({
        width: '200px'
    }, 1000, function(){$('span').fadeIn(2000)});

});