var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelector("#choices");

// function added to start the quiz when the start button is clicked.
startButton.addEventListener("click", function (event) {
    startScreen.style.display = "none";
    console.log(questions);
    questions.classList.remove("hide");
    // questions.style.backgroundColor = "red";
    runQuiz();
})

var Q = 0;

function createQuestion() {
    answerChoices.innerHTML = "";
    questionTitle.textContent = questionsArr[Q].text
    questionsArr[Q].choices.forEach(function(choice){
        var button = document.createElement("button");
        button.textContent = choice;
        button.onclick = function () {
            console.log(choice);
            if (choice === questionsArr[Q].correctAnswer){
                console.log("correct");
            }
            else {
                console.log("Incorrect");
            }
            Q++;
            if (Q === questionsArr.length){
                console.log("endgame")
            }
            else {
            createQuestion();
            }
        }
        answerChoices.appendChild(button);
    })
}

function runQuiz() {
    console.log(questions);
    createQuestion()
}