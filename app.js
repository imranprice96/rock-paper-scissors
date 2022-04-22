
const moves = ['rock', 'paper', 'scissors'];
let count = 0;
let playerScore = 0;
let computerScore = 0;

function computerPlay(moves){
    let i = Math.floor(Math.random() * 3);
    return moves[i];
};

function playRound(playerInput){
    const computerSelection = computerPlay(moves);
    const playerSelection = playerInput;

    updateScore(playerSelection,computerSelection);
    const s = document.querySelector('#score-screen');
    s.addEventListener('change', checkEnd());
    count++;
};

function checkWin(playerSelection, computerSelection){
    let result = false;
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        result = true;
    };
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        result = true;
    };
    if(playerSelection == 'scissors' && computerSelection == 'paper'){
        result = true;
    };
    return result;
}

function checkEnd(){
    if(count >= 5) endGame(playerScore,computerScore);
}


function getUserMove(){
    const input = prompt("Enter rock, paper or scissors");
    if(!moves.includes(input.toLowerCase())){
        getUserMove();
    }else{
        return input.toLowerCase();
    };
};

function updateScore(playerSelection, computerSelection){

    let resultString;
    let result = checkWin(playerSelection, computerSelection);
    if (playerSelection == computerSelection){
        resultString =  `Draw! Both chose ${computerSelection}.`;
    }else if(result){
        resultString = `Win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else{
        resultString = `Loss! ${computerSelection} beats ${playerSelection}.`;
        computerScore ++;
    };

    //console.log(score)
    const scoreScreen = document.querySelector('#score-screen');
    const p = document.createElement('p');
    p.classList.add('p');
    p.textContent = resultString;
    scoreScreen.appendChild(p);
};

function endGame(playerScore, computerScore){
    let ending;
    if(playerScore == computerScore){
        ending = `Draw!\nYou: ${playerScore}\nComputer: ${computerScore}`;
    };
    if(playerScore > computerScore){
        ending = `Winner!\nYou: ${playerScore}\nComputer: ${computerScore}`;
    };
    if(playerScore < computerScore){
        ending = `You Lose!\nYou: ${playerScore}\nComputer: ${computerScore}`;
    };
    alert(ending);
    document.getElementById('score-screen').innerHTML = '';
    playerScore = 0;
    computerScore = 0;
    count = 0;
};

