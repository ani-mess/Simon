// let op1=Number(window.prompt("Enter the first number:"));
// let op2=Number(window.prompt("Enter the second number:"));
// let operation=window.prompt("Enter the arithmetic operator:");
// switch(operation){
//     case '+': 
//             console.log(op1+op2);
//             alert(op1+op2);
//             break;
//     case '-': 
//             alert(op1-op2);
//                 console.log(sub);
//                 break;
//     case '*': let pro=op1*op2;
//                 console.log(pro);
//                 break;
//     case '/': let quo=op1/op2;
//                 console.log(quo);
//                 break;
// }


// Function exceution
// function addition(a,b)
// {
//     console.log(a+b);
//     alert(a+b);
            
// }
// let a=Number(window.prompt("Enter the first number:"));
// let b=Number(window.prompt("Enter the second number:"));
// let c=addition(a,b);

// Function in javascript
// Named function
function Myfunction(){
    console.log("Hello World");
}
Myfunction();

// anonamous function
const add=function(a,b){
    console.log(a+b);
}
add(5,7);

// Arrow function
const sub=(a,b) =>{console.log(a-b)};

// IIFE
(function(){
    console.log("Hello Team");
})();
