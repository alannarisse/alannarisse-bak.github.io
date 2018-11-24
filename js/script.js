	$('.collapsable div').hide();

	//Toggles a slide on any h2 tags inside the sidebar.
	$('.collapsable h2').click(function() {
		$(this).next().slideToggle();
	});