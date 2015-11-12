<?php
	$score = 0;
	$result = "";
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if ($_POST["question1"] == "1") {
			$score = $score + 1;
		}
		if ($_POST["question2"] == "3") {
			$score = $score + 1;
		}
		if ($_POST["question3"] == "2") {
			$score = $score + 1;
		}
		if ($_POST["question4"] == "1") {
			$score = $score + 1;
		}
		if ($_POST["question5"] == "3") {
			$score = $score + 1;
		}
		
		if ($score == "0") {
			$result = "You got 0.";
		} else if ($score == "1") {
			$result = "You got 1.";
		} else if ($score == "2") {
			$result = "You got 2.";
		} else if ($score == "3") {
			$result = "You got 3.";
		} else if ($score == "4") {
			$result = "you got 4!";
		} else if ($score == "5") {
			$result = "You got 5!";
		}
	}
?>

<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Solar System</title>
	</head>
	<body>
		<h1>TEST</h1>
		<p><?php echo $result;?></p>
		<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			<fieldset>
				<h4>Question 1: How many planets are in the solar system?</h4>
				<label for="q1a1">9</label>
				<input name="question1" id="q1a1" value="1" checked type="radio"></br>
				<label for="q1a2">10</label>
				<input name="question1" id="q1a2" value="2" type="radio"></br>
				<label for="q1a3">4</label>
				<input name="question1" id="q1a3" value="3" type="radio"></br>
				<label for="q1a4">8</label>
				<input name="question1" id="q1a4" value="4" type="radio">
			</fieldset>
			<fieldset>
				<h4>Question 2: How many stars are in the solar system?</h4>
				<label for="q2a1">0</label>
				<input name="question2" id="q2a1" value="1" checked type="radio"></br>
				<label for="q2a2">2</label>
				<input name="question2" id="q2a2" value="2" type="radio"></br>
				<label for="q2a3">1</label>
				<input name="question2" id="q2a3" value="3" type="radio"></br>
				<label for="q2a4">9</label>
				<input name="question2" id="q2a4" value="4" type="radio">
			</fieldset>
			<fieldset>
				<h4>Question 3: Which planet has 62 moons in its orbit?</h4>
				<label for="q3a1">Earth.</label>
				<input name="question3" id="q3a1" value="1" checked type="radio"></br>
				<label for="q3a2">Saturn.</label>
				<input name="question3" id="q3a2" value="2" type="radio"></br>
				<label for="q3a3">Uranus.</label>
				<input name="question3" id="q3a3" value="3" type="radio"></br>
				<label for="q3a4">Pluto.</label>
				<input name="question3" id="q3a4" value="4" type="radio">
			</fieldset>
			<fieldset>
				<h4>Question 4: Which planet is a jocian planet?</h4>
				<label for="q4a1">Jupiter.</label>
				<input name="question4" id="q4a1" value="1" checked="" type="radio"></br>
				<label for="q4a2">Mercury.</label>
				<input name="question4" id="q4a2" value="2" type="radio"></br>
				<label for="q4a3">Earth.</label>
				<input name="question4" id="q4a3" value="3" type="radio"></br>
				<label for="q4a4">Venus.</label>
				<input name="question4" id="q4a4" value="4" type="radio">
			</fieldset>
			<fieldset>
				<h4>Question 5: What is the Kuiper belt?</h4>
				<label for="q5a1">Where Mr Squiggle lives.</label>
				<input name="question5" id="q5a1" value="1" checked type="radio"></br>
				<label for="q5a2">The path of an asteroid named Kuiper.</label>
				<input name="question5" id="q5a2" value="2" type="radio"></br>
				<label for="q5a3">A series of Pluto-like dwarf planets.</label>
				<input name="question5" id="q5a3" value="3" type="radio"></br>
				<label for="q5a4">The name of Saturn's rings.</label>
				<input name="question5" id="q5a4" value="4" type="radio">
			</fieldset>
			<input type="submit" value="Submit answers">
		</form>
	</body>
</html>