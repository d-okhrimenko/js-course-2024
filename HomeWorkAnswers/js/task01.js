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
        console.log(userAnswer);
        console.log(pcAnswer);

        if (userAnswer === pcAnswer) {
            alert("Нічия!");
        } else {
            if (userAnswer === things[1]) {
                if (pcAnswer === things[2]) {
                    alert("Ви виграли");
                } else {
                    alert("Комп'ютер виграв");
                }
            } else {
                if (userAnswer === things[2]) {
                    if (pcAnswer === things[3]) {
                        alert("Ви виграли");
                    } else {
                        alert("Комп'ютер виграв");
                    }
                } else {
                    if (userAnswer === things[3]) {
                        if (pcAnswer === things[1]) {
                            alert("Ви виграли");
                        } else {
                            alert("Комп'ютер виграв");
                        }
                    }
                }
            }
        }
    } else {
        alert("Введіть тільки цифри з умови");
    }
}
