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
    answer: '<linkrel="stylesheet" type="text/css" href="mystyle.css">',
  },
  {
    question: "Which is the correct CSS syntax?",
    choices: ["{body;color:black;} ", "body:color=black;", "{body:color=black;}", "body {color: black;}"],
    answer: "body {color: black;}",
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    choices: [
      "h1 * {background-color:#FFFFFF;}",
      ".h1 {background-color:#FFFFFF;}",
      "h1 {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    answer: "h1 {background-color:#FFFFFF;}",
  },
  {
    question: "Which CSS property controls the text size?",
    choices: ["text-size", "font-size", "size", "font-weight"],
    answer: "font-size",
  },
  {
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    choices: [
      '<p style="text-size:bold;">',
      '<p style="font-size:bold;">',
      "p {text-size:bold;}",
      "p {font-size:bold;}",
    ],
    answer: "p {font-size:bold;}",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    choices: [
      "a {text-decoration:no-underline;}",
      "a {underline:none;}",
      "a {decoration:no-underline;}",
      "a {text-decoration:none;}",
    ],
    answer: "a {text-decoration:none;}",
  },
];

// Create Variables
var count = 60;
var penalty = 5;
var score = 0;
var questionsListIndex = 0;

var getCount = document.getElementById("counter");
var getDiv = document.getElementById("questionsBin");
var choiceList = document.getElementById("choicesUl");
var newDiv = document.createElement("div");

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
function makeQuestions() {
  // Reset Previous HTML
  questionsDiv.innerHTML = "";
  choiceList.innerHTML = "";

  for (questionObj in questionsList) {
    var currentQuestion = questionsList[questionsListIndex].question;
    var currentChoices = questionsList[questionsListIndex].choices;
    // Set Current Question
    getDiv.textContent = currentQuestion;
  }

  // Set Answer Choices from ChoiceList
  currentChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");

    listItem.textContent = newItem;

    questionsDiv.appendChild(choiceList);
    choiceList.appendChild(listItem);
    listItem.addEventListener("click", evaluate());
  });
}

// Function to evaluate answers
function evaluate(event) {
  var choice = event.target;

  if (choice.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // Correct condition
    if (choice.textContent == questions[questionsListIndex].answer) {
      score++;
      createDiv.textContent = "Correct! The answer is:  " + questionsList[questionsListIndex].answer;
    }
    // Incorrect condition
    else {
      // Will deduct -5 seconds off count for wrong answers
      count = count - penalty;
      createDiv.textContent = "Wrong! The correct answer is:  " + questionsList[questionsListIndex].answer;
    }
  }

  // Move to Next Question Object
  questionsListIndex++;

  // Function to determine EndGame
  if (questionsListIndex >= questionsList.length) {
    // All done will append last page with user stats
    allDone();
    createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questionsList.length + " Correct!";
  } else {
    render(questionsListIndex);
  }
  questionsDiv.appendChild(createDiv);
}

// Function to add & editHighScores

// Main Function
