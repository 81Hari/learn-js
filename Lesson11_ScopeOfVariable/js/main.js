// var, let, and const

/*
1, var is a legacy code (old code)
2. it is not recommended
*/

// Why var is not recommended ?

// var x = 1;
// var x = 2;

// console.log(x);

// // Because when programmer redclare the variable it won't throws the error

// // To over above problem

// let y =1;
// y =2;
// console.log(y)

// // to declare a const
// const z =1;

// ----------------------------------------

//Scope of variable

//var --> function scoped
//let,const --> block scoped

let x =1;
let y =2;
let z =3;

console.log(`Global: ${x}`);
console.log(`Global: ${y}`);
console.log(`Global: ${z}`);

const functionName = ()=>{
    let x =10    

    {
        var y = 20; 
        const z =30;

        console.log(`Block: ${x}`);
        console.log(`Block: ${y}`);
        console.log(`Block: ${z}`);
    }
    console.log(`Function: ${x}`);
    console.log(`Function: ${y}`);
    console.log(`Function: ${z}`);

}

functionName();