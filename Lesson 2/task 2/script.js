// Функція для відображення поточної дати
function displayCurrentDate() {
    const dateContainer = document.getElementById('date-container');
    
    // Отримуємо поточну дату
    const currentDate = new Date();
    
    // Форматуємо дату як рядок
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('uk-UA', options);
    
    // Виводимо дату в консоль
    console.log("Поточна дата:", formattedDate);
    
    // Виводимо дату в контейнер на сторінці
    dateContainer.textContent = `Сьогодні ${formattedDate}`;
}

// Виклик функції для відображення дати при завантаженні сторінки
window.onload = displayCurrentDate;
