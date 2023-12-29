//Conditional: Switch Statements

//syntax

switch(Math.floor(Math.random()*5 +1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log(4);
} 

let player1 = "Rock";
let computer = "Rock";

switch(player1){

    case "Rock":
        
        switch(computer){
            case "Rock":console.log("Tie");break;
            case "Paper":console.log("Computer wins");break;
            case "Scissor":console.log("Player1 wins");break;
        }break;
        
    case "Paper": 
        
        switch(computer){
            case "Rock":console.log("Player1 wins");break;
            case "Paper":console.log("Tie");break;
            case "Scissor":console.log("Computer wins");break;
        }break;

    case "Scissor": 
    
        switch(computer){
            case "Rock":console.log("Computer wins");break;
            case "Paper":console.log("Player1 wins");break;
            case "Scissor":console.log("Tie");break;
    }break;
}