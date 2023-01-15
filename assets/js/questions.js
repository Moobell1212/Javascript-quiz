var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");

// function added to start the quiz when the start button is clicked.
startButton.addEventListener("click", function(event) {
    startScreen.style.display = "none";
    questions.style.visibility = "visible";

})

var questionTitle = ["Which of the following keywords is used to define a variable in Javascript?", 
"Which of the following methods can be used to display data in some form using Javascript?",
"What types of data are used in Javascript?",
"Which of the below is a type of object used in Javascript?",
"Which of the below are ways to state objects in Javasctipt?",
"Which of the following is not a Javascript framework?",
"How do we write a comment in javascript?",
"Which built-in method returns the calling string value converted to lower case?",
"Which of the following function of String object combines the text of two strings and returns a new string?",
"Upon encountering empty statements, what does the Javascript Interpreter do?",
]

console.log(questionTitle);

// types of data:
// string
// number
// boolean
// object
// function

// types of objects:

// Object
// Date
// Array
// String
// Number
// Boolean

// Node
// Vue
// React
// Cassandra