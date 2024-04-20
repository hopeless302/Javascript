h1 = document.querySelector('h1');

function changeColor(newColor, delay, nextcolor ) {
    setTimeout( () => {
        h1.style.color = newColor;
       if(nextcolor) nextcolor();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000);
    });
})