//The super() keyword is used to call the constructor of the parent class.
class Parent {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Child extends Parent {
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }
}

const child = new Child('John', 25, 'Developer');

console.log(child); // Child { name: 'John', age: 25, job: 'Developer' }