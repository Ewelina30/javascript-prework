function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

clearMessages();

function playGame(three){

	let playerInput = prompt('3: nożyce');

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
	if(argMoveId == 2){
		return 'papier';
	}
	if(argMoveId == 3){
		return 'nożyce';
	}
}

printMessage('Mój ruch to: ' + computerMove);

/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

if(playerInput == '1'){
  playerMove = 'kamień';
}else if(playerInput == '2'){
    playerMove = 'papier';
}else if(playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){

		if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		  return 'Ty wygrywasz!';
		}
		if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		  return 'Ty przegrywasz!';
		}
		if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		  return 'Remis!';
		}
		if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
		  return 'Remis!';
		}
		if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		  return 'Ty wygrywasz!';
		}
		if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		  return 'Ty przegrywasz!';
		}
		if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		  return 'Ty przegrywasz!';
		}
		if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		  return 'Remis';
		}
		if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		  return 'Ty wygrywasz!';
		}
		if(argComputerMove == 'nieznany ruch'){
		   return 'Spróbuj jeszcze raz';
		}
}

	printMessage(displayResult('kamień', 'papier'));

}

document.getElementById('play-rock').addEventListener('click', function(){
		playGame('Kamień został kliknięty');
document.getElementById('play-paper').addEventListener('click', function(){
			playGame('Papier został kliknięty');
document.getElementById('play-scissors').addEventListener('click', function(){
				playGame('Nożyce zostały kliknięte');
