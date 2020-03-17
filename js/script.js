function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

clearMessages();

function playGame(playerMove){

	function getMoveName(argMoveId){
    if(argMoveId == 1) return 'kamień';
    if(argMoveId == 2) return 'papier';
    if(argMoveId == 3) return 'nożyce';
  }

  function displayResult(argComputerMove, argPlayerMove){

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

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

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
