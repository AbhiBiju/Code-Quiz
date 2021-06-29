var highScore = document.getElementById("highScore");
var clearScores = document.getElementById("clearScores");
var goBack = document.getElementById("goBack");

// Clear Score Event Listener and Function
clearScores.addEventListener("click", function () {
  // Clear Local Storage
  localStorage.clear();
  // Reload Page
  location.reload();
});

// Retreives Local Storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
  for (score of allScores) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[score].initials + " " + allScores[score].score;
    highScore.appendChild(createLi);
  }
}
// Event listener to move back to index page
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
