

new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );


jQuery(document).ready(function() {

    

	function pde(e){
		if(e.preventDefault)
			e.preventDefault();
		else
			e.returnValue = false;
	}


	$(window).load(function () {
		jQuery('#header-photo').delay( 1 ).animate({opacity: '1', 'margin-top' : '0'}, 1000, 'easeInOutCubic', function() {
			jQuery('#header h1').delay( -200 ).animate({opacity: '1', 'padding-top': '0'}, 600, 'easeInOutCubic', function() {
				jQuery('#header p').animate({opacity: '1'}, 400, 'easeInOutCubic');
			});
		});
	});


});
