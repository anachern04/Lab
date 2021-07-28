$(function () {

	// Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.cssload-box-loading');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // Плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

	// Всплывающее окно 
	$('.call').click(function (){
		$('#exampleModal').arcticmodal();
	})

	// Всплывающее окно 2 
	$('.box-modal__send').click(function (){
		alert ('Ваша заявка принята');
	})

	// Menu opener hamburger
	$('.menu-bars').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
	})

	// Slider
	 $('.reviews__slider').slick({
	    dots: true,
	    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
	    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
	    autoplay: true,
	    autoplaySpeed: 3000,
	  });

	 //Arrow up
	 $(document).ready(function(){

	    $(window).scroll(function(){
	        if ($(this).scrollTop() > 100) {
	            $('.scrollup').fadeIn();
	        } else {
	            $('.scrollup').fadeOut();
	        }
	     });
	          
	        $('.scrollup').click(function(){
	        $("html, body").animate({ scrollTop: 0 }, 600);
	        return false;
	   	 });
	  });
})