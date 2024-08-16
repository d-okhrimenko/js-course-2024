function getUserChoice() {
    const userInput = prompt('Введіть свій вибір: камінь, ножиці або папір (або "скасувати" для завершення гри)').toLowerCase();
    if (userInput === 'камінь' || userInput === 'ножиці' || userInput === 'папір' || userInput === 'вихід') {
        return userInput;
    } else {
        alert('Неправильний вибір, спробуйте ще раз');
        return getUserChoice();
    }
}

function getComputerChoice() {
    const choices = ['камінь', 'ножиці', 'папір'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Нічия!";
    }
    if (userChoice === 'камінь') {
        return (computerChoice === 'ножиці') ? "Ви виграли!" : "Комп'ютер виграв!";
    }
    if (userChoice === 'ножиці') {
        return (computerChoice === 'папір') ? "Ви виграли!" : "Комп'ютер виграв!";
    }
    if (userChoice === 'папір') {
        return (computerChoice === 'камінь') ? "Ви виграли!" : "Комп'ютер виграв!";
    }
}
 function playGame() {
    let userScore = 0;
    let computerScore = 0;

    while (true) {
        const userChoice = getUserChoice();
        if (userChoice === 'вихід') {
            alert(`Гра завершена. Загальний рахунок: Ви - ${userScore}, Комп'ютер - ${computerScore}`);
            break;
        }

        const computerChoice = getComputerChoice();
        alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}`);

        const result = determineWinner(userChoice, computerChoice);
        alert(result);

        if (result === "Ви виграли!") {
            userScore++;
        } else if (result === "Комп'ютер виграв!") {
            computerScore++;
        }

        alert(`Рахунок: Ви - ${userScore}\nКомп'ютер - ${computerScore}`);
    }
}

playGame();