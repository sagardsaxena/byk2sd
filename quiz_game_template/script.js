class Question {
    constructor(questionText, correctAnswer, answerOptions, imageFilename) {
      this.questionText = questionText;
      this.correctAnswer = correctAnswer;
      this.answerOptions = answerOptions;
      this.imageFilename = imageFilename;
    }
}

var questionNumber = -1 // Which question are we on?
var playerScore = 0  // What is the player's current score?
var selectedAnswer = "" // Which answer choice did the player choose?
var selectedAnswerButton = null // Which answer choice button did the player select?

const questions = [
    // Question 0
    new Question(
        questionText="Who was the first president of the US?",
        correctAnswer= "George Washington",
        answerOptions=["1", "2", "George Washington", "4"],
        imageFilename="https://npf-prod.imgix.net/uploads/bigstock-Mount-Rushmore-National-Memori-52256071.jpg"
    ),
    // Question 1
    new Question(
        questionText="Who was the second president of the US?",
        correctAnswer= "John Adams",
        answerOptions=["1", "John Adams", "3", "4"],
        imageFilename="https://www.whitehouse.gov/wp-content/uploads/2021/01/02_john_adams.jpg"
    ),
    /* ADD YOUR QUESTIONS HERE */
    /*
    1) Create a new question object
    2) Add the question text, correct answer, answer options, and image filename
    3) Repeat until you have as many questions as you want!
    */
]

// What happens when the player clicks "Submit"
function submitAnswer() {
    // Update score

    // Change the question number

    // Render the new question
    magicRender();
}

// What happens when the player selects an answer
function selectAnswer(button_id) {
    // Step 3: If the player previously selected a different answer, change the button's appearance back to normal

    // Step 1: Update selectedAnswer and selectedAnswerButton

    // Step 2: Change the appearance of the newly selected button

}
  
// How we update the score
function updateScore() {
    // Step 3: check that the questionNumber is correct
        
    // Step 2: check that the selected answer is correct

    // Step 1: change the score to add ten points

}
  
/* ------------------ TEMPLATE CODE BELOW, DO NOT MODIFY -------------- */
function magicRender() {
    // Update the score for the current question
    document.getElementById("score").innerHTML = "Score: " + playerScore;
    
    // Save the submit button and change its text
    var submitButton = document.getElementById("submit");
   
    // Unselect the current answer
    if (selectedAnswerButton != null) {
        selectedAnswerButton.disabled = false;
    }

    // Check that the new question number is valid
    if (questionNumber >= 0 && questionNumber < questions.length) {
        // Update variables for the new question

        selectedAnswerButton = null;
        selectedAnswer = "";

        // Select the new question object
        var question = questions[questionNumber];

        // Change the question, image, and options
        document.getElementById("question").innerHTML = question.questionText;
        document.getElementById("image").src = question.imageFilename;
        for (var choiceNumber=1; choiceNumber <= 4; choiceNumber+=1) {
            document.getElementById("choice_" + choiceNumber).innerHTML = question.answerOptions[choiceNumber-1];
        }
        
	submitButton.innerHTML = "Submit Answer";
    } else if (questionNumber == questions.length) {
        // change the text to "Restart Game" when there are no more questions
	submitButton.innerHTML = "Restart Game";
        
	for (var choiceNumber=1; choiceNumber <= 4; choiceNumber+=1) {
            document.getElementById("choice_" + choiceNumber).innerHTML = "-";
        }
    } else if (questionNumber > questions.length) {
	// Restart the game by resetting all the variables
        questionNumber = 0;
        playerScore = 0;
        magicRender();
    } else {
        submitButton.innerHTML = "Start Game!";
    }
}
