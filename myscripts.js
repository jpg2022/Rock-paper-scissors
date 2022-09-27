function playRound(playerSelection, computerSelection){
    var dict = {"rock":0, "paper":1, "scissors":2};
    var playerint, computerint;
    playerint = dict[playerSelection];
    computerint = dict[computerSelection];

    if (playerint == computerint){
        console.log("Its a tie! With both player and computer choosing " + playerSelection + "!");

    }else if((playerint + 1) % 3 == computerint){
        console.log("Computer wins because computer's "  + computerSelection + " beats player's " + playerSelection + "!");
    }else{
        console.log("Player wins because player's " + playerSelection + " beats computer's " + computerSelection + "!");
    }


}

function getComputerChoice(){
    const choices1 = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * 3);
    let compchoice = choices1.at(computer);
    console.log("computer int " + computer + " computer chose " + compchoice);
    return compchoice; 
}

function game(){
    var computerwins, playerwins;
    for(let i = 0; i < 5; i++){
        const choices = ["rock", "paper", "scissors"];
        let playerSelection = prompt("Enter rock paper or scissors.");
        playerSelection = playerSelection.toLowerCase();
        if(choices.includes(playerSelection) == false){
            console.log("Please enter valid choice.");
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        
    }

}

