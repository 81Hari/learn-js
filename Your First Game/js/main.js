// Your First Interactive Game

let playGame = confirm("Shall we play Rock, Paper, or Scissor?");

if(playGame){
    let playerChoice = prompt("Please enter Rock, Paper, or Scissor ");
    if(playerChoice){
        let player1 = playerChoice.trim().toLowerCase();

        if(player1 === "rock" || player1 === "paper" || player1 === "scissor"){

            let computerChoice = Math.floor(Math.random()*3 + 1);

            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissor";
            let result;
            if(computer === player1){
                result = "Tie";
            } else if(computer === "rock"){
                if(player1 === "scissor"){
                    result = "Computer wins";
                }else{
                    result = "Player1 wins";
                }
            }else if(computer === "scissor"){
                if(player1 === "paper"){
                    result = "Computer wins";
                }
                else{
                    result = "Player1 wins";
                }
            }else if(computer === "paper"){
                if(player1 === "rock"){
                    result = "Computer wins";
                }
                else{
                    result = "Player1 wins";
                }
            }
            alert(`Computer : ${computer}\nPlayer1 : ${player1}\n ${result}`);
            let playAgain = confirm("Do you want to play again");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");
        }
    }
    else{
        alert("I guess you changed your mind.Maybe next time.");
    }

} else {
    alert("Ok, maybe next time.");
}