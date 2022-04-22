
const moves = ['rock', 'paper', 'scissors'];

function computerPlay(moves){
    let i = Math.floor(Math.random() * 3);
    return moves[i];
};

function playRound(playerInput){

    const computerSelection = computerPlay(moves);
    const playerSelection = playerInput;

    console.log(computerSelection, playerSelection)

    if (playerSelection == computerSelection){
        return `Draw! Both chose ${computerSelection}.`;
    };
    let result = checkWin(playerSelection, computerSelection);
    if(result){
        return `Win! ${playerSelection} beats ${computerSelection}.`;
    } else{
        return `Loss! ${computerSelection} beats ${playerSelection}.`;
    }

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



function getUserMove(){
    const input = prompt("Enter rock, paper or scissors");
    if(!moves.includes(input.toLowerCase())){
        getUserMove();
    }else{
        return input.toLowerCase();
    };
};

function game(){

}

