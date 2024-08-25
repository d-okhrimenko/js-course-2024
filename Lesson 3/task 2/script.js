function checkDayOfWeek() {
    // Отримання поточної дати
    let today = new Date();

    // Визначення дня тижня
    let dayOfWeek = today.getDay();

    // Визначення дня тижня у вигляді тексту
    let dayName;
    switch (dayOfWeek) {
        case 0:
            dayName = "Неділя";
            break;
        case 1:
            dayName = "Понеділок";
            break;
        case 2:
            dayName = "Вівторок";
            break;
        case 3:
            dayName = "Середа";
            break;
        case 4:
            dayName = "Четвер";
            break;
        case 5:
            dayName = "П'ятниця";
            break;
        case 6:
            dayName = "Субота";
            break;
        default:
            dayName = "Невідомий день";
    }

    // Виведення результату
    document.getElementById("result").innerText = "Сьогодні " + dayName + ".";
}
