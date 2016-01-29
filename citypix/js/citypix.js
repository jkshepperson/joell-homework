$(document).ready(function() {

	$("form").submit(checkCity);

	function checkCity (){
		event.preventDefault();
		var city = $('#city-type').val();
		console.log(city);
		if (city == 'NYC' || city == 'New York City' || city == 'New York') {
			$("body").css('background-image', 'url(images/nyc.jpg)');

		} else if (city == 'LA' || city == 'LAX' || city == 'Los Angeles') {
			$("body").css('background-image', 'url(images/la.jpg)');

		} else if (city == 'Austin' || city == 'ATX') {
			$("body").css('background-image', 'url(images/austin.jpg)');

		} else if (city == 'Sydney' || city == 'SYD') {
			$("body").css('background-image', 'url(images/sydney.jpg)');

		} else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
			$("body").css('background-image', 'url(images/sf.jpg)');
		
		} else {
				alert("Sorry, we don't recognize that city. Please try again.");
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