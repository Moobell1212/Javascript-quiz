var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");

startButton.addEventListener("click", function(event) {
    startScreen.style.display = "none";
    questions.style.visibility = "visible";

})

