function game() {
    let myResults = 0;
    let compResults = 0;
    let playing = true;
    while (playing) {
        let myChoice = Number(prompt("Обери камінь 0 / ножиці 1  / папір 2"));
        let randChoice = Math.floor(Math.random() * 3);
        console.log(randChoice);
        console.log(myChoice);
        if (
            (randChoice == 0 && myChoice == 0) ||
            (randChoice == 1 && myChoice == 1) ||
            (randChoice == 2 && myChoice == 2)
        ) {
            alert(
                "Ти обрав " + myChoice + " Комп'ютер обрав " + randChoice + " Висновок: Нічия "+ compResults + ":" + myResults
            );
            let contin = prompt("Продовжити? так/ні");
            if (contin == "ні") {
                playing == false;
                break;
            }
        } else if (
            (randChoice == 0 && myChoice == 1) ||
            (randChoice == 1 && myChoice == 2) ||
            (randChoice == 2 && myChoice == 0)
        ) {
            compResults++;
            alert(
                "Ти обрав/ла " + myChoice + " Комп'ютер обрав " + randChoice + " Висновок: Ти програв/ла " + compResults + ":" + myResults
            );
             let contin = prompt("Продовжити? так/ні");
            if (contin == "ні") {
                playing == false;
                break;
            }
        } else if (
            (randChoice == 0 && myChoice == 2) ||
            (randChoice == 1 && myChoice == 0) ||
            (randChoice == 2 && myChoice == 1)
        ) {
            myResults++;
            alert(
                "Ти обрав/ла " + myChoice + " Комп'ютер обрав " + randChoice + " Висновок: Ти виграв/ла " + compResults + ":" + myResults
            );
             let contin = prompt("Продовжити? так/ні");
            if (contin == "ні") {
                playing == false;
                break;
            }
        }
    }
    alert("Гра завершена. Остаточний рахунок: Комп'ютер " + compResults + " : Ти " + myResults);
}