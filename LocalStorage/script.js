localStorage.setItem('name', 'John');
const name = localStorage.getItem('name');
console.log(name);

//Local storage can store date in form of string only. So, if we want to store an object, we need to convert it to string first.
// JSON.stringify() is used to convert object to string.
//And JSON.parse() is used to convert string to object. 

const person = {
    name: 'John',
    age: 30
};
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = JSON.parse(localStorage.getItem('person'));
console.log(storedPerson);