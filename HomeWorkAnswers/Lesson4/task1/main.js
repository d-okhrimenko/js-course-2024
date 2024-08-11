const variants = ["камінь", "ножиці", "папір"];

let round = 1;
let bot_win = 0, user_win = 0;
let result;

let user = prompt("Ваш вибір");
let bot = variants[Math.floor(Math.random() * 3)];

while (user != "вихід" && user != null) {
    
    if (!(variants.includes(user))) {
        alert("Потрібно обрати камінь, ножиці або папір");
    } else {
        if (user == bot) {
            result = "Нічия";
        } else if (
            (user == "камінь" && bot == "ножиці") ||
            (user == "ножиці" && bot == "папір") ||
            (user == "папір" && bot == "камінь")
        ) {
            result = "Ви перемогли";
            user_win++;
        } else {
            result = "Ви програли";
            bot_win++;
        }

        alert(`Раунд ${round}
Ви обрали ${user}
Бот обрав ${bot}
${result}
Рахунок
Ви: ${user_win}
Бот: ${bot_win}`);

        round++;
    }

    user = prompt("Ваш вибір");
    bot = variants[Math.floor(Math.random() * 3)];
}