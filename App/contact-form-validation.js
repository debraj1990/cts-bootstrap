/**
 * http://usejsdoc.org/
 */

function validateText(id) {
	var field = $("#" + id);
	var div=field.closest('div')
	var value = field.val();
	if (value === null || value === "") {
		div.removeClass('has-success');
		$("#glyph"+id).remove();
		div.addClass('has-error has-feedback');
		div.append('<span id=glyph'+id+' class="glyphicon glyphicon-remove form-control-feedback"></span>');
		return false;
	}else{
		div.removeClass('has-error');
		div.addClass('has-success has-feedback');
		$("#glyph"+id).remove();
		div.append('<span id=glyph'+id+' class="glyphicon glyphicon-ok form-control-feedback"></span>');
		return true;
	}
}

$(document).ready(function() {

	$("#contactFormBtn").click(function(e) {
		
		console.log('contactFormBtn clicked....');

		if(!validateText("contactName")){
			return false;
		}
		if(!validateText("contactEmail")){
			return false;
		}
		if(!validateText("contactSubject")){
			return false;
		}
		
		if(!validateText("contactMessage")){
			return false;
		}
		
		$('form#contactForm').submit();
		
	});

});