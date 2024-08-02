// Функція для форматування дати у виді дд/мм/рррр
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Місяці йдуть з 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Отримуємо поточну дату
const today = new Date();

// Отримуємо елемент з id="message"
const messageElement = document.getElementById('message');

// Вставляємо відформатовану дату в елемент, замінюючи попереднє повідомлення
messageElement.textContent = `Поточна дата: ${formatDate(today)}`;
console.log(today)


document.querySelector('#greetButton').onclick = function() {
    let outPut = document.querySelector('#output');
    const myName = 'Artem';
    outPut.innerHTML = `Hello, my name is ${myName}`;
    outPut.style.color = 'green';
}


const name = 'Artem'

function showGreeting() {
    console.log(`Hello, ${name}`);
    alert(`Hello, ${name}`);
}

document.getElementById('greetButton').addEventListener('click', showGreeting);