// Ім'я, яке буде використане в привітанні
const name = "Андрій";

// Функція для відображення повідомлення з привітом
function sayHello() {
    alert(`Привіт, ${name}!`);
}

// Додаємо слухача події для кнопки
document.getElementById('greet-button').addEventListener('click', sayHello);
