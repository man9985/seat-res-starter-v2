$(document).ready(function() {
	
	$(".available").click(function() {
		
		var name = $(this).attr("name");
		$("form").text(function() {
		
			$(this).css("display", "block");
			var newSeat = $("#seat").val(name);

			button.addEventListener ("click", function() {
   			var getCustomerName = document.getElementById("username").value;
   			var getSeat = document.getElementById("seat").value;
   			var assignedSeats = {
   				seatnumber: getSeat,
   				customername: getCustomerName };

			console.log(assignedSeats);	

			var newMessage2;
			var newMessage = document.createElement("p");
    	    newMessage2.innerText += getCustomerName + " has reserved " + getSeat; 
    		console.log(newMessage);
            newMessage.appendChild(newMessag2e);
			}); 
			
		});
		
	});

});