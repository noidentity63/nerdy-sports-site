$(document).ready(function() {
	alert("JavaScript and JQuery OK!");

	//var homeClone = $('.main-panel__cnt__vis, .main-panel__cnt__txt').clone();
	var cntVisClone = $('.main-panel__cnt__vis').clone();
	var cntTxtClone = $('.main-panel__cnt__txt').clone();

	/*
	*	Main Navigation Tabs
	*/

	//Home Tab
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

	//School Tab
	$(document).on('click', '#school-btn', function() {

		$('.tabs li').removeClass('active');
		$(this).addClass('active');

		$('.inf-panel').show();
		$('.main-panel').removeClass('col-md-10');
		$('.main-panel').addClass('col-md-8');

		$('.main-panel__cnt__vis, .main-panel__cnt__txt').empty();
	});

	//NBA Teams and Stars Tab
	$(document).on('click', '#stars-btn', function() {

		$('.tabs li').removeClass('active');
		$(this).addClass('active');

		$('.inf-panel').hide();
		$('.main-panel').removeClass('col-md-8');
		$('.main-panel').addClass('col-md-10');

		$('.main-panel__cnt__vis, .main-panel__cnt__txt').empty();
		$('.main-panel__cnt__vis').load("/players.html #table-main");
	});

	/*
	*	Misc Panel Declarations and Functions
	*/

	var misc_panel = {
		about: "<p><strong>NBArds</strong> is an 'Edutainment' website that is focused on delivering entertaining and high-quality information on all things related to the National Basketball Association. Deriving from the acronym <em>NBA</em> and the word <em>bard</em>, this site acts as the league's unofficial profiler and storyteller. Whether you're a longtime hardcore NBA fan or a casual fan wanting to learn more about the association, this site is for you. Explore now and be informed and updated to a variety of topics such as NBA stars and teams, statistics, and author opinions.</p>",
		vision: "value",
		contact: "Contact me.",
	};

	$('.misc-panel__wrapper').html(misc_panel.about);

	//Show 'About' section on #about-btn click
	$(document).on('click', '#about-btn', function() {

		$('.main-header__nav li').removeClass('active');
		$(this).addClass('active');

		$('.misc-panel__wrapper').html(misc_panel.about);

	});

	//Show 'Vision' section on #vision-btn click
	$(document).on('click', '#vision-btn', function() {

		$('.main-header__nav li').removeClass('active');
		$(this).addClass('active');

		$('.misc-panel__wrapper').html(misc_panel.vision);
	});

	//Show 'Contact me' section on #contact-btn click
	$(document).on('click', '#contact-btn', function() {

		$('.main-header__nav li').removeClass('active');
		$(this).addClass('active');

		$('.misc-panel__wrapper').html(misc_panel.contact);
	});

});