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
var starter = document.getElementById("startBtn");

var newDiv = document.createElement("div");

// Function to countDown timer
starter.addEventListener("click", function countDown() {
  var interval = setInterval(function () {
    getCount.innerHTML = count;
    count--;
    if (count === 0) {
      clearInterval(interval);
      alert("You're out of time!");
    }
  }, 1000);
  makeQuestions(questionsListIndex);
});

// Function to edit questions
function makeQuestions(questionsListIndex) {
  // Reset Previous HTML
  getDiv.innerHTML = "";
  choiceList.innerHTML = "";

  for (questionObj of questionsList) {
    var currentQuestion = questionsList[questionsListIndex].question;
    var currentChoices = questionsList[questionsListIndex].choices;
    // Set Current Question
    getDiv.textContent = currentQuestion;
  }

  // Set Answer Choices from ChoiceList
  currentChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");

    listItem.textContent = newItem;

    getDiv.appendChild(choiceList);
    choiceList.appendChild(listItem);
    listItem.addEventListener("click", evaluate);
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
    // endGame will append last page with user stats
    endGame();
    createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questionsList.length + " Correct!";
  } else {
    render(questionsListIndex);
  }
  getDiv.appendChild(createDiv);
}

// EndGame Function to add & editHighScores
function endGame() {
  getDiv.innerHTML = "";
  choiceList.innerHTML = "";

  // Heading:
  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Quiz Over!";

  getDiv.appendChild(createH1);

  // Paragraph
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  getDiv.appendChild(createP);

  // Calculates time remaining and replaces it with score
  if (count >= 0) {
    var timeRemaining = count;
    clearInterval(interval);
    createP.textContent = "Your final score is: " + timeRemaining;

    getDiv.appendChild(createP);
  }

  // Create a Label Tag
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";

  getDiv.appendChild(createLabel);

  // Then Creat an Input Field
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  getDiv.appendChild(createInput);

  // Next Create a Submit Button
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  getDiv.appendChild(createSubmit);

  // Event listener to capture initials and local storage for initials and score
  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {
      alert("Please enter your initials below");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining,
      };
      // Test if working
      console.log(finalScore);

      // Local Storage Setting and Getting
      var allScores = localStorage.getItem("allScores");

      if (allScores === null) {
        allScores = [];
      } else {
        // JSON.parse to turn string to object that can be stored
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);

      // JSON.stringify turns object into string
      var newScore = JSON.stringify(allScores);

      // Set new score to allScores
      localStorage.setItem("allScores", newScore);

      // Travels to final page
      window.location.replace("./HighScores.html");
    }
  });
}
