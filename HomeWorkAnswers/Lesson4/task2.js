document.querySelector("#btnTask2").addEventListener("click", mathQuiz);

function getRandomOperator() {
    const operators = ["+", "-", "*", "/"];
    return operators[Math.floor(Math.random() * operators.length)];
}

function calculate(operand1, operator, operand2) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;
    }
}

function mathQuiz(answer) {
    let correctAnswer = 0;
    let incorrectAnswer = 0;
    let tries = 4;

    for (let i = 0; i < 5; i++) {
        let operand1 = Math.floor(Math.random() * 10) + 1;
        let operand2 = Math.floor(Math.random() * 10) + 1;
        let operator = getRandomOperator();
        let expression = `${operand1} ${operator} ${operand2}`;
        let result = calculate(operand1, operator, operand2);
        result = parseFloat(result.toFixed(2));

        let userCorrect = false;
        while (tries > 0 && !userCorrect) {
            answer = prompt(`Question ${i + 1}: What is the result of ${expression} = ?`);

            if (!isNaN(answer) && answer !== "" && answer !== null && answer.trim()) {
                if (parseFloat(answer) == result) {
                    correctAnswer++;
                    userCorrect = true;
                } else {
                    tries--;
                    if (tries > 0) {
                        alert(`Incorrect answer. Try again! Attempts left: ${tries}`);
                        incorrectAnswer++;
                    }
                }
            } else {
                alert("Invalid input. Please enter a valid number.");
            }
        }
        if (tries == 0) {
            alert("You've used all your attempts.");
            break;
        }
    }
    alert(`Game Over! \nCorrect answers: ${correctAnswer}\nIncorrect answers: ${incorrectAnswer}`);
}
