jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.nav-bar ul').toggleClass('active');

		e.preventDefault();
	});
});