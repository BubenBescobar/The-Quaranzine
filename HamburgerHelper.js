// JavaScript Document

$(document).ready(function(){
	$('.mobile-view').on('click',function(){
		$('.desktop-view').toggleClass('expand');
	});
});

$(document).ready(function(){
	$('.mobile-view').on('click touchstart',function(){
		$('.desktop-view').toggleClass('expand');
	});
});
