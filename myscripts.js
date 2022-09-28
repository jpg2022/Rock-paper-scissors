function playRound(playerSelection, computerSelection){
    var dict = {"rock":0, "paper":1, "scissors":2};
    var playerint, computerint;
    playerint = dict[playerSelection];
    computerint = dict[computerSelection];

    if (playerint == computerint){
        console.log("Its a tie! With both player and computer choosing " + playerSelection + "!");

    }else if((playerint + 1) % 3 == computerint){
        console.log("Computer wins because computer's "  + computerSelection + " beats player's " + playerSelection + "!");
        return 0;
    }else{
        console.log("Player wins because player's " + playerSelection + " beats computer's " + computerSelection + "!");
        return 1;
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
    let computerwins = 0;
    let playerwins = 0;
    for(let i = 0; i < 5; i++){
        const choices = ["rock", "paper", "scissors"];
        let playerSelection = prompt("Enter rock paper or scissors.");
        playerSelection = playerSelection.toLowerCase();
        if(choices.includes(playerSelection) == false){
            console.log("Please enter valid choice.");
        }
        const computerSelection = getComputerChoice();
        let count = playRound(playerSelection, computerSelection);
        if(count == 1){
            playerwins +=1;
        }else if(count == 0){
            computerwins +=1;
        }
        
    }
    if(playerwins > computerwins){
        console.log("Player beat computer with " + playerwins +" wins!");
    }else{
        console.log("Computer beat player with " + computerwins + " wins!");
    }

}

game();

