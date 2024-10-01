let count = 0;
const noValidValue = "Введене значення не коректне, спробуйте знову!";
const exit = "Дякуємо за Ваш вибір! Чекаємо на Вас знову=)"


//функція обчислення площі та периметру кола
function calculationRound(radius) {
    let S = Math.PI * Math.pow(radius, 2);
    let P = 2 * Math.PI * radius;
    return [S, P];
}

//функція обчислення площі та периметру прямокутника
function calculationRectangle(a, b) {
    let S = a * b;
    let P = 2 * (a + b);
    return [S, P];
}

//функція обчислення площі та периметру трикутника
function calculationTriangle(a, b, c) {
    let P = a + b + c;
    let X = P / 2;
    let S = Math.sqrt(X * (X - a) * (X - b) * (X - c));
    return [S, P];
}

//функція перевірки введеного значення
function getUserValue(message, step) {
    let value;
    while (true) {

        //умова розділення для виведення 1-го повідомлення
        if (count >= 1) {
            value = prompt(message);
        }
        else {
            value = prompt("Доброго дня!\n" + message);
        }
        count++;

        //перевірка введеного значеня типу геометричної фігури
        if (step == 1) {
            //натиснута кнопка відміни
            if (value === null) return lowerValue = "exit";
            //перевірка введеного значеня
            else {
                let lowerValue = value.toLowerCase();
                if (lowerValue == 'коло' || lowerValue == 'прямокутник' || lowerValue == 'трикутник') {
                    return lowerValue;
                }
                //введене значення не коректне
                else { alert(`${noValidValue}\n${message}`); }
            }
        }

        //перевірка введеного числового значення (сторін/радіусу) геометричної фігури
        else if (step == 2) {

            if (!isNaN(value) && value !== "" && value !== null && value > 0) {
                return Number(value);
            }
            //натиснута кнопка відміни
            else if (value === null) return value = "exit";
            //введене значення не коректне
            else { alert(`${noValidValue}\n${message}`); }
        }
    }
}

//функція виводу повідомлення
function showMassege(text) {
    alert(text);
}

// масив для зберігання значеннь кола:  [0] - площі, [1] - периметру 
let round = [];
// масив для зберігання значеннь прямокутника:  [0] - площі, [1] - периметру 
let rectangle = [];
// масив для зберігання значеннь трикутника:  [0] - площі, [1] - периметру 
let triangle = [];
// масив для зберігання значеннь геометричної фігури: [0] - тип геометричної фігури, [1] - радіус/1сторона, [2] - 2сторона, [3] - 3сторона,
let userValue = [];


userValue[0] = getUserValue("Введіть назву геометричної фігури (коло, прямокутник, трикутник) для якої хочете порахувати площу та периметр.", 1);
//натиснута кнопка відміни
if (userValue[0] == "exit") { showMassege(exit); }
//введено корректне значення (коло, прямокутник, трикутник)
else {
    //введено значення коло
    if (userValue[0] == "коло") {
        userValue[1] = getUserValue("Введіть значення, чому дорівнює радіус кола", 2);
        //натиснута кнопка відміни
        if (userValue[1] == "exit") { showMassege(exit); }
        //введено коректне значення радіуса кола
        else {
            let temp = calculationRound(userValue[1]);
            round[0] = temp[0].toFixed(3);
            round[1] = temp[1].toFixed(3);
            showMassege(`Вибрана фігура: ${userValue[0]}\nПлоща = ${round[0]}\nПериметр = ${round[1]}`);
        }
    }
    //введено значення прямокутник
    else if (userValue[0] == "прямокутник") {
        userValue[1] = getUserValue("Введіть значення, чому дорівнює перша сторона прямокутника", 2);
          //натиснута кнопка відміни
        if (userValue[1] == "exit") { showMassege(exit); }
        //введено коректне значення 1сторони прямокутника
        else {
            userValue[2] = getUserValue("Введіть значення, чому дорівнює друга сторона прямокутника", 2);
            //натиснута кнопка відміни
            if (userValue[2] == "exit") { showMassege(exit); }
            //введено коректне значення 2сторони прямокутника
            else {
                let temp = calculationRectangle(userValue[1], userValue[2]);
                rectangle[0] = temp[0].toFixed(3);
                rectangle[1] = temp[1].toFixed(3);
                showMassege(`Вибрана фігура: ${userValue[0]}\nПлоща = ${rectangle[0]}\nПериметр = ${rectangle[1]}`);
            }
        }
    }
     //введено значення трикутник
    else if (userValue[0] == "трикутник") {
        userValue[1] = getUserValue("Введіть значення, чому дорівнює перша сторона трикутника", 2);
         //натиснута кнопка відміни
        if (userValue[1] == "exit") { showMassege(exit); }
        //введено коректне значення 1сторони трикутника
        else {
            userValue[2] = getUserValue("Введіть значення, чому дорівнює друга сторона прямокутника", 2);
             //натиснута кнопка відміни
            if (userValue[2] == "exit") { showMassege(exit); }
            //введено коректне значення 2сторони трикутника
            else {
                userValue[3] = getUserValue("Введіть значення, чому дорівнює третя сторона прямокутника", 2);
                 //натиснута кнопка відміни
                if (userValue[3] == "exit") { showMassege(exit); }
                //введено коректне значення 3сторони трикутника
                else {
                    let temp = calculationTriangle(userValue[1], userValue[2], userValue[3]);
                    triangle[0] = temp[0].toFixed(3);
                    triangle[1] = temp[1].toFixed(3);
                    showMassege(`Вибрана фігура: ${userValue[0]}\nПлоща = ${triangle[0]}\nПериметр = ${triangle[1]}`);
                }
            }
        }
    }
}
