function generateMathExpression() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "*", "/"];
    const mathOperator =
        operators[Math.floor(Math.random() * operators.length)];
    let answer;
    let expression;
    switch (mathOperator) {
        case "+":
            answer = num1 + num2;
            expression = `${num1} + ${num2}`;
            break;
        case "-":
            answer = num1 - num2;
            expression = `${num1} - ${num2}`;
            break;
        case "*":
            answer = num1 * num2;
            expression = `${num1} * ${num2}`;
            break;
        case "/":
            answer = parseFloat((num1 / num2).toFixed(2));
            expression = `${num1} / ${num2}`;
            break;
    }
    return { expression, answer };
}

function playGame() {
    let correctCount = 0;
    let incorrectCount = 0;
    const attempts = 5;
    for (let i = 0; i < attempts; i++) {
        const { expression, answer } = generateMathExpression();
        const userAnswer = parseFloat(prompt(`Вирішіть: ${expression}`));

        if (userAnswer === answer) {
            alert("Вірно");
            correctCount++;
        } else {
            alert("Невірно");
            incorrectCount++;
        }
    }
    alert(
        `Гра закінчена! Правильних відповідей: ${correctCount}, Неправильних відповідей: ${incorrectCount}`
    );
}

document.querySelector(".btn").addEventListener("click", () => {
    playGame();
});
