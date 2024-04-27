function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk: function() {
            console.log(`Hi, my name is ${this.name}`);
        }
    };
    return person;
}