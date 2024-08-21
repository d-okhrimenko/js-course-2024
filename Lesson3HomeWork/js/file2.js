document.querySelector(".btn").addEventListener("click", () => {
    const toDay = new Date();
    const dayOfWeek = toDay.getDay();

    let message;

    if (dayOfWeek === 0) {
        message = "Неділя";
    } else if (dayOfWeek === 1) {
        message = "Понеділок";
    } else if (dayOfWeek === 2) {
        message = "Вівторок";
    } else if (dayOfWeek === 3) {
        message = "Середа";
    } else if (dayOfWeek === 4) {
        message = "Четвер";
    } else if (dayOfWeek === 5) {
        message = "П'ятниця";
    } else if (dayOfWeek === 6) {
        message = "Субота";
    } else {
        message = "Невідомий день";
    }
    document.querySelector("#date").textContent = `Сьогодні - ${message}`;
});
