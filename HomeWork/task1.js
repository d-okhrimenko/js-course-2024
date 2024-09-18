

// let value = prompt("Введіть камінь, ножиці, або папір");

// let number = Math.floor(Math.random() * value.length);

// switch(value){
//     case :
//         value == ""


// Функція для отримання вибору комп'ютера
function getComputerChoice() {
    const choices = ['камінь', 'ножиці', 'папір'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Функція для визначення переможця
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Нічия!";
    } else if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
        return "Ви виграли!";
    } else {
        return "Ви програли!";
    }
}

// Головна функція для запуску гри
function playGame() {
    // Запит вибору користувача
    const userChoice = prompt("Виберіть камінь, ножиці або папір:");

    // Перевірка введеного значення
    if (!['камінь', 'ножиці', 'папір'].includes(userChoice)) {
        alert("Будь ласка, виберіть камінь, ножиці або папір.");
        return;
    }

    // Генерація вибору комп'ютера
    const computerChoice = getComputerChoice();

    // Визначення переможця
    const result = determineWinner(userChoice, computerChoice);

    // Виведення результату гри
    alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\n${result}`);
}

// Запуск гри
playGame();

