/*
Завдання 1
Написати програму, яка визначає, чи є введене число парним або непарним.

Кроки для виконання завдання:
- Введення числа:
Використайте prompt для введення числа користувачем.
- Перетворення введених даних на число:
Перетворіть введене значення з рядка на число, використовуючи parseInt або Number.
- Перевірка введених даних:
Переконайтеся, що користувач ввів коректне число.
- Перевірка на парність:
Використайте оператор залишку від ділення(%), щоб визначити, чи є число парним або непарним.
- Виведення результату:
Використайте alert для виведення повідомлення про те, чи є число парним або непарним.
*/  

function evenOrOdd() {
    let answer = parseInt(prompt("Enter a number to find out if it's even or odd"));
    let num = Number.isInteger(answer);
    let odd = answer % 2 != 0;
    let even = answer % 2 == 0;

    if (num && odd) {
        alert("You've entered an odd number!")
    } else if (num && even) {
        alert("You've entered an even number!")
    } else {
        alert("Enter a number please!")
    };
};
