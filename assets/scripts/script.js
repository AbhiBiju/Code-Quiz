var body = document.body;
// Create Array of Q&A Objects
var questionsList = [
  {
    question: "What is the correct HTML for referring to an external style sheet?",
    choices: [
      "<stylesheet>mystyle.css</stylesheet>",
      '<style src="mystyle.css">',
      '<link rel="stylesheet" type="text/css" href="mystyle.css">',
      "<styles src=./assets/css/style.css>",
    ],
    rightAns: '<linkrel="stylesheet" type="text/css" href="mystyle.css">',
  },
  {
    question: "Which is the correct CSS syntax?",
    choices: ["{body;color:black;} ", "body:color=black;", "{body:color=black;}", "body {color: black;}"],
    rightAns: "body {color: black;}",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    choices: [
      "h1 * {background-color:#FFFFFF;}",
      ".h1 {background-color:#FFFFFF;}",
      "h1 {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    rightAns: "h1 {background-color:#FFFFFF;}",
  },
  {
    question: "Which CSS property controls the text size?",
    choices: ["text-size", "font-size", "size", "font-weight"],
    rightAns: "font-size",
  },
  {
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    choices: [
      '<p style="text-size:bold;">',
      '<p style="font-size:bold;">',
      "p {text-size:bold;}",
      "p {font-size:bold;}",
    ],
    rightAns: "p {font-size:bold;}",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    choices: [
      "a {text-decoration:no-underline;}",
      "a {underline:none;}",
      "a {decoration:no-underline;}",
      "a {text-decoration:none;}",
    ],
    rightAns: "a {text-decoration:none;}",
  },
];

// Create count variable
var count = 60;
var getCount = document.getElementById("counter");
// Function to countDown timer
function countDown() {
  var interval = setInterval(function () {
    getCount.innerHTML = count;
    count--;
    if (count === 0) {
      clearInterval(interval);
      alert("You're out of time!");
    }
  }, 1000);
  makeQuestions(questionsListIndex);
}

// Function to edit questions
var getDiv = document.getElementById("questionsBin");
var getUl = document.getElementById("choicesUl");
var newDiv = document.createElement("div");
var choiceList = document.getElementById("choicesUl");

function makeQuestions() {
  questionsDiv.innerHTML = "";
  choiceList.innerHTML = "";
  for (questionObj in questionsList) {
    var currentQuestion = questionsList[questionsListIndex].question;
    var currentChoices = questionsList[questionsListIndex].choices;
    getDiv.textContent = currentQuestion;

    currentChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");

      listItem.textContent = newItem;

      questionsDiv.appendChild(choiceList);
      choiceList.appendChild(listItem);
      listItem.addEventListener("click", compare);
    });
  }
}

// Function to evaluate answers

// Show correct/wrong text

// Function to add & editHighScores

// Main Function
var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function quizzer() {
  countDown();
});

console.log(questionsList[0].question);
console.log(questionsList[1].question);
console.log(questionsList[2].question);
