
let value1;
let value2;
let mathsRandomValue;
let mathsValue;
let calculationValue;
let playGame = true;
let state = 0;
let userValue;
let numberRound = 0;
let rightAnswer = 0;
let wrongAnswer = 0;
let valueAttempt = 3;
let epsilon = 0.1;

///зробить перевірку для десяткового числа, оскльки може попастися вираз 7/5

while (playGame) {

    //формування випадкових чисел та дії
    if (state == 0) {
        value1 = parseInt((Math.random() * 10) + 1);
        value2 = parseInt((Math.random() * 10) + 1);
        mathsRandomValue = (Math.random() * 10);
        if (mathsRandomValue <= 2.5) {mathsValue = '+'; calculationValue = (value1 + value2); }
        if (mathsRandomValue > 2.5 && mathsRandomValue <= 5) {mathsValue = '-'; calculationValue = (value1 - value2); }
        if (mathsRandomValue > 5 && mathsRandomValue <= 7.5) {mathsValue = '*'; calculationValue = (value1 * value2); }
        if (mathsRandomValue > 7.5 && mathsRandomValue <= 10) {mathsValue = '/'; calculationValue = (value1 / value2); }
        state = 1;

    }
    if (state == 1) {

        if (numberRound == 0) {
            userValue = prompt(`Вітаю, давай зіграємо в гру = 'Математичний квіз'.\nДайте правильну відповідь для даного виразу (${value1} ${mathsValue} ${value2}) = ???\nУ разі, якщо правильна відповідь десяткове число, округліть його до 1 знаку після точки (допустима похибка значення до 0.1).\nНа всю гру у Вас є всього лиш 3 спроби на не правильну відповідь.\nЩоб вийти з гри натисніть кнопку "Відміна"`);
            state = 2;
        }

        else {
            userValue = prompt(`Дайте правильну відповідь для даного виразу (${value1} ${mathsValue} ${value2}) = ???\nУ разі, якщо правильна відповідь десяткове число, округліть його до 1 знаку після точки (допустима похибка значення до 0.1).\nУ Вас залишилось ${valueAttempt} спроб для не правильної відповіді.\nЩоб вийти з гри натисніть кнопку "Відміна"`);
            state = 2;
        }

    }


    if (state == 2) {

        //натиснута кнопка відміна
        if (userValue === null) { state = 20; }

        //перевірка введеного значення
        else if (!isNaN(userValue)) {

            if (Math.abs(userValue - calculationValue) < epsilon) {
                rightAnswer++;
                alert(`Вітаю!Ви надали правильну відповідь (${value1} ${mathsValue} ${value2}) = ${userValue}`);
                state = 0;
            }
            else {
                wrongAnswer++;
                valueAttempt--;
                alert(`Введена відповідь не вірна!`);
                if (wrongAnswer == 3) { state = 20; }
                else { state = 1; }

            }
            numberRound++;
        }
        //введено не вірне значення
        else {
            numberRound++;
            state = 66;
        }
    }

    ///вихід з гри
    if (state == 20) {
        ///вихід на початку гри без результатів
        if (numberRound == 0) {
            alert("Дякуємо за гру. Чекаємо на Вас знову!");
            playGame = false;
        }

        ///вихід з гри коли закінчились 3 спроби на не правильну відповідь
        else if (wrongAnswer == 3) {
            alert(`Гра завершена!\nУ Вас закінчились спроби неправильних відповідей.\nДякуємо за гру!\nКількість неправильних відповідей - ${wrongAnswer}.\nКількість правильних відповідей - ${rightAnswer}.`);
            playGame = false;
        }

        ///вихід з гри з результатами по кнопці відміна
        else if (userValue === null) {
            alert(`Дякуємо за гру!\nКількість неправильних відповідей - ${wrongAnswer}.\nКількість правильних відповідей - ${rightAnswer}.`);
            playGame = false;
        }
        numberRound = 0;
        rightAnswer = 0;
        wrongAnswer = 0;
    }
    //введено не вірне значення
    if (state == 66) {
        alert(`Введено некоректне значення. Введіть в поле вводу значення, що відповідає правильній відповіді для виразу (${value1} ${mathsValue} ${value2}) = ???`)
        state = 1;
    }

}



