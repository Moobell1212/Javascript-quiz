var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var submitInitials = document.querySelector("#submit");

// function added to start the quiz when the start button is clicked.
startButton.addEventListener("click", function () {
    startScreen.style.display = "none";
    console.log(questions);
    questions.classList.remove("hide");
    // questions.style.backgroundColor = "red";
    runQuiz();
    timer();
});

function runQuiz() {
    console.log(questions);
    createQuestion()
};

function timer() {

    
}


var Q = 0;
var score = 0;

function createQuestion() {
    answerChoices.innerHTML = "";
    questionTitle.textContent = questionsArr[Q].text
    questionsArr[Q].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice;
        button.onclick = function () {
            console.log(choice);
            if (choice === questionsArr[Q].correctAnswer) {
                console.log("Correct");
                score++;
            }
            else {
                console.log("Incorrect");
                score--;
            }
            Q++;
            if (Q === questionsArr.length) {
                console.log("endgame")
                allDone()
            }
            else {
                createQuestion();
            }
        }
        answerChoices.appendChild(button);
    })
};

function allDone() {
    questions.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = score;
};

submitInitials.addEventListener("click", function () {
    var userInitials = document.querySelector("#initials").value;
    localStorage.setItem("UserInitials", userInitials);
    // add link to highscores page???
}
);
