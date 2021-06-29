var highScore = document.querySelector("#highScore");
var clearScores = document.querySelector("#clearScores");
var goBack = document.querySelector("#goBack");

clearScores.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
