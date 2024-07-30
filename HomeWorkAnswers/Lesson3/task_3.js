/*
Завдання 3
Написати програму, яка перевіряє, чи є введений рік високосним.

Кроки для виконання завдання:
Введення року:
- Використайте prompt для введення року користувачем.
Перетворення введених даних на число:
- Перетворіть введене значення з рядка на число, використовуючи parseInt або Number.
Перевірка введених даних:
- Переконайтеся, що користувач ввів коректне число.
Перевірка на високосний рік:
- Використайте умовні оператори для перевірки, чи є рік високосним.
Виведення результату:
- Використайте alert для виведення результату. 
*/

function leapYear() {
    let answer = prompt("Enter a year in 'yyyy' format to see if it is a leap year.");
    let num = Number.isInteger(Number(answer));
    let isLeap = Number(answer) % 4 == 0;

    if (answer.length == 4 && num) {
        if (isLeap) {
            alert(answer + " is a leap year!")
        } else {
            alert(answer + " is a standart year!")
        };
    } else {
        alert("Please enter a year in 'yyyy' format")
    };
};