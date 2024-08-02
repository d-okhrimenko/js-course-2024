function playGame() {
    // Можливі вибори
    const choices = ['камінь', 'ножиці', 'папір'];
    
    // Функція для отримання випадкового вибору комп'ютера
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Функція для визначення переможця
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Нічия!';
        }
        if (
            (userChoice === 'камінь' && computerChoice === 'ножиці') ||
            (userChoice === 'ножиці' && computerChoice === 'папір') ||
            (userChoice === 'папір' && computerChoice === 'камінь')
        ) {
            return 'Ви виграли!';
        }
        return 'Комп\'ютер виграв!';
    }

    // Підрахунок рахунку
    let userScore = 0;
    let computerScore = 0;

    while (true) {
        // Введення вибору користувача
        let userChoice = prompt('Виберіть: камінь, ножиці, папір або введіть "вихід" для завершення гри').toLowerCase();

        // Перевірка команди виходу
        if (userChoice === 'вихід') {
            alert(`Гра завершена. Ваш рахунок: ${userScore}, Рахунок комп'ютера: ${computerScore}`);
            break;
        }

        // Перевірка на коректність введення
        if (!choices.includes(userChoice)) {
            alert('Невірний вибір. Будь ласка, спробуйте ще раз.');
            continue;
        }

        // Генерація вибору комп'ютера
        const computerChoice = getComputerChoice();
        alert(`Комп'ютер вибрав: ${computerChoice}`);

        // Визначення переможця
        const result = determineWinner(userChoice, computerChoice);
        alert(result);

        // Оновлення рахунку
        if (result === 'Ви виграли!') {
            userScore++;
        } else if (result === 'Комп\'ютер виграв!') {
            computerScore++;
        }
    }
}

// Запуск гри
playGame();