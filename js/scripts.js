		$(document).ready(function(){
			
			//Initial Variables
			var winnings = localStorage.getItem("total_winnings");
			var betAmount= 0;
			localStorage.setItem("total_winnings", 0)
			
			var slotImages = [
  				"7",
  				"coin",
  				"cherry"
			];
			
			//Event Listener
			$("#spin-button").on("click",function(){
				spinWheel();
			}); //Click Listener

			//Functions Here
			function spinWheel() {
			   let winAmount = 0;
			   let win = false;
			   betAmount = $("#bet-amount").val();


			   //Error checking for empty value
			   if(betAmount == 0) {
			   	alert("You didn't put in a bet, please put in a value");
			   	die();
			   }
			   if(betAmount < 0) {
			   	alert("You put in a negative value, that doesn't make sense...");
			   	die();
			   }

               
               var slotMachineImage1 = Math.floor(Math.random()  * slotImages.length);
               var slotMachineImage2 = Math.floor(Math.random()  * slotImages.length);
               var slotMachineImage3 = Math.floor(Math.random()  * slotImages.length);

               $("#position1").attr("src", `img/${slotMachineImage1}.png`);
               $("#position2").attr("src", `img/${slotMachineImage2}.png`);
               $("#position3").attr("src", `img/${slotMachineImage3}.png`);

               //All images are different than each other, this is a loss.
               if(slotMachineImage1 != slotMachineImage2 && slotMachineImage1 != slotMachineImage3 && 
               	slotMachineImage2 != slotMachineImage3) {
                    console.log("All items are different, you lose!");
             		winAmount = 0;
             		win = false;

             		$("#results").html("Sorry, you did not match any items! Better luck last time!");
             		$(`#results`).attr("class", "text-danger");

               }

               //All images match each other, x5 bet amount.
               if(slotMachineImage1 == slotMachineImage2 && slotMachineImage1 == slotMachineImage3) {
         			console.log("All items match!");
         			winAmount = betAmount * 5;
         			win = true;

         			$("#results").html("You matched all 3 items! Nice work!, you just won $" + winAmount);
         			$(`#results`).attr("class", "text-success");
               }
               //There are two items that match each other, x2 bet amount.
               else if(slotMachineImage1 == slotMachineImage2 || slotMachineImage1 == slotMachineImage3 || 
               	slotMachineImage2 == slotMachineImage3) {
               		console.log("Two items match!");
               		winAmount = betAmount * 2;
               		win = true;

               		$("#results").html("You matched 2 items! Not too shabby! You just won $" + winAmount);
               		$(`#results`).attr("class", "text-success");
               }

				console.log(winAmount);
				winnings = +winnings + +winAmount;
				localStorage.setItem("total_winnings", winAmount);
				$("#totalWinnings").html(`Total Winnings: $${winnings}`);
		}



		})//ready
	