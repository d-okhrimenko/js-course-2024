document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.getElementById('current-date');

    function updateCurrentDate() {
        const now = new Date();
        currentDateElement.textContent = now.toLocaleString('uk-UA');
        currentDateElement.classList.add('fade-in'); // Добавляем класс для анимации

        // Убираем класс через 1 секунду
        setTimeout(() => {
            currentDateElement.classList.remove('fade-in');
        }, 1000);
    }

    // Обновляем дату каждую секунду
    setInterval(updateCurrentDate, 1000);
    updateCurrentDate(); // Первоначальный вызов для отображения даты сразу

    // Обробка кліку по кнопці для открытия попапа
    const greetBtn = document.getElementById('greet-btn');
    const greetingElement = document.getElementById('greeting');

    greetBtn.addEventListener('click', function() {
        document.getElementById('popup').style.display = 'block'; // Открываем попап
    });

    // Обработка клика по кнопке сохранения имени
    document.getElementById('saveNameBtn').addEventListener('click', function() {
        const name = document.getElementById('nameInput').value; // Получаем значение из инпута
        if (name) {
            greetingElement.textContent = `Привіт, ${name}!`; // Отображаем приветствие
            greetingElement.classList.add('show'); // Добавляем класс для анимации

            // Скрываем попап
            document.getElementById('popup').style.display = 'none';

            // Убираем приветствие через 7 секунд
            setTimeout(() => {
                greetingElement.textContent = ''; // Очищаем приветствие
            }, 17000);
        }
    });
});
