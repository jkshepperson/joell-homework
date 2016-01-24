$(document).ready(function() {

// when a user cliks read more link
// hide the readmore link
// display the readless link
// display the hidden p of text

$('#readmore').click(showStuff);

function showStuff () {
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('#readless').slideDown();
	$('#readmore').hide();
	$('#readless').show();
}

$('#readless').click(hideStuff);

function hideStuff () {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('#readless').hide();
	$('#readmore').show();
}

// when a user clicks learn more
// span slidesdown
// hide learn more link

$('#learnmore').click(spanSlide);

function spanSlide () {
	event.preventDefault();
	$('#learnmore').hide();
	$('#learnmoretext').slideDown();
}



});