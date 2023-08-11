function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
} /*else if (randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove ='nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput =='2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('REMIS');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Przegrałeś!');
}else if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Przegrałeś!');
} else if( computerMove == 'papier' && playerMove =='papier'){
  printMessage('REMIS');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Przegrałeś!');
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('REMIS!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrałeś!');
} else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('nie wiem co robić! - wpisz 1, 2 lub 3')
} else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('nie wiem co robić! - wpisz 1, 2 lub 3')
}  else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('nie wiem co robić! - wpisz 1, 2 lub 3')
}