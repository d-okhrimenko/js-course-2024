let userValue = '';
let userValueIndex;
let userValueValid = false;
let playGame = true;
let i;
let scorePlayer = 0;
let scorePC = 0;
let numberRound = 0;
let randomPcValue;
let numberCommand = "startGame";

// 0 - камінь
// 1 - ножниці
// 2 - папір


///задаємо значення в масив
const arrValue = ['камінь', 'ножиці', 'папір', 'вихід'];

while (playGame) {

    //початок гри
    if (numberCommand == "startGame") {
        userValue = prompt("Вітаю! Давай зіграємо в гру 'Камінь, ножиці, папір'. Зробіть свій вибір 'камінь', 'ножиці', чи 'папір' та введіть його в поле нижче. Щоб вийти з гри введіть 'вихід'.");
        userValueValid = false;
        scorePlayer = 0;
        scorePC = 0;
        numberRound = 0;
        numberCommand = "checkUserValue";
    }


    //перевірка на введення коректного значення
    if (numberCommand == "checkUserValue") {
        for (i = 0; i < arrValue.length; i++) {
            if (userValue === arrValue[i]) {
                userValueIndex = i;
                userValueValid = true;
                break;
            }
        }


        //введено коректне значення або нажато кнопка відміна
        if (userValueValid || userValue === null) {
            userValueValid = false;

            //Введено значення ВИХІД або нажато кнопка відміна
            if (userValue === 'вихід' || userValue === null) {

                //вихід з результатом гри
                if (numberRound !== 0) {
                    let resultMessage = `Гра завершена!\nРаундів: ${numberRound};\nРахунок:\nКористувач - ${scorePlayer};\nКомп'ютер - ${scorePC};\n`;
                    if (scorePlayer > scorePC) resultMessage += "Вітаємо, Ви переможець!";
                    else if (scorePlayer == scorePC) resultMessage += "Нічия!";
                    else resultMessage += "Комп'ютер переможець!";
                    alert(resultMessage);
                }

                //вихід на початку гри (без результата)
                else {
                    alert("Дякуємо за гру. Чекаємо на Вас знову!");
                }
                playGame = false;
            }
            //Введено значення для гри 
            else {
                //генеруємо випадкове число
                randomPcValue = Math.floor(Math.random() * (arrValue.length - 1));
                numberRound++;
                //в Юзера камінь 
                if (userValueIndex === 0) {
                     //в ПК також камінь  - нічия
                    if (randomPcValue === 0) numberCommand = "draw";
                     //в ПК ножиці - Виграв Юзер
                    else if (randomPcValue === 1) numberCommand = "userWin";
                    //в ПК папір - Виграв ПК
                    else if (randomPcValue === 2) numberCommand = "pcWin";
                }
                //в Юзера ножиці 
                else if (userValueIndex === 1) {
                     //в ПК камінь  - Виграв ПК
                    if (randomPcValue === 0) numberCommand = "pcWin";
                     //в ПК також ножиці - нічия
                    else if (randomPcValue === 1) numberCommand = "draw";
                         //в ПК папір - Виграв Юзер
                    else if (randomPcValue === 2) numberCommand = "userWin";
                }
                //в Юзера папір 
                else if (userValueIndex === 2) {
                    //в ПК камінь  - Виграв Юзер
                    if (randomPcValue === 0) numberCommand = "userWin";
                      //в ПК ножиці - Виграв ПК
                    else if (randomPcValue === 1) numberCommand = "pcWin";
                       //в ПК папір - нічия
                    else if (randomPcValue === 2) numberCommand = "draw";
                }
            }
        } 
        
        //введено НЕ коректне значення
        else {
            numberCommand = "error";
        }
    }


 //виведення результату гри при нічиї
    if (numberCommand == "draw") {
        alert(`Раунд ${numberRound}\nНічия.\nКористувач: ${userValue};\nКомп'ютер: ${arrValue[randomPcValue]}\nРахунок:\nКористувач - ${scorePlayer};\nКомп'ютер - ${scorePC};`);
        numberCommand = "nextRound";
    } 
     //виведення результату гри при Виграші Юзера
    else if (numberCommand == "userWin") {
        scorePlayer++;
        alert(`Раунд ${numberRound}\nВи виграли!\nКористувач: ${userValue};\nКомп'ютер: ${arrValue[randomPcValue]}\nРахунок:\nКористувач - ${scorePlayer};\nКомп'ютер - ${scorePC};`);
        numberCommand = "nextRound";
    } 
        //виведення результату гри при Виграші ПК
    else if (numberCommand == "pcWin") {
        scorePC++;
        alert(`Раунд ${numberRound}\nВи програли.\nКористувач: ${userValue};\nКомп'ютер: ${arrValue[randomPcValue]};\nРахунок:\nКористувач - ${scorePlayer};\nКомп'ютер - ${scorePC};`);
        numberCommand = "nextRound";
    }

     ///продовження гри інший раунд
    if (numberCommand == "nextRound") {
        userValue = prompt("Зробіть свій вибір 'камінь', 'ножиці', чи 'папір'. Щоб вийти з гри введіть 'вихід'.");
        numberCommand = "checkUserValue";
    }

        //введено НЕ коректне значення
    if (numberCommand == "error") {
        userValue = prompt("Введено некоректне значення. Зробіть свій вибір 'камінь', 'ножиці', чи 'папір'. Щоб вийти з гри введіть 'вихід'.");
        numberCommand = "checkUserValue";
    }
}


