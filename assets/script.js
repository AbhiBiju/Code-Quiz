var body = document.body;
// Create Array of Q&A Objects
var questionsList = [
  {
    question: "What is the correct HTML for referring to an external style sheet?",
    ans1: "<stylesheet>mystyle.css</stylesheet>",
    ans2: '<style src="mystyle.css">',
    rightAns: '<linkrel="stylesheet" type="text/css" href="mystyle.css">',
    ans3: "<styles src=./assets/css/style.css>",
  },
  {
    question: "Which is the correct CSS syntax?",
    ans1: "{body;color:black;} ",
    ans2: "body:color=black;",
    ans3: "{body:color=black;}",
    rightAns: "body {color: black;}",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    ans1: "h1 * {background-color:#FFFFFF;}",
    ans2: ".h1 {background-color:#FFFFFF;}",
    rightAns: "h1 {background-color:#FFFFFF;}",
    ans3: "h1.all {background-color:#FFFFFF;}",
  },
  {
    question: "Which CSS property controls the text size?",
    ans1: "text-size",
    rightAns: "font-size",
    ans2: "size",
    ans3: "font-weight",
  },
  {
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    ans1: '<p style="text-size:bold;">',
    ans2: '<p style="font-size:bold;">',
    ans3: "p {text-size:bold;}",
    rightAns: "p {font-size:bold;}",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    ans1: "a {text-decoration:no-underline;}",
    rightAns: "a {text-decoration:none;}",
    ans2: "a {underline:none;}",
    ans3: "a {decoration:no-underline;}",
  },
];
// Create count variable
var count = 60;
var getCount = document.getElementById("counter");
console.log(count);
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
}
// Function for timeOut & penalize time if wrong

// Function to edit questions

// Function to evaluate answers

// Show correct/wrong text

// Function to add & editHighScores

// Main Function
var start = document.getElementById("startBtn");

start.addEventListener("click", function () {
  countDown();
});

console.log(questionsList[0].question);
console.log(questionsList[1].question);
console.log(questionsList[2].question);
