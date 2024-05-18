// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating objects using the constructor
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Accessing properties of objects
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: 25


function createcircle(radius) {
    return {
        radius,
        draw: function () {
            console.tog('draw');
        }
    };
}

const circle = createcircl(1);
circle.draw();