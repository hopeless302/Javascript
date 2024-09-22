let sum = (a, b) => a + b;

let multiply = (a, b) => a * b;

let SumOfSumAndMultiply = (a, b, Total) => {
    let result = Total(a, b);
    return result;
}

console.log(SumOfSumAndMultiply(2, 3, multiply)); // 13

//The multiply function is passed as an argument to the SumOfSumAndMultiply function as Total.
