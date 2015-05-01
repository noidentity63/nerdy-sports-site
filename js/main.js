$(document).ready(function() {
	alert("JavaScript and JQuery OK! Really!!");

	jQuery.fn.visible = function() {
		return this.css('visibility', 'visible');
	}

	jQuery.fn.invisible = function() {
		return this.css('visibility', 'hidden');
	}


	//var homeClone = $('.main-panel__cnt__vis, .main-panel__cnt__txt').clone();
	var cntVisClone = $('.main-panel__cnt__vis').clone();
	var cntTxtClone = $('.main-panel__cnt__txt').clone();

	var $mainPanelTabs = $('.main-panel__cnt .tabs ul li');
	var $miscPanelBtns = $('.main-header__nav ul li');

	var $mainPanelCntVisTxt = $('.main-panel__cnt__vis, .main-panel__cnt__txt');
	/*
	*	Main Navigation Tabs
	*/

	//Home Tab
	/*
	$(document).on('click', '#home-btn', function() {

		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		//$('.main-panel__cnt__vis, .main-panel__cnt__txt').html(homeClone.clone());	//.clone() ensures homeClone doesn't change values
		
		$('.inf-panel').show(500);
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
	*/

	$mainPanelTabs.on('click', function() {
		var $tabId = $(this).attr('id');

		$('.main-panel__cnt .tabs ul li.active').removeClass('active');
		$(this).addClass('active');
		//alert($tabId);

		switch ($tabId) {
			case "home-btn": 

				showInfPanel(300);

				/*	Fix for the duplicate element clone bug
				*	.clone() ensures that the variables don't lose their respective values
				*/
				$('.main-panel__cnt__vis').html(cntVisClone.clone()).hide().fadeIn(500);
				$('.main-panel__cnt__txt').html(cntTxtClone.clone()).hide().fadeIn(500);

				break;
			
			case "school-btn": 

				$mainPanelCntVisTxt.empty();

				showInfPanel(300);

				break;
				
			case "stars-btn": 

				// Hide info panel and expand the main panel
				// NOTE: Minor visual bug in which the misc panel content sometimes flickers for a split second in the left pane
				hideInfPanel(300);

				// Show the players table that is referred from an external resource "players.html"
				// Custom JQuery animation on callback
				$mainPanelCntVisTxt.empty();
				$('.main-panel__cnt__vis').load("/players.html table", function() {
					$(this).hide();
					$(this).fadeIn(700);
				});

				break;
		}

		function showInfPanel(time) {
			$('.misc-panel .misc-panel__wrapper:first-child').invisible();

			$('.inf-panel').show(time);

			$('.main-panel').removeClass('col-md-10').addClass('col-md-8');
			$('.misc-panel .misc-panel__wrapper:first-child').visible();
		}

		function hideInfPanel(time) {
			$('.inf-panel').hide(time, function() {
				$('.main-panel').removeClass('col-md-8').addClass('col-md-10');
			});
		}

	});
	/*
	$mainPanelTabs.on('mouseenter', function() {
		// Store id attribute
		var initTop = $(this).css('margin-top');

		// Animate the selected button if it is not active
		if (!$(this).hasClass('active')) {
			
			$(this).stop().animate({ marginTop: "-1.2em" }, 200);

			// Very buggy so far. Take note.
			$(this).on('click', function() {
				$(this).css("margin-top", initTop);
			});

			$(this).on('mouseleave', function() {
				$(this).stop().animate({ marginTop: initTop }, 200);
			});

		}
	});

	/*
	*	Alternative hover function
	*/
	var initTop = $mainPanelTabs.css('margin-top');

	$mainPanelTabs.hover(
		function() {
			// Animate the selected button if tab isn't active
			if (!$(this).hasClass('active')) {
				$(this).stop().animate({ marginTop: "-1.2em" }, 200);
			}

			// Very buggy so far. Take note.
			$(this).on('click', function() {
				$(this).css("margin-top", initTop);
			});
		},
		function() {
			$(this).stop().animate({ marginTop: initTop }, 200);
		}
	);

	/*
	*	Misc Panel Declarations and Functions
	*/

	var misc_panel = {
		about: "<p><strong>NBArd</strong> is an 'Edutainment' website that is focused on delivering entertaining and high-quality information on all things related to the National Basketball Association. Deriving from the acronym <em>NBA</em> and the word <em>bard</em>, this site acts as the league's unofficial profiler and storyteller. Whether you're a longtime hardcore NBA fan or a casual fan wanting to learn more about the association, this site is for you. Explore now and be informed and updated to a variety of topics such as NBA stars and teams, statistics, and author opinions.</p>",
		vision: "Vision text here....",
		contact: "I'm Bryan Pineda. Contact me...",
	};

	$('.misc-panel__wrapper').html(misc_panel.about);


	/*
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
	*/

	$miscPanelBtns.on('click', function() {
		var btnId = $(this).attr('id');
		var $wrapperOne = $('.misc-panel__wrapper');

		//alert(btnId);

		// Change 'active' class for the button group
		toggleActiveButtons(this);

		//$('.main-header__nav .nav ul li.active').removeClass('active');
		//$(this).addClass('active');

		$wrapperOne.empty();

		switch (btnId) {
			case "about-btn":
				// Show 'about' text in first misc panel wrapper
				$wrapperOne.html(misc_panel.about).hide().fadeIn(400);
				
				break;
			case "vision-btn":
				// Show 'vision' text in first misc panel wrapper 
				$wrapperOne.html(misc_panel.vision).hide().fadeIn(400);

				break;
			case "contact-btn": 
				// Show 'contact' text in first misc panel wrapper
				$wrapperOne.html(misc_panel.contact).hide().fadeIn(400);

				break;
		}

		// BUG FIXED! Just messed up with my selectors names.
		function toggleActiveButtons (newBtn) {
			var $activeBtn = $('.main-header__nav ul li.active');

			// Move active class to another button
			$activeBtn.removeClass('active');
			$(newBtn).addClass('active');
		}

	});


});