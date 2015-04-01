$(document).ready(function(){
    setupZoom();
    
	$('#get_my_palette a').click(function(){
		if($('input.file').val() == ''){
			alert('You must select a file');
		}else{
			$('#zoomDimmer').css({'visibility':'visible'}).show();
      $('#upload_form').submit();
		}
		return false;
	});

	$('#email_dialog').dialog({
	    show: 'fade',
	    modal: true,
	    autoOpen: false,
	    buttons: {
	        'send': function() {
	            var email = $('#email').val();
	            if(!email) alert('Please enter an email address');
	            var data = {name: current_palette.name, colors: current_palette.colors.join(','),
	                        url: current_palette.url, email: email};

	            $.getJSON('/email.php', data, function(res, status) {
	                if(status == 'success' || res.status == 'success') {
	                    $('#email_me_success').html('Palette results have been sent to ' + email).show('slow');
	                    setTimeout(function() { $('#email_me_success').hide('slow'); }, 2000);
	                } else {
	                    $('#email_me_error').html('An error occurred sending your email.  Please try again').show('slow');
	                    setTimeout(function() { $('#email_me_error').hide('slow'); }, 2000);
	                }
	            });
	            $(this).dialog('close');
	        },
	        'cancel': function() {
	            $(this).dialog('close');
	        }
	    }
	});
    $('#email_me').click(function(e) {
        $('#email_dialog').dialog('open');
        $('.ui-dialog').css('display', 'block');
        return false;
    });
	
	$('a[rel="external"]').each(function(){
		$(this).attr('target','_blank');
	});
	$('a').each(function(){
		$(this).focus(function(){
	    $(this).blur(); // most browsers
	    $(this).hideFocus = false; // ie
		});
	});
	
    initFileUploads();
});

var W3CDOM = (document.createElement && document.getElementsByTagName);
function initFileUploads() {
    if (!W3CDOM) return;
    var fakeFileUpload = document.createElement('div');
    fakeFileUpload.className = 'fakefile';
    fakeFileUpload.appendChild(document.createElement('input'));
    var image = document.createElement('img');
    image.src='../img/browse_input.png';
    fakeFileUpload.appendChild(image);
    var x = document.getElementsByTagName('input');
    for (var i=0;i<x.length;i++) {
        if (x[i].type != 'file') continue;
        if (x[i].parentNode.className != 'file_input') continue;
        x[i].className = 'file hidden';
        var clone = fakeFileUpload.cloneNode(true);
        x[i].parentNode.insertBefore(clone, x[i].nextSibling);
        x[i].relatedElement = clone.getElementsByTagName('input')[0];
        x[i].onchange = x[i].onmouseout = function () {
            this.relatedElement.value = this.value;
        }   
    }   
}
