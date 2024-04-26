function Person(name, age) { // Constructor function
    this.name = name; // Instance properties
    this.age = age;
}

const person = new Person('John', 30);  // New keyword creates a new instance of the Person object
                                        //without the new keyword, the function will return undefined
                                        //And the properties will be added to the global object
                                        //In this case, the global object is the window object
                                        //window.name = 'John'; window.age = 30;
                                        //Try it by removing the new keyword and see the result
                                        //In chrome console, type window.name and window.age
                                        //you will get the real answerif you remove the new keyword

console.log(person.name); // John


//In JavaScript, an "instance" refers to an object created from a constructor function using the new keyword