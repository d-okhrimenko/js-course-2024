'use strict'

const button = document.querySelector('.btn');
const numberInput = document.querySelector('#input-value');
const resultText = document.querySelector('#result-header');
button.onclick = checkNumberForEven;
numberInput.onclick = clearResults;

function checkNumberForEven() {
    let inputText = numberInput.value.trim();

    if (inputText === '' || !isFinite(inputText)) {
        showMessage(`Incorrect input "${inputText}"`);
        resultText.style.color = 'rgba(255, 57, 84, 0.65)';
        numberInput.style.color = 'rgba(255, 57, 84, 0.65)';
    } else if (Math.round(+inputText) !== +inputText) {
        showMessage(`You did not enter an integer - ${inputText}`);
        resultText.style.color = 'rgba(255, 57, 84, 0.65)';
        numberInput.style.color = 'rgba(255, 57, 84, 0.65)';
    } else {
        let num = +inputText;

        if (num % 2 == 0) {
            showMessage(`You have entered an even number - ${num}`);
            resultText.style.color = 'rgba(45, 221, 119, 0.65)';
            numberInput.style.color = 'rgba(45, 221, 119, 0.65)';
        } else {
            showMessage(`You have entered an odd number - ${num}`);
            resultText.style.color = 'rgba(252, 196, 93, 0.65)';
            numberInput.style.color = 'rgba(252, 196, 93, 0.65)';
        }
    }

}

function clearResults() {
    numberInput.value = '';
    resultText.innerHTML = '';
    numberInput.style.color = 'rgb(197, 191, 202)';
}

function showMessage(message) {
    resultText.innerHTML = message;
}


