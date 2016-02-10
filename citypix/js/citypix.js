$(document).ready(function() {

// set the dropdown values and create variables for the new dropdown choices and values of those choices
	var dropdown = ["NYC", "SF", "LAX", "ATX", "SYD"];

// fill dropdown list with choices from the array by appending a new option row
	for (var i=0;i<dropdown.length;i++) {
   		$('#cities').append('<option value="'+ dropdown[i] + '">' + dropdown[i] + '</option>');
   	}

// change background to match users selection
   	$('#cities').change(changeStyle);

   	function changeStyle () {
   		var choice = $('select').val();
   		console.log(choice);

   		if (choice == dropdown[0]) {
			$("body").css('background-image', 'url(images/nyc.jpg)');
		
		} else if (choice == dropdown[1]) {
			$("body").css('background-image', 'url(images/sf.jpg)');
		
		} else if (choice == dropdown[2]) {
			$("body").css('background-image', 'url(images/la.jpg)');
		
		} else if (choice == dropdown[3]) {
			$("body").css('background-image', 'url(images/austin.jpg)');
		
		} else if (choice == dropdown[4]) {
			$("body").css('background-image', 'url(images/sydney.jpg)');
		} 
   	}

});
