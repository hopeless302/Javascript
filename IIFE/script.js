(function() {
    var counter = 0; // Local scope, not global
    function incrementCounter() {
        counter++;
        console.log(counter);
    }
    incrementCounter(); // 1
    incrementCounter(); // 2
})();

//The syntax of IIFE is:
(function() {
    // code
})();

//And for arrow functions:
(() => {
    // code
})();
