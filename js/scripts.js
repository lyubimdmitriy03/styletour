$(function(){
	$('.carousel').carousel({
 		 interval: false
	});

	$('.search').on('click', function(){
		$('.main-menu .navbar-form').slideToggle();
	});

	$('.glyphicon-user').on('click', function(){
		$('.menu-top .navbar-right').slideToggle();
	});

	$('#elastislide').elastislide();
});

	$(window).load(function(){
		var carouselCaptionWidth = $('#carousel-sidebar .active img').width();
			$('#carousel-sidebar img').each(function(){
				$(this).attr('width', carouselCaptionWidth);
			});
			$('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouselCaptionWidth + 'px');
			$('#carousel-sidebar .carousel-indicators').css('max-width', carouselCaptionWidth + 'px');
			$('.sidebar .banner').css('max-width', carouselCaptionWidth + 'px');
	});    

	// на одинаковый размер щирины картинки



	
