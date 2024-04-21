const student = {
    lastName: 'Doe',
    'name': 'John Doe', //If we use space here like "name of" than we can not able to access it using dot notation
    age: 16
}
console.log(student.lastName); // so this is a normal way to access the object property
console.log(student['name']); //The other way to access the object property is using square brackets
console.log(student['age']);

let valueStudent = Object.values(student); // So this method is important to get the values of the object in array form the advantage of it is that we can use know .map or any other function to this array
console.log(valueStudent);

const students = [{
        name: 'John Doe',
        age: 16
    },
    {
        name: 'Jane Smith',
        age: 17
    },
    {
        name: 'Mike Johnson',
        age: 18
    },
    {
        name: 'Sarah Williams',
        age: 16
    },
    {
        name: 'David Brown',
        age: 17
    }
];

console.log(students[0].age);