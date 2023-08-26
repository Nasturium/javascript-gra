 
function playGame (){

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  }
 
  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}
 
function displayResult(argComputerMove, argPlayerMove) {
  clearMessages();
 
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
 
  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
    printMessage("REMIS");
  } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
    printMessage("Przegrałeś!");
  } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
    printMessage("Przegrałeś!");
  } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
    printMessage("REMIS");
  } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
    printMessage("Przegrałeś!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
    printMessage("REMIS!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
    printMessage("Ty wygrywasz!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
    printMessage("Przegrałeś!");
  } else if (argComputerMove == "kamień" && argPlayerMove == "nieznany ruch") {
    printMessage("nie wiem co robić! - wpisz 1, 2 lub 3");
  } else if (argComputerMove == "papier" && argPlayerMove == "nieznany ruch") {
    printMessage("nie wiem co robić! - wpisz 1, 2 lub 3");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "nieznany ruch") {
    printMessage("nie wiem co robić! - wpisz 1, 2 lub 3");
  }
}
 
function buttonClicked(moveId) {
  let playerMoveName = getMoveName(moveId);
 
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMoveName = getMoveName(randomNumber);
 
  displayResult(playerMoveName, computerMoveName);
}
 
let kamień = document.getElementById("kamień");
let papier = document.getElementById("papier");
let nożyce = document.getElementById("nożyce");
 
kamień.addEventListener("click", function () {
  buttonClicked(1);
});
papier.addEventListener("click", function () {
  buttonClicked(2);
});
nożyce.addEventListener("click", function () {
  buttonClicked(3);
});
}
playGame();