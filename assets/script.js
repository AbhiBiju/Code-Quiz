var body = document.body;
// Create Array of Q&A Objects
var questionsList = [
  {
    question: "What is the correct HTML for referring to an external style sheet?",
    ans1: "<stylesheet>mystyle.css</stylesheet>",
    ans2: '<style src="mystyle.css">',
    ans3: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    ans4: "<styles src=./assets/css/style.css>",
    rightAns: '<linkrel="stylesheet" type="text/css" href="mystyle.css">',
  },
  {
    question: "Which is the correct CSS syntax?",
    ans1: "{body;color:black;} ",
    ans2: "body:color=black;",
    ans3: "{body:color=black;}",
    ans4: "body {color: black;}",
    rightAns: "body {color: black;}",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    ans1: "h1 * {background-color:#FFFFFF;}",
    ans2: ".h1 {background-color:#FFFFFF;}",
    ans3: "h1 {background-color:#FFFFFF;}",
    ans4: "h1.all {background-color:#FFFFFF;}",
    rightAns: "h1 {background-color:#FFFFFF;}",
  },
  {
    question: "Which CSS property controls the text size?",
    ans1: "text-size",
    ans2: "font-size",
    ans3: "size",
    ans4: "font-weight",
    rightAns: "font-size",
  },
  {
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    ans1: '<p style="text-size:bold;">',
    ans2: '<p style="font-size:bold;">',
    ans3: "p {text-size:bold;}",
    ans4: "p {font-size:bold;}",
    rightAns: "p {font-size:bold;}",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    ans1: "a {text-decoration:no-underline;}",
    ans2: "a {underline:none;}",
    ans3: "a {decoration:no-underline;}",
    ans4: "a {text-decoration:none;}",
    rightAns: "a {text-decoration:none;}",
  }
];
// Create count variable

// Function to countDown timer

// Function for timeOut & penalize time if wrong

// Function to edit questions

// Function to evaluate answers

// Show correct/wrong text

// Function to add & editHighScores

// Main Function

console.log(questionsList[0].question);
console.log(questionsList[1].question);
console.log(questionsList[2].question);
