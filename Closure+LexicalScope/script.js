function clo () {
    let name = 'Alice';
    function talk() {
        console.log(`Hi, my name is ${name}`);
    }
    return talk;
}

const sayHi = clo();
sayHi(); // Output: Hi, my name is Alice

function greet() {
    let name = 'Bob';
    function sayHello() {
        console.log(`Hello, my name is ${name}`);
    }
    sayHello();
}

const sayHello = greet();
console.log(sayHello);// Output: Hello, my name is Bob

const outerVar = 2;

function outerFunction(a) {
    return (a+outerVar)
}

console.log(outerFunction(1)); // Output: 3

for(let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Output: 3 3 3
    }, 1000);
}