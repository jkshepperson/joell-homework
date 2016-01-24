$(document).ready(function() {

$('form').submit(trimWord);

function trimWord() {
    event.preventDefault();
    var enteredValue = $('#city-type').val();
    var trimmedValue = enteredValue.trim();
    $('#city-type').val(trimmedValue);
    var newValue = $('#city-type').val(trimmedValue);
}

$('#submit-btn').click(compareCity);

function compareCity () {
	if(newValue = "New York") {
	// code to be executed if condition is true
	} 
	else if(newValue = "New York City"{
		// code to be executed if condition is false
	}
	else if(newValue = "NYC"{
		// code to be executed if condition is false
	}
	else {
		// code to be executed if condition is false
	}
}

});
/*

When a user clicks the submit button

If the string of text they entered is "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
		Or if it's not New York and not any of the options below, display city pix home background.

If the string of text they entered is "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		Or if it's not New York and not any of the options below, display city pix home background.

If the string of text they entered is "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		Or if it's not New York and not any of the options below, display city pix home background.

If the string of text they entered is "Austin" or "ATX" make the background of the page austin.jpg
		Or if it's not New York and not any of the options below, display city pix home background.

If the string of text they entered is "Sydney" or "SYD" make the background of the page sydney.jpg
		Or if it's not New York and not any of the options below, display city pix home background.

When a user clicks anywhere outside of the form field or submit button area
	Clear the field to display the default text


*/