$(document).ready(function() {

// set the dropdown values and create variables for the new dropdown choices and values of those choices
	var dropdown = ["NYC", "SF", "LAX", "ATX", "SYD"];
	var newOption = '';

// fill dropdown list with choices from the array by appending a new option row
	for (var i=0;i<dropdown.length;i++) {
   		newOption = ('<option value="'+ dropdown[i] + '">' + dropdown[i] + '</option>');
   		$('#cities').append(newOption);
   	}

 });

// Note: this section seems to break the other good work of populating the dropdown so I wrote it in the comments

/* 
create event to notify when it's time to change the background picture

	$('cityChoice').submit(changeCity);

change the background based on which option the user selects

	function changeCity () {
		var chosenCity = $('#cities').val();

		if (chosenCity == "nyc") {
			$("body").css('background-image', 'url(images/nyc.jpg)');
		
		} else if (chosenCity == 'sf') {
			$("body").css('background-image', 'url(images/sf.jpg)');
		
		} else if (chosenCity == 'lax') {
			$("body").css('background-image', 'url(images/la.jpg)');

		} else if (chosenCity == 'atx') {
			$("body").css('background-image', 'url(images/austin.jpg)');
		
		} else if (chosenCity == 'syd') {
			$("body").css('background-image', 'url(images/sydney.jpg)');
		
		} else {
			console.log("help");
		}

});
*/