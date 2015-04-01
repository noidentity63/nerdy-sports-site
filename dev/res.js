//alert("Hello");

$(document).ready(function() {
	alert("JavaScript loaded");

	//Capture clicked link and store to var
	$('.item').click(function() {
		var tempId = $(this).attr("id");
		//var tempId = jQuery(this).attr("id");
		//alert(tempId + " was clicked.");

		//Perform dynamic changes to iframe from the var information
		switch (tempId) {
		case "item-1": 	$('iframe').attr("width", "1366px");
						$('iframe').attr("height", "728px");
						$('.item').css("font-weight", "normal");
						$('#item-1').css("font-weight", "bold");
						$('#info-res').html("<h3>1366 x 728</h3>");
						break;
		case "item-2": 	$('iframe').attr("width", "1920px");
						$('iframe').attr("height", "1080px");
						$('.item').css("font-weight", "normal");
						$('#item-2').css("font-weight", "bold");
						$('#info-res').html("<h3>1920 x 1080</h3>");
						break;
		case "item-3": 	$('iframe').attr("width", "1027px");
						$('iframe').attr("height", "768px");
						$('.item').css("font-weight", "normal");
						$('#item-3').css("font-weight", "bold");
						$('#info-res').html("<h3>1027 x 768</h3>");
						break;
		case "item-4": 	$('iframe').attr("width", "1280px");
						$('iframe').attr("height", "800px");
						$('.item').css("font-weight", "normal");
						$('#item-4').css("font-weight", "bold");
						$('#info-res').html("<h3>1280 x 800</h3>");
						break;
		}

		//$(this).attr("font-weight", "bold");
	});

});