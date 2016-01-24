// grab the value of the input field text
$('form').submit(convertCat);

function convertCat (event) {
	event.preventDefault();

	var userWords = $('#words').val();

// add a space to the end of the word

	userWords = userWords + " cat";

	$('#wordCat').html(userWords);


}



// add cat to the end