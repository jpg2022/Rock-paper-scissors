function playRound(playerSelection, computerSelection){
    var dict = {"rock":0, "paper":1, "scissors":2};
    var playerint, computerint;
    dict[playerSelection] = playerint;
    dict[computerSelection]= computerint;  

    if (playerint == computerint){
        console.log("Its a tie! With both player and computer choosing " && playerSelection && "!");

    }elseif((playerint + 1) % 3 == computerint){
        console.log("Computer wins because computer's "  && computerSelection && " beats player's " && playerSelection && "!");
    }else {

        console.log("Player wins because player's " && playerSelection && " beats computer's " && computerSelection && "!");
    }


}

function getComputerChoice(){
    const choices1 = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * 3);
    let compchoice = choices1.at(computer);
    return compchoice;
}

const choices = ["rock", "paper", "scissors"];
let player = prompt("Enter rock paper or scissors.");
player = player.toLowerCase();
if(choices.includes(player) == false){
    console.log("Please enter valid choice.");
}


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));