function getRandomChoice() {
    const choices = ["камінь", "ножиці", "папір"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let userWins = 0, computerWins = 0, rounds = 0, draws = 0;

while (true) {
    let userChoice = prompt("Введіть камінь, ножиці, папір чи вихід").toLowerCase().trim();

    if (userChoice === null) {
        // Користувач натиснув "Cancel"
        alert("Гра завершена.");
        break;
    }

    if (userChoice === "вихід") {
        alert(`Гра завершена.\nВи зіграли ${rounds} раундів\nРахунок: \nВи: ${userWins}\nКомп'ютер: ${computerWins}\nНічиї: ${draws}`);
        break;
    }

    if (!['камінь', 'ножиці', 'папір'].includes(userChoice)) {
        alert('Невірний вибір, будь ласка, спробуйте ще раз.');
        continue;
    }

    let computerChoice = getRandomChoice();
    let resultMsg;

    if (userChoice === computerChoice) {
        resultMsg = `Нічия! Ви вибрали ${userChoice}, комп'ютер вибрав ${computerChoice}.`;
        draws++;
    } else if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
        resultMsg = `Ви виграли! Ваш ${userChoice} б'є ${computerChoice} комп'ютера.`;
        userWins++;
    } else {
        resultMsg = `Ви програли! ${computerChoice} комп'ютера б'є ваш ${userChoice}.`;
        computerWins++;
    }

    alert(resultMsg);
    rounds++;
    alert(`Ви зіграли ${rounds} раундів\nРахунок: \nВи: ${userWins}\nКомп'ютер: ${computerWins}\nНічиї: ${draws}`);
}
