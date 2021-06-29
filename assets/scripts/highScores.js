var highScore = document.getElementById("highScore");
var clearScores = document.getElementById("clearScores");
var goBack = document.getElementById("goBack");

clearScores.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
