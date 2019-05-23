var humanScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  document.getElementById('status').innerHTML + humanPlay + computerPlay;
  
  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML;
      computerScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML;
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML;
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML;
      computerScore++;
    }  
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML;
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML;
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML;
    }  
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}