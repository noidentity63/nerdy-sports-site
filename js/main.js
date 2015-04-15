$(document).ready(function() {
	alert("JavaScript and JQuery OK!");

	//var homeClone = $('.main-panel__cnt__vis, .main-panel__cnt__txt').clone();
	var cntVisClone = $('.main-panel__cnt__vis').clone();
	var cntTxtClone = $('.main-panel__cnt__txt').clone();

	//Main Navigation Tabs

	//Home
	$(document).on('click', '#home-btn', function() {

		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		//$('.main-panel__cnt__vis, .main-panel__cnt__txt').html(homeClone.clone());	//.clone() ensures homeClone doesn't change values
		
		$('.inf-panel').show();
		$('.main-panel').removeClass('col-md-10');
		$('.main-panel').addClass('col-md-8');

		//Fix for the duplicate element clone bug
		$('.main-panel__cnt__vis').html(cntVisClone.clone());
		$('.main-panel__cnt__txt').html(cntTxtClone.clone());

	});

	//School
	$(document).on('click', '#school-btn', function() {

		$('.tabs li').removeClass('active');
		$(this).addClass('active');

		$('.inf-panel').show();
		$('.main-panel').removeClass('col-md-10');
		$('.main-panel').addClass('col-md-8');

		$('.main-panel__cnt__vis, .main-panel__cnt__txt').empty();
	});

	//NBA Teams and Stars
	$(document).on('click', '#stars-btn', function() {

		$('.tabs li').removeClass('active');
		$(this).addClass('active');

		$('.inf-panel').hide();
		$('.main-panel').removeClass('col-md-8');
		$('.main-panel').addClass('col-md-10');

		$('.main-panel__cnt__vis, .main-panel__cnt__txt').empty();
		$('.main-panel__cnt__vis').load("/players.html");
	});
});