$(document).ready( function() {


	if ($(window).width() < 992) {
		$('.header-list-item').click( function() {
			
			if (!$(this).hasClass('opened')) {
				$('.header-list-item').removeClass('opened');
				$(this).addClass('opened');
			} else {
				$(this).removeClass('opened');
			}
		});
	}

});