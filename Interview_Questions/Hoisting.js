noraml();                               //This is called hoisting calling function before declaration
function noraml () {
    console.log('Normal function called'); 
}


//Javascript can only hoist declarations not initializatoins 

console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';

console.log(hoist); // Output: The variable has been hoisted.


//For let and const variables, hoisting does not work.

console.log(hoist); // Output: ReferenceError: hoist is not defined
let hoist = 'The variable has been hoisted.';
console.log(hoist); // Output: The variable has been hoisted.


//In var its not only declared but also initialized with undefined


//Hoisting don't work in function expression and class expression