/*
Завдання 2
Написати програму, яка визначає, який сьогодні день тижня, і виводить відповідне повідомлення.

Кроки для виконання завдання:
Отримання поточної дати:
- Використайте об'єкт Date для отримання поточної дати.
Визначення дня тижня:
- Використайте метод getDay() об'єкта Date для отримання дня тижня (0 для неділі, 1 для понеділка і т.д.).
Виведення результату:
- Використайте оператор if для визначення дня тижня і виведення відповідного повідомлення.
*/

function weekDay() {
    let today = new Date();
    let day = today.getDay();

    if (day == 0) {
        alert("Today is Sunday")
    } else if (day == 1) {
        alert("Today is Monday")
    } else if (day == 2) {
        alert("Today is Tuesday")
    } else if (day == 3) {
        alert("Wednesday")
    } else if (day == 4) {
        alert("Today is Thursday")
    } else if (day == 5) {
        alert("Today is Friday")
    } else if (day == 6) {
        alert("Today is Saturday")
    };
};

/*
Solution 2:

function weekDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date();
    let day = days[today.getDay()];

    alert("Today is " + day);
};
*/

