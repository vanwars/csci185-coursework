const setBackgroundColor = (bgColor) => {
    document.querySelector('body').style.backgroundColor = bgColor;
}

// generic version of the same freakin thing:
const myColor = prompt("What is your color?");
setBackgroundColor(myColor);



