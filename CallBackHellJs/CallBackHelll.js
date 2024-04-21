h1 = document.querySelector('h1');

function changeColor1(newColor, delay, nextcolor ) {
    setTimeout( () => {
        h1.style.color = newColor;
       if(nextcolor){nextcolor();} else if(!nextcolor){console.log("No next color")};
    }, delay);
}
// So This is basically the callback hell
changeColor1("red", 1000, () => {
    changeColor1("blue", 1000, () => {
        changeColor1("green", 1000, () => {});
    });
})
// So this is the callback hell, and it is not a good practice to use this, so we can use the promise to solve this problem

                                   //----------------------------

//This is a code where We are not giving the setimeout function a callback function, so it will not go to the next color and instead it will prinout "No next color"
h2 = document.querySelector('h2');

function changeColor2(newColor, delay, nextcolor ) {
    setTimeout( () => {
        h2.style.color = newColor;
       if(nextcolor){nextcolor();} else if(!nextcolor){console.log("No next color")};
    }, delay);
}
// So This is basically the callback hell
changeColor2("red", 1000, () => {
    changeColor2("blue", 1000, "")
    });
