
let value1;
let value2;
let mathsRandomValue;
let mathsValue;
let calculationValue;
let playGame = true;
let state = "generationValue";
let userValue;
let numberRound = 0;
let rightAnswer = 0;
let wrongAnswer = 0;
let valueAttempt = 3;
let epsilon = 0.1;


while (playGame) {

    //формування випадкових чисел та дії
    if (state == "generationValue") {
        value1 = parseInt((Math.random() * 10) + 1);
        value2 = parseInt((Math.random() * 10) + 1);
        mathsRandomValue = (Math.random() * 10);
        if (mathsRandomValue <= 2.5) {mathsValue = '+'; calculationValue = (value1 + value2); }
        if (mathsRandomValue > 2.5 && mathsRandomValue <= 5) {mathsValue = '-'; calculationValue = (value1 - value2); }
        if (mathsRandomValue > 5 && mathsRandomValue <= 7.5) {mathsValue = '*'; calculationValue = (value1 * value2); }
        if (mathsRandomValue > 7.5 && mathsRandomValue <= 10) {mathsValue = '/'; calculationValue = (value1 / value2); }
        state = "startGame";

    }
    if (state == "startGame") {

        if (numberRound == 0) {
            userValue = prompt(`Вітаю, давай зіграємо в гру - 'Математичний квіз'.\nДайте правильну відповідь для даного виразу (${value1} ${mathsValue} ${value2}) = ???\nУ разі, якщо правильна відповідь десяткове число, округліть його до 1 знаку після точки (допустима похибка значення до 0.1).\nНа всю гру у Вас є всього лиш 3 спроби на не правильну відповідь.\nЩоб вийти з гри натисніть кнопку "Відміна"`);
            state = "checkValue";
        }

        else {
            userValue = prompt(`Дайте правильну відповідь для даного виразу (${value1} ${mathsValue} ${value2}) = ???\nУ разі, якщо правильна відповідь десяткове число, округліть його до 1 знаку після точки (допустима похибка значення до 0.1).\nУ Вас залишилось ${valueAttempt} спроб для не правильної відповіді.\nЩоб вийти з гри натисніть кнопку "Відміна"`);
            state = "checkValue";
        }

    }


    if (state == "checkValue") {

        //натиснута кнопка відміна
        if (userValue === null) { state = "exit"; }

        //перевірка введеного значення
        else if (!isNaN(userValue)) {

            if (Math.abs(userValue - calculationValue) < epsilon) {
                rightAnswer++;
                alert(`Вітаю!Ви надали правильну відповідь (${value1} ${mathsValue} ${value2}) = ${userValue}`);
                state = "generationValue";
            }
            else {
                wrongAnswer++;
                valueAttempt--;
                alert(`Введена відповідь не вірна!`);
                if (wrongAnswer == 3) { state = "exit"; }
                else { state = "startGame"; }

            }
            numberRound++;
        }
        //введено не вірне значення
        else {
            numberRound++;
            state = "error";
        }
    }

    ///вихід з гри
    if (state == "exit") {
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
    if (state == "error") {
        alert(`Введено некоректне значення. Введіть в поле вводу значення, що відповідає правильній відповіді для виразу (${value1} ${mathsValue} ${value2}) = ???`)
        state = "startGame";
    }

}



