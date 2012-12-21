$(document).ready(function(){
	$('.c-second h3').toggle(function(){
		$(this).next().slideDown();
	    $(this).addClass('c-orange');
	},
	function(){
	    $(this).next().slideUp();
	    $(this).removeClass('c-orange');
	});
	$(".b-pads .b-violet").click(function(){
	    $('.c-first').addClass("hidden");
	    $('.c-second').removeClass("hidden");
	});
	$(".b-pads .b-orange").click(function(){
	    $('.c-second').addClass("hidden");
	    $('.c-first').removeClass("hidden");
	});
});