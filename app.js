/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let roundScore, globalScore, activePlayer, gaming;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {

 if (gaming) {
  let dice_no = Math.floor((Math.random() * 6) + 1);
  
  var diceDOM= document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src = 'dice-' + dice_no + '.png';
  
  if (dice_no !== 1) {
   roundScore = roundScore + dice_no;
   document.getElementById('current-' + activePlayer).textContent = roundScore;
 
  } else {
   
   nextPlayer();
  }
 }
});


function nextPlayer() {


 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 roundScore = 0;
 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
 document.getElementById('current-0').textContent = 0;
 document.getElementById('current-1').textContent = 0;

}

document.querySelector('.btn-hold').addEventListener('click', function () {

 if (gaming) {
  let globalScore_activePlayer = globalScore[activePlayer] + roundScore;
  console.log(globalScore);
  document.getElementById('score-' + activePlayer).textContent = globalScore_activePlayer;
  if (globalScore_activePlayer >= 10) {
  document.querySelector('.dice').style.display='none';
   document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   gaming = false;
  } else {
 
   nextPlayer();
  }
 }
});


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
 roundScore= 0;
 globalScore = [0,0];
 activePlayer = 0;
 gaming = true;
 document.querySelector('#score-0').textContent = 0;
 document.querySelector('#score-1').textContent = 0;
 document.querySelector('#current-0').textContent = 0;
 document.querySelector('#current-1').textContent = 0;
 document.querySelector('#name-0').textContent = 'Player 1';
 document.querySelector('#name-1').textContent = 'Player 2'
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.add('active');

 };