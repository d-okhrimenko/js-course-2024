function mathQueez() {
    function addNumbers(a, b) {
        return a + b;
    }
    function minusNumbers(a, b) {
        return a - b;
    }
    function multypleNumbers(a, b) {
        return a * b;
    }
    function devideNumbers(a, b) {
        return a / b;
    }

    let funcOperators = {
        "+": addNumbers,
        "-": minusNumbers,
        "*": multypleNumbers,
        "/": devideNumbers,
    };
    let operators = {
        1: "+",
        2: "-",
        3: "*",
        4: "/",
    };

    let countRound = parseInt(prompt("Скільки разів будемо грати?"));

    if (!isNaN(countRound) && countRound > 0) {
        let rightAnswers = 0;
        let wrongAnswers = 0;
        let playedRounds = 0;
        while (countRound > 0) {
            let number1 = Math.floor(Math.random() * 100) + 1;
            let number2 = Math.floor(Math.random() * 100) + 1;
            let operator = operators[Math.floor(Math.random() * 3) + 1];
            let result = funcOperators[operator](number1, number2);

            console.log(
                `number 1 ${number1} number2 ${number2}, operator ${operator}, result: ${result}`
            );
            let userAnswer = prompt(
                `Чому дорівнює вираз ${number1} ${operator} ${number2}? (або введіть "вихід" для закінчення гри)`
            );
            if (userAnswer.toLocaleLowerCase() === "вихід") {
                break;
            } else {
                if (!isNaN(userAnswer)) {
                    userAnswer = parseInt(userAnswer);
                    if (result === userAnswer) {
                        alert(
                            `Ваша відповідь "${userAnswer}" вірна, ${number1} ${operator} ${number2} = ${result}`
                        );
                        rightAnswers++;
                    } else {
                        alert(
                            `Ваша відповідь "${userAnswer}" не вірна, ${number1} ${operator} ${number2} = ${result}`
                        );
                        wrongAnswers++;
                    }
                    playedRounds++;
                    countRound--;
                } else {
                    alert("Перевірте, чи ви ввели дані згідно умови");
                }
            }
        }

        alert(` Зіграно ${playedRounds} раундів.
                Правильних відповідей: ${rightAnswers} 
                Неправильних відповідей: ${wrongAnswers}`);
    } else {
        alert("Або введіть число більше 0 або до наступного разу!");
    }
}
