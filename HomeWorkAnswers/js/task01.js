function gameStart() {
    let things = {
        1: "Камінь",
        2: "Ножиці",
        3: "Папір",
    };

    let countRound = parseInt(
        prompt("Введіть кількість раундів, які хочете зіграти")
    );
    let playedRound = 0;
    let userCount = 0;
    let pcCount = 0;

    if (isNaN(countRound) || countRound <= 0) {
        alert("Введіть кількість раундів цифрами  і більше від нуля");
    } else {
        for (let i = 1; i < countRound + 1; i++) {
            let userInput = parseInt(
                prompt(
                    'Введіть цифри: 1 — для "камінь", 2 — для ножиці, 3 — для "папір"'
                )
            );
            if (!isNaN(userInput) && userInput > 0 && userInput < 4) {
                let pcInput = Math.floor(Math.random() * 3) + 1;
                let userAnswer = things[userInput];
                let pcAnswer = things[pcInput];
                playedRound++;
                if (userAnswer === pcAnswer) {
                    userCount++;
                    pcCount++;
                    alert(
                        `Нічия! Ви вибрали "${userAnswer}", комп'ютер вибрав "${pcAnswer}".
                        Раунд №: ${playedRound}, 
                        К-сть ваших очок: "${userCount}", к-сть очок комп'ютера: "${pcCount}"`
                    );
                } else {
                    if (
                        (userAnswer === things[1] && pcAnswer === things[2]) ||
                        (userAnswer === things[2] && pcAnswer === things[3]) ||
                        (userAnswer === things[3] && pcAnswer === things[1])
                    ) {
                        userCount++;
                        alert(
                            `Ви виграли! Ви вибрали "${userAnswer}", комп'ютр вибрав "${pcAnswer}" .
                        Раунд №: ${playedRound}, 
                        К-сть ваших очок: "${userCount}", к-сть очок комп'ютера: "${pcCount}"`
                        );
                    } else {
                        pcCount++;
                        alert(
                            `Комп'ютер виграв! Ви вибрали "${userAnswer}", комп'ютер вибрав "${pcAnswer}" .
                        Раунд №: ${playedRound}, 
                        К-сть ваших очок: "${userCount}", к-сть очок комп'ютера: "${pcCount}"`
                        );
                    }
                }
            } else {
                alert("Введіть тільки цифри з умови");
            }
        }
    }
}
