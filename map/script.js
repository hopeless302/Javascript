//Map can Return a completely new array

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]


//In fact map can take up to 3 parameters

const arr = [10, 20, 30, 40];

const result = arr.map((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Full Array: ${array}`);
  return element * 2;
});

console.log(result);  // [20, 40, 60, 80]
