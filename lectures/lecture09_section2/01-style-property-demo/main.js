
const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = '#e24545';
};

const makeRainbow = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = '#e24545';
    document.querySelector('#section2').style.backgroundColor = 'orange';
    document.querySelector('#section3').style.backgroundColor = 'yellow';
    document.querySelector('#section4').style.backgroundColor = 'green';
    document.querySelector('#section5').style.backgroundColor = 'blue';
    document.querySelector('#section6').style.backgroundColor = 'purple';
};

const reset = () => {
    document.querySelectorAll('.my-section').forEach(elem => {
        elem.style.backgroundColor = 'white';    
    });

    document.querySelectorAll('.my-section p').forEach(elem => {
        elem.style.color = 'hotpink';
        elem.style.fontWeight = 'bold';       
    });
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
};


document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        makeRainbow();
    }
}
