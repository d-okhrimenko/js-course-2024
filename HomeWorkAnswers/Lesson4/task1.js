let userValue = '';
let userValueIndex;
let userValueValid = false;
let numberCommand = 0;
let playGame = true;
let i;
let scorePlayer = 0;
let scorePC = 0;
let numberRound = 0;
let randomPcValue;


// 0 - камінь
// 1 - ножниці
// 2 - папір


///задаємо значення в масив
const arrValue = ['камінь', 'ножиці', 'папір', 'вихід'];

while (playGame) {

    //початок гри
    if (numberCommand == 0) {
        userValue = prompt("Вітаю! Давай зіграємо в гру 'Камінь, ножиці, папір'. Зробіть свій вибір 'камінь', 'ножиці', чи 'папір' та введіть його в поле нижче. Щоб вийти з гри введіть 'вихід'.");
        userValueValid = false;
        scorePlayer = 0;
        scorePC = 0;
        numberRound = 0;
        numberCommand = 1;
    }


    //перевірка на введення коректного значення
    if (numberCommand == 1) {
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
                    if (randomPcValue === 0) numberCommand = 10;
                     //в ПК ножиці - Виграв Юзер
                    else if (randomPcValue === 1) numberCommand = 11;
                    //в ПК папір - Виграв ПК
                    else if (randomPcValue === 2) numberCommand = 12;
                }
                //в Юзера ножиці 
                else if (userValueIndex === 1) {
                     //в ПК камінь  - Виграв ПК
                    if (randomPcValue === 0) numberCommand = 12;
                     //в ПК також ножиці - нічия
                    else if (randomPcValue === 1) numberCommand = 10;
                         //в ПК папір - Виграв Юзер
                    else if (randomPcValue === 2) numberCommand = 11;
                }
                //в Юзера папір 
                else if (userValueIndex === 2) {
                    //в ПК камінь  - Виграв Юзер
                    if (randomPcValue === 0) numberCommand = 11;
                      //в ПК ножиці - Виграв ПК
                    else if (randomPcValue === 1) numberCommand = 12;
                       //в ПК папір - нічия
                    else if (randomPcValue === 2) numberCommand = 10;
                }
            }
        } 
        
        //введено НЕ коректне значення
        else {
            numberCommand = 66;
        }
    }


 //виведення результату гри при нічиї
    if (numberCommand == 10) {
        alert(`Раунд ${numberRound}\nНічия.\nКористувач: ${userValue};\nКомп'ютер: ${arrValue[randomPcValue]}\nРахунок:\nКористувач - ${scorePlayer};\nКомп'ютер - ${scorePC};`);
        numberCommand = 20;
    } 
     //виведення результату гри при Виграші Юзера
    else if (numberCommand == 11) {
        scorePlayer++;
        alert(`Раунд ${numberRound}\nВи виграли!\nКористувач: ${userValue};\nКомп'ютер: ${arrValue[randomPcValue]}\nРахунок:\nКористувач - ${scorePlayer};\nКомп'ютер - ${scorePC};`);
        numberCommand = 20;
    } 
        //виведення результату гри при Виграші ПК
    else if (numberCommand == 12) {
        scorePC++;
        alert(`Раунд ${numberRound}\nВи програли.\nКористувач: ${userValue};\nКомп'ютер: ${arrValue[randomPcValue]};\nРахунок:\nКористувач - ${scorePlayer};\nКомп'ютер - ${scorePC};`);
        numberCommand = 20;
    }

     ///продовження гри інший раунд
    if (numberCommand == 20) {
        userValue = prompt("Зробіть свій вибір 'камінь', 'ножиці', чи 'папір'. Щоб вийти з гри введіть 'вихід'.");
        numberCommand = 1;
    }

        //введено НЕ коректне значення
    if (numberCommand == 66) {
        userValue = prompt("Введено некоректне значення. Зробіть свій вибір 'камінь', 'ножиці', чи 'папір'. Щоб вийти з гри введіть 'вихід'.");
        numberCommand = 1;
    }
}


