function getRandomOperator() {
    const operators = ["+", "-", "/", "*"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
}

let number1, number2, operator, result, attempts = 5, correctAnswers = 0, incorrectAnswers = 0, userAnswer;
while (attempts !== 0) {
    number1 = Math.floor((Math.random() * 100) + 1);
    number2 = Math.floor((Math.random() * 100) + 1);
    operator = getRandomOperator();
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    userAnswer = +prompt(`Введіть значення виразу ${number1}${operator}${number2}. У вас залишилось ${attempts} спроб`);
    while (isNaN(userAnswer) || userAnswer === null) {
        userAnswer = +prompt(`Ви ввели не число, будь ласка, спробуйте ще раз.\nВведіть значення виразу ${number1}${operator}${number2}.`);
    }
    if (userAnswer === result) {
        correctAnswers++;
        alert("Вірно");
    }
    else {
        incorrectAnswers++;
        alert("Невірно");
    }
    attempts--;

}
alert(`Гра завершена. \nПравильних відповідей: ${correctAnswers}\nНеправильних відповідей: ${incorrectAnswers}`);