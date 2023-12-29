

// let i = 0;

// console.log("While Loop")

// while(i<50){
//     console.log(i);
//     i++;
// }





 //----------------------------------------------------


// console.log("Do While Loop")


// do{
//     console.log(i);
//     i++; 
// }while(i<50);
// // it runs atleast one time




//---------------------------------------------------

// console.log("For Loop")


// for(let j =0;j<=10;j++){
//     console.log(j)
// }




/*
-------------Diffrent ways to construct the loop----------
let j= 0
for(;j<=10;j++){
    console.log(j);
}

for(;j<=10;){
    console.log(j);
    j++
}

//Infinite loop

for(;;){
    break;
}

*/



//---------------------------------------------

// User-Defined Function

//Function Declaration

// Without parameter

// function sum(){
//     return 2+2;
// }

// console.log(sum());

//--------------------------------------------

//With parameter


// function sum(i,j){
//     console.log("num1 = " + i);
//     console.log("num2 = " + j);
//     return i+j;
// }

//  console.log(sum(5,4));
 
//  console.log("What if we pass one parameter but the function needs two parameter");
//  console.log(sum(5));

//----------------------------------------------------------------------

// function getUsernameFromEmail(email){
//     return (email.slice(0,email.indexOf('@')));
// }

// console.log(getUsernameFromEmail(prompt("Email")));

//-------------------------------------------------------------

// Anonymous Function Declaration


// const getUsernameFromEmail = function(email){
//     return (email.slice(0,email.indexOf('@')));
// }

// console.log(getUsernameFromEmail(prompt("Email")));

// ------------------------------------------------------------------

// Arrow Function Declaration (Newer way)


const getUsernameFromEmail = (email)=>{
    return (email.slice(0,email.indexOf('@')));
}

console.log(getUsernameFromEmail(prompt("Email")));



