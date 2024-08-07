let correctAnswers = 0;
let incorrectAnswers = 0;
let attempts = 5;

while (attempts > 0) {
    let firstRandomNumber = Math.floor((Math.random() * 10) + 1);
    let secondRandomNumber = Math.floor((Math.random() * 10) + 1);
    let symbol = ["+", "-", "*", "/"];
    let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
    
    let result;
    
    switch (randomSymbol) {
        case "+":
            result = firstRandomNumber + secondRandomNumber;
            break;
        case "-":
            result = firstRandomNumber - secondRandomNumber;
            break;
        case "*":
            result = firstRandomNumber * secondRandomNumber;
            break;
        case "/":
            result = firstRandomNumber / secondRandomNumber;
            break;
    }
    
    let userAnswer = Number(prompt(`How much is ${firstRandomNumber} ${randomSymbol} ${secondRandomNumber} ?`));
    let validAnswer = !isNaN(userAnswer) && userAnswer !== "" && userAnswer !== null;
    
    if (!validAnswer) {
        alert ("The answer should be a number!");
        continue;
    } else {
        if (userAnswer === result) {
            alert ("Yes! You are right!");
            correctAnswers++;
        } else {
            alert ("Think once again!");
            incorrectAnswers++;
        }
    }
    attempts--;
}

alert(`Game over! Correct answers: ${correctAnswers}, Incorrect answers: ${incorrectAnswers}`);
