let wins = 0;
let losses = 0;
let draws = 0;

document.querySelector("#begin").onclick = function() {
    const selectOptions = ["камінь", "ножиці", "папір"];
        let userValue = prompt("Введіть одне із значень: камінь, ножиці або папір").toLowerCase();
        let compValue = Math.floor(Math.random() * 3);
        switch (compValue) {
            case 0: compValue = "камінь";
                break;
            case 1: compValue = "ножиці";
                break;
            case 2: compValue = "папір";
                break;
        }
        if (selectOptions.includes(userValue)) {
            if (userValue === compValue) {
                alert(`Ваш вибір - ${userValue}. Вибір комп"ютера - ${compValue}. У вас нічия`);
                draws ++;
            }
            else if (userValue === selectOptions[0] && compValue === selectOptions[1]
                || userValue == selectOptions[1] && compValue == selectOptions[2]
                || userValue == selectOptions[2] && compValue == selectOptions[0]) {
                alert(`Ваш вибір - ${userValue}. Вибір комп"ютера - ${compValue}. Ви перемогли!`);
                wins ++;
            }
            else {
                alert(`Ваш вибір - ${userValue}. Вибір комп"ютера - ${compValue}. Ви програли!`);
                losses ++;
            }
        }
        else {
            alert("Ви ввели невірне значення, спробуйте ще раз");
        }

        alert(`Статистика гри: \nперемоги - ${wins} \nпрограші - ${losses} \nнічиї - ${draws}`);
    }
document.querySelector("#exit").onclick = function() {
    alert("Гру завершено!");
}