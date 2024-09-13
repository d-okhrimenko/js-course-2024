document.querySelector("#btn-t2").onclick = function () {
    weekDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
    let today = new Date
    alert("Сьогодні " + weekDays[today.getDay()])
}