function calculate(operation) {
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.innerText = "Please enter valid numbers!";
        resultElement.style.color = "red";
        return;
    }

    let calculatedValue = 0;

    if (operation === '+') {
        calculatedValue = number1 + number2;
    } else if (operation === '-') {
        calculatedValue = number1 - number2;
    } else if (operation === '*') {
        calculatedValue = number1 * number2;
    } else if (operation === '/') {
        calculatedValue = number1 / number2;
    }

    resultElement.style.color = "black";
    resultElement.innerText = calculatedValue;
}
