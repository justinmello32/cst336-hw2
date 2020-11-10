		$(document).ready(function(){
			
			//Initial Variables
			var winAmount = 0;
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

               var slotMachineImage1 = Math.floor(Math.random()  * slotImages.length);
               var slotMachineImage2 = Math.floor(Math.random()  * slotImages.length);
               var slotMachineImage3 = Math.floor(Math.random()  * slotImages.length);

               $("#position1").attr("src", `img/${slotMachineImage1}.png`);
               $("#position2").attr("src", `img/${slotMachineImage2}.png`);
               $("#position3").attr("src", `img/${slotMachineImage3}.png`);

               //All images are different than each other, x3 bet amount
               if(slotMachineImage1 != slotMachineImage2 && slotMachineImage1 != slotMachineImage3 && 
               	slotMachineImage2 != slotMachineImage3) {
                    console.log("All items are different, you lose!");
               }

               //All images match each other, x5 bet amount
               if(slotMachineImage1 == slotMachineImage2 && slotMachineImage1 == slotMachineImage3) {
         			console.log("All items match!");
               }
               //There are two items that match 
               else if(slotMachineImage1 == slotMachineImage2 || slotMachineImage1 == slotMachineImage3 || 
               	slotMachineImage2 == slotMachineImage3) {
               		console.log("Two items match!");
               }

				betAmount = $("#bet-amount").val();
				winnings = +winnings + +betAmount;
				localStorage.setItem("total_winnings", betAmount);
				$("#totalWinnings").html(`Total Winnings: ${winnings}`);
		}



		})//ready
	