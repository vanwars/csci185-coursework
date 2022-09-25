const addNumbers = (ev) => {
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    let answer = Number(firstNumber) + Number(secondNumber);
    document.querySelector('#answer').textContent = answer;
}

const subtractNumbers = (ev) => {
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    let answer = Number(firstNumber) - Number(secondNumber);
    document.querySelector('#answer').textContent = answer;
}

const multiplyNumbers = (ev) => {
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    let answer = Number(firstNumber) * Number(secondNumber);
    document.querySelector('#answer').textContent = answer;
}

const divideNumbers = (ev) => {
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    let answer = Number(firstNumber) / Number(secondNumber);
    document.querySelector('#answer').textContent = answer;
}

