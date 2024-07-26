//  2.Створіть сторінку яка виводить на екран поточну дату. Наступний JS код виводить поточну дату - new Date()

function receiveDate() {
    let today = new Date();
    let currentDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    alert("Date: " + currentDate + "\n" + "Time: " + time);
};

// 3.Створіть кнопку на сторінці з текстом "Скажи привіт", зробіть щоб при кліку по кнопці виводилося повідомлення "Привіт {name}" де замість {name} буде виводитися ваше ім'я.

function sayName() {
    let name = "Olya";

    alert("Hello, " + name + "!");
};
