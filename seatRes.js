$(document).ready(function() {
	$(".available").click(function() {
		var name = $(this).attr("name");
		$("form").text(function() {
		
			$(this).css("display", "block");
			var newSeat = $("#seat").val(name);
			
			console.log(newSeat);
		})
		console.log(name);
	});



});