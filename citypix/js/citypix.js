$(document).ready(function() {

	var dropdown = ["NYC", "SF", "LAX", "ATX", "SYD"];
	var newOption = '';
	var cityChoice = $('option').val();

	for (var i=0;i<dropdown.length;i++) {
   		newOption = '<option value="'+ dropdown[i] + '">' + dropdown[i] + '</option>';
   		$('#cities').append(newOption);
	}

	$('option').click(changeCity);

	function changeCity () {
		if (cityChoice == "nyc") {
			$("body").css('background-image', 'url(images/nyc.jpg)');
		
		} else if (cityChoice == 'sf') {
			$("body").css('background-image', 'url(images/sf.jpg)');
		
		} else if (cityChoice == 'lax') {
			$("body").css('background-image', 'url(images/la.jpg)');

		} else if (cityChoice == 'atx') {
			$("body").css('background-image', 'url(images/austin.jpg)');
		
		} else if (cityChoice == 'syd') {
			$("body").css('background-image', 'url(images/sydney.jpg)');
		
		} else {
			alert.("Make Selection");
		}

});