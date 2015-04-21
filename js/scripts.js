

new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );


jQuery(document).ready(function() {



	function pde(e){
		if(e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;
	}


	$(window).load(function () {
		jQuery('#header-photo').delay( 100 ).animate({opacity: '1', 'margin-top' : '0'}, 1000, 'easeInOutCubic', function() {
			jQuery('#header h1').delay( -200 ).animate({opacity: '1', 'padding-top': '0'}, 600, 'easeInOutCubic', function() {
				jQuery('#header p').animate({opacity: '1'}, 400, 'easeInOutCubic');
			});
		});
	});


	$('.nav a').on('click', function () {
		$('#my-nav').removeClass('in').addClass('collapse');
	});


	$(document).scroll(function () {
		var position = $(document).scrollTop();
		var headerHeight = $('#header').outerHeight();
		if (position >= headerHeight - 100){
				$('.navbar').addClass('minified');
		} else {
				$('.navbar').removeClass('minified');
		}


		$(".jumbotron .container").css({
			'opacity' : (1 - position/500)
		});


		if (position >= headerHeight - 100){
			$('.scrolltotop').addClass('show-to-top');
		} else {
			$('.scrolltotop').removeClass('show-to-top');
		}

	});


	$('.navbar-nav li a').click(function(evt){
		var place = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(place).offset().top
			}, 1200, 'easeInOutCubic');
		pde(evt);
	});


	$('#header p a').click(function(evt) {
		var place = $(this).attr('href');
		$('html, body').animate({scrollTop: $(place).offset().top}, 1200, 'easeInOutCubic');
		pde(evt);
	});

    
    var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
    
    
    

});
