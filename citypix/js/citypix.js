$(document).ready(function() {

$('#submit-btn').click(grabCity);

function grabCity() {
	event.preventDefault();
	var city = $('#city-type').val();

}

$('#submit-btn').click(nyc);

function nyc() {
	if(city === "New York") {
		console.log("newYork");
		$('body').css('background-image', 'url(/images/nyc.jpg)');
	} else if (city === "NYC") {
		console.log("newYork");
		$('body').css('background-image', 'url(/images/nyc.jpg)');
	} else if (city === "New York City") {
		console.log("newYork");
		$('body').css('background-image', 'url(/images/nyc.jpg)');
	} else {
		console.log("wrong");
	}
}

$('#submit-btn').click(aus);

function aus() {
	if(city === "Austin") {
		console.log("austinTx");
		$('body').css('background-image', 'url(/images/austin.jpg)');
	} else if (city === "ATX") {
		console.log("austinTx");
		$('body').css('background-image', 'url(/images/austin.jpg)');
	} else {
		console.log("wrong");
	}
}

$('#submit-btn').click(la);

function la() {
	if(city === "LA") {
		console.log("losang");
		$('body').css('background-image', 'url(/images/la.jpg)');
	} else if (city === "LAX") {
		console.log("losang");
		$('body').css('background-image', 'url(/images/la.jpg)');
	} else if (city === "Los Angeles") {
		console.log("losang");
		$('body').css('background-image', 'url(/images/la.jpg)');
	} else {
		console.log("wrong");
	}
}

$('#submit-btn').click(sanFran);

function sanFran() {
	if(city === "San Francisco") {
		console.log("sf");
		$('body').css('background-image', 'url(/images/sf.jpg)');
	} else if (city === "SF") {
		console.log("lsf");
		$('body').css('background-image', 'url(/images/sf.jpg)');
	} else if (city === "Bay Area") {
		console.log("lsf");
		$('body').css('background-image', 'url(/images/sf.jpg)');
	} else {
		console.log("wrong");
	}
}

$('#submit-btn').click(sydney);

function sydney() {
	if(city === "Sydney") {
		console.log("syd");
		$('body').css('background-image', 'url(/images/sydney.jpg)');
	} else if (city === "SYD") {
		console.log("syd");
		$('body').css('background-image', 'url(/images/sydney.jpg)');
	} else {
		console.log("wrong");
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