function gameStart() {
    let things = {
        1: "Камінь",
        2: "Ножиці",
        3: "Папір",
    };

    let userAnswer = parseInt(
        prompt(
            'Введіть цифри: 1 — для "камінь", 2 — для ножиці, 3 — для "папір"'
        )
    );
    if (!isNaN(userAnswer) && userAnswer > 0 && userAnswer < 4) {
        let pcAnswer = Math.floor(Math.random() * 3) + 1;
        console.log(pcAnswer);
    } else {
        alert("Введіть тільки цифри з умови");
    }
}
