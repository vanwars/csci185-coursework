const addNumbers = (ev) => {
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);

    let secondNumber = document.querySelector("#num2").value;
    secondNumber = Number(secondNumber);
    
    let result = firstNumber + secondNumber;

    document.querySelector("#answer").innerHTML = result;   
}

const subtractNumbers = (ev) => {
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);

    let secondNumber = document.querySelector("#num2").value;
    secondNumber = Number(secondNumber);
    
    let result = firstNumber - secondNumber;

    document.querySelector("#answer").innerHTML = result;   
}

const multiplyNumbers = (ev) => {
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);

    let secondNumber = document.querySelector("#num2").value;
    secondNumber = Number(secondNumber);
    
    let result = firstNumber * secondNumber;

    document.querySelector("#answer").innerHTML = result;   
}

const divideNumbers = (ev) => {
    let firstNumber = document.querySelector("#num1").value;
    firstNumber = Number(firstNumber);

    let secondNumber = document.querySelector("#num2").value;
    secondNumber = Number(secondNumber);
    
    let result = firstNumber / secondNumber;

    document.querySelector("#answer").innerHTML = result;   
}

