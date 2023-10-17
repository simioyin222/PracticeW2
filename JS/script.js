// Ask the user a question and check the answer
function askQuestion() {
  const question =
    "What is the capital of France?\na) Paris\nb) London\nc) Berlin\nd) Rome";
  const userAnswer = prompt(question).toUpperCase(); // Convert user input to uppercase

  if (userAnswer === "A") {
    alert("Correct! Paris is the capital of France.");
  } else {
    alert("Incorrect. The correct answer is Paris.");
  }
}

// Main function to run the quiz
function runQuiz() {
  askQuestion();

  // Ask if the user wants to try another question
  const playAgain = confirm("Do you want to try another question?");
  if (playAgain) {
    runQuiz(); // Recursively call runQuiz function for another question
  } else {
    alert("Thanks for playing!"); // End the quiz if the user chooses not to play again
  }
}

// Start the quiz when the page loads
window.onload = runQuiz;
