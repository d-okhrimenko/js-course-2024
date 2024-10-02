function getRandomChoice() {
    let randomNuber = Math.floor(Math.random() * 3);
    switch (randomNuber) {
        case 0:
            return "камінь";
        case 1:
            return "ножиці";
        case 2:
            return "папір";
    }
}

function getUserChoice() {
    while (true) {
        let userChoice = prompt("Ваш хід (камінь/ножиці/папір)").toLowerCase();
        let isValid = userChoice == "камінь" || userChoice == "ножиці" || userChoice == "папір";
        if (isValid) return userChoice;
    }

}

let userChoice = getUserChoice()
let computerChoice = getRandomChoice();

console.log(userChoice);
console.log(computerChoice);

function getWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return "Нічия!";
    }

    if (userChoice == "камінь") {
        if (computerChoice == "ножиці") {
            return "Гравець перемагає! Камінь б'є ножиці.";
        } else {
            return "Комп'ютер перемагає! Папір б'є камінь.";
        }
    } else if (userChoice == "ножиці") {
        if (computerChoice == "папір") {
            return "Гравець перемагає! Ножиці б'ють папір.";
        } else {
            return "Комп'ютер перемагає! Камінь б'є ножиці.";
        }
    } else if (userChoice == "папір") {
        if (computerChoice == "камінь") {
            return "Гравець перемагає! Папір б'є камінь.";
        } else {
            return "Комп'ютер перемагає! Ножиці б'ють папір.";
        }
    }
}

let result = getWinner(userChoice, computerChoice);
alert (result);