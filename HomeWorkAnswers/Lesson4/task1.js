"use strict";

let score1 = 0;
let score2 = 0;

function randomNumber() {
    const compVariant = Math.floor(Math.random() * 3);

    switch (compVariant) {
        case 0:
            return "камінь";
        case 1:
            return "ножиці";
        case 2:
            return "папір";
    }
}

while (true) {
    
    const value1 = prompt("Введіть камінь, ножиці або папір");

    if (value1 === "вихід") {
        break;
    }

    if (value1 == "камінь" || value1 == "ножиці" || value1 == "папір") {
        letsPlay()
    } else {
        alert("Введіть камінь, ножиці або папір") 
    }
    
    function letsPlay() {
        const value2 = randomNumber();
    
        
        if (value1 === value2) {
            alert(` Ваш вибір: ${value1}  Вибір комп'ютера: ${value2} \n Результат гри: нічия! \n Рахунок ${score1}:${score2}`)
        } else if (value1 === "камінь" && value2 === "ножиці") {
            alert(` Ваш вибір: ${value1}  Вибір комп'ютера: ${value2} \n Результат гри: Ви перемогли! \n Рахунок ${++score1}:${score2}`)
        } else if (value1 === "папір" && value2 === "камінь") {
            alert(` Ваш вибір: ${value1}  Вибір комп'ютера: ${value2} \n Результат гри: Ви перемогли! \n Рахунок ${++score1}:${score2}`)
        } else if (value1 === "ножиці" && value2 === "папір") {
            alert(` Ваш вибір: ${value1}  Вибір комп'ютера: ${value2} \n Результат гри: Ви перемогли! \n Рахунок ${++score1}:${score2}`)
        } else {
            alert(` Ваш вибір: ${value1}  Вибір комп'ютера: ${value2} \n Результат гри: Ви програли! \n Рахунок ${score1}:${++score2}`)
        }
    }
}




