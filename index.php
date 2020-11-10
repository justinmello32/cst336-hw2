<html>
<head>
	<meta charset="utf-8">
	<title>Slot Machine</title>
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="css/styles.css" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="js/scripts.js"></script>
	<script src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js" ></script> 
</head>
<body class="text-center">

	<h1 class="jumbotron">Casino Slot Machine</h1>

	<div class="container">

		<!--First row of instructions panel and slot machine-->
		<div class="row">
			<div class="col-6">
				<div class="card">
				  <div class="card-header">
				    Instructions
				  </div>
				  <div class="card-body">
				    <p class="card-text">Please enter in your bet in the textbox to the right and then press spin!</p>
				    <p class="card-text"><strong>Payouts listed below according to results:</strong>
				    	<ul>
				    		<li>One of each icon results in a loss.</li>
				    		<li>2 of any icon results in x2 your bet amount.</li>
			    			<li>3 of one icon results in x5 your bet amount.</li>
				    	</ul>
				  </div>
				</div>
			</div>
			<div class="col-6">
				<div class="row">
					<div class="col">
						<img src="img/0.png" class="img-fluid" id="position1">
					</div>
					<div class="col">
						<img src="img/1.png" class="img-fluid" id="position2">
					</div>				
					<div class="col">
						<img src="img/2.png" class="img-fluid" id="position3">
					</div>
				</div>
				<div id="bet-area">
					<input type="number" id="bet-amount" class="form-control" placeholder="Enter in bet amount">
					<button id="spin-button" class="btn btn-primary">Spin!</button>
				</div>
		</div>
		</div>


		<!--Second row for results and messages -->
		<div id="results"></div>
		<div id="totalWinnings"></div>
	</div>
		<!--Footer and end of application -->
		<footer>
			<p>Casino Slot Game - CST336 HW2. Created by Justin Mello
			<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
		</footer>

</body>
</html>