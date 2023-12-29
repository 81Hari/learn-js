// Conditionals: If Statements

// Syntax

/*
// Example 1:
let soup1 = "Chicken Noodle Soup";
let soup2;
let reply;

if(soup1){
    reply = `Heres your order of ${soup1}`;
}
else{
    reply = "we're out of soup";
}
console.log(reply);
*/
/*
// Example 2
let testScore = 89;
let grade;

if(testScore >= 90){
    grade ="A";
} else if(testScore >= 80){
    grade ="B";
} else if(testScore >= 70){
    grade ="C";
} else if(testScore >= 60){
    grade ="D";
} else if(testScore >= 50){
    grade ="E";
} else{
    grade ="F";
}

console.log(grade); 
*/

// Example 3

let player1 = "Paper";
let computer = "Scissor";

if(computer === player1){
    console.log("Tie");
} else if(computer === "Rock"){
    if(player1 === "Scissor"){
        console.log("Computer wins" );
    }else{
        console.log("Player1 wins");
    }
}else if(computer === "Scissor"){
    if(player1 === "Paper"){
        console.log("Computer wins" );
    }
    else{
        console.log("Player1 wins");
    }
}else if(computer === "Paper"){
    if(player1 === "Rock"){
        console.log("Computer wins" );
    }
    else{
        console.log("Player1 wins");
    }
}


