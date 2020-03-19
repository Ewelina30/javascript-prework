const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

clearMessages();

const playGame = function(playerMove){

	const getMoveName = function(argMoveId){
    if(argMoveId == 1) return 'kamień';
    if(argMoveId == 2) return 'papier';
    if(argMoveId == 3) return 'nożyce';
  }

  const displayResult = function(argComputerMove, argPlayerMove){

		if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
       (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
       (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		  return 'Ty wygrywasz!';
		}
		else if(argComputerMove == argPlayerMove){
		  return 'Remis!';
		}
		else {
		  return 'Ty przegrywasz!';
		}
}

  const randomNumber = Math.floor(Math.random() * 3 + 1),
 				computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);

	printMessage(displayResult(computerMove, playerMove));

}

document.getElementById('play-rock').addEventListener('click', function() {
		playGame('kamień');
});

document.getElementById('play-paper').addEventListener('click', function() {
		playGame('papier');
});

document.getElementById('play-scissors').addEventListener('click', function() {
		playGame('nożyce');
});
