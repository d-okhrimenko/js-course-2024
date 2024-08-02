function generateRandomExpression() {
    // Випадкові числа
    const num1 = Math.floor(Math.random() * 100) + 1; // Випадкове число від 1 до 100
    const num2 = Math.floor(Math.random() * 100) + 1; // Випадкове число від 1 до 100

    // Випадковий оператор
    const operators = ['+', '-', '*', '/'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    // Формування математичного виразу
    const expression = `${num1} ${randomOperator} ${num2}`;
    
    // Результат виразу
    let result;
    switch (randomOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Перевірка на ділення на нуль
            result = num2 !== 0 ? num1 / num2 : 'undefined';
            break;
    }

    return {
        expression: expression,
        result: result
    };
}

function mathQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    const totalQuestions = 5;

    for(let i =0; i < totalQuestions; i++) {
        const { expression, result } = generateRandomExpression();
        const userAnswer = parseFloat(prompt(`Question ${i + 1}: What is the result of ${expression}?`));

        if (userAnswer === result) {
            alert('Correct');
            correctAnswers++
        } else {
            alert('Incorrect');
            incorrectAnswers++
        }
        alert(`Game over: correct answers - ${correctAnswers}, incorrect answers - ${incorrectAnswers}`);
    }
}

mathQuiz();