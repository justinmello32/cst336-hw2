		$(document).ready(function(){
			
			//Initial Variables
			var winnings = localStorage.getItem("total_winnings");
			var betAmount= 0;
			localStorage.setItem("total_winnings", 0)
			
			//Event Listener
			$("#spin-button").on("click",function(){
				spinWheel();
			});//click



			//Functions Here
			function spinWheel() {
				betAmount = $("#bet-amount").val();
				winnings = +winnings + +betAmount;
				localStorage.setItem("total_winnings", betAmount);
				$("#totalWinnings").html(`Total Winnings: ${winnings}`);
		}



		})//ready
	