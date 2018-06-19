    function check(){
    
    var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

	var question1Correct = question1.toUpperCase();

	if (question1Correct == "DELHI") {
		correct++;
}
	if (question2 == "Ottawa") {
		correct++;
}	
	if (question3 == "Washington") {
		correct++;
	}
	
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after-submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
    document.getElementById("correct-answer").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
	}
