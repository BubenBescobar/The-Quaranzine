// JavaScript Document

$(document).ready(function(){
	$('.mobile-view').click(function(){
		$('.desktop-view').toggleClass('expand');
	});
});

$(document).ready(function(){
	$('.mobile-view').tap(function(){
		$('.desktop-view').toggleClass('expand');
	});
});
