function gameStart() {
    let things = {
        1: "Камінь",
        2: "Ножиці",
        3: "Папір",
    };

    let userInput = parseInt(
        prompt(
            'Введіть цифри: 1 — для "камінь", 2 — для ножиці, 3 — для "папір"'
        )
    );
    if (!isNaN(userInput) && userInput > 0 && userInput < 4) {
        let pcInput = Math.floor(Math.random() * 3) + 1;
        let userAnswer = things[userInput];
        let pcAnswer = things[pcInput];

        if (userAnswer === pcAnswer) {
            alert(
                `Нічия! Ви вибрали "${userAnswer}", комп'ютер вибрав "${pcAnswer}"`
            );
        } else {
            if (
                (userAnswer === things[1] && pcAnswer === things[2]) ||
                (userAnswer === things[2] && pcAnswer === things[3]) ||
                (userAnswer === things[3] && pcAnswer === things[1])
            ) {
                alert(
                    `Ви виграли! Ви вибрали "${userAnswer}", комп'ютр вибрав "${pcAnswer}"`
                );
            } else {
                alert(
                    `Комп'ютер виграв! Ви вибрали "${userAnswer}", комп'ютер вибрав "${pcAnswer}"`
                );
            }
        }
    } else {
        alert("Введіть тільки цифри з умови");
    }
}
