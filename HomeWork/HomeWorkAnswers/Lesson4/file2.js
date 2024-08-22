function startQuiz() {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let operators = ["+", "-", "*", "/"];
    let randomIndex = Math.floor(Math.random() * operators.length);

    console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(operators[randomIndex]);

    for (let i = 0; i < 5; i++) {
        userAnswer = +prompt("Розв'яжіть вираз " + randomNumber1 + operators[randomIndex] + randomNumber2);
        compAnswer = eval(randomNumber1 + operators[randomIndex] + randomNumber2);
        console.log(compAnswer);

        if (userAnswer !== compAnswer) {
            correctAnswers;
            wrongAnswers++;
            alert("Ваша відповідь неправильна");
        } else {
            alert("Ваша відповідь правильна: " + userAnswer);
            correctAnswers++;
            wrongAnswers;
            break;
        }
    }
}

let min = 1;
let max = 100;
let userAnswer;
let compAnswer;
let correctAnswers = 0;
let wrongAnswers = 0;

startQuiz();

alert("Quiz завершено. Правильних відповідей - " + correctAnswers + ". Неправильних відповідей - " + wrongAnswers);