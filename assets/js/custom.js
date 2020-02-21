$(function(){
   $(window).scroll(function () {
        if ($(this).scrollTop() > 100){
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 'slow');
    });

    $('.menu-toggle').click(function() {
        $('.main-menu').toggleClass('active');
    });
    $('.main-menu ul li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
})
