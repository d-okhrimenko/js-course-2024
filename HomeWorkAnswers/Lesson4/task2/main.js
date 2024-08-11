const operators = ["+", "-", "*", "/"];


function getExpected(a, b, operator) {
    switch (operator) {
        case "+": 
            return a + b;
        case "-": 
            return a - b;
        case "*": 
            return a * b;
        case "/": 
            return a / b;
    };
}


function game() {
    let count = prompt("Введіть кількість питань");
    let correct = 0;

    if (count == "вихід" || count == null) {
        return;
    }

    for (let i = 1; i <= count; i++) {

        let a = Math.floor(Math.random() * 100) + 1;
        let b = Math.floor(Math.random() * 100) + 1;
        let operator = operators[Math.floor(Math.random() * 4)];
        let expected = getExpected(a, b, operator);

        let tries = 1;
        let result = '';

        while (tries <= 3) {

            let actual = prompt(`Завдання ${i}\n${result}${a} ${operator} ${b} = `);

            if (actual == "вихід" || actual == null) {
                return;
            }

            tries++;

            if (actual == expected) {
                correct++;
                break;
            } else {
                result = `Спроба: ${tries} з 3\n`;
            }
        }
    }

    alert(`Рахунок
Всього: ${count}
Правильно: ${correct}
Помилок: ${count - correct}`);
}

game();

