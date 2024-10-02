noraml();                               //This is called hoisting calling function before declaration
function noraml () {
    console.log('Normal function called'); 
}


//Javascript can only hoist declarations not initializatoins 

console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';

console.log(hoist); // Output: The variable has been hoisted.
