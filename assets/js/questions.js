var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");

// function added to start the quiz when the start button is clicked.
startButton.addEventListener("click", function(event) {
    startScreen.style.display = "none";
    questions.style.visibility = "visible";

})

var questionTitle = ["Javascrilpt is a _____-side programming language",
"Which of the following keywords is not used to define a variable in Javascript?", 
"JavaScript is the same as Java",
"Which of the following methods can be used to display data in some form using Javascript?",
"Which of the below are datatypes used in Javascript?",
"Which of the following is not a Javascript framework?",
"How do we write a comment in javascript?",
"What ",
"Upon encountering empty statements, what does the Javascript Interpreter do?",
"Which of the following function of String object combines the text of two strings and returns a new string?",
]

console.log(questionTitle);

var choices = [
    ["Server", "Client", "both", "Neither"],
    ["var", "const", "let", "obj"],
    ["True", "False"],
    ["console.log()", "document.wrtie()", "window.write()", "page.log()"],
    ["string, number, boolean, object", "number, function, object, maps", "boolean, object, array, input", "object, number, time, boolean"],
    ["React", "Vue", "Cassandra", "Node"],
    ["//", "%", "#", "--"],
    ["Nan", "B", "C", "D"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"]
]

console.log(choices)
