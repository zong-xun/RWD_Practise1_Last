$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $(".menu").toggleClass('menu_open');
		$(".menu ul").toggleClass('menu_ul_open');
	});
});