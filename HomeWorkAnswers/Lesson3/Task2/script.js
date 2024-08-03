document.querySelector("#today").innerHTML = new Date();
document.querySelector("#btn").onclick = function () {
    let day = new Date().getDay();
    let dayName = document.querySelector("#dayName");
    if (day === 0) {
        dayName.innerHTML = "Неділя";
    } else if (day === 1) {
        dayName.innerHTML = "Понеділок";
    } else if (day === 2) {
        dayName.innerHTML = "Вівторок";
    } else if (day === 3) {
        dayName.innerHTML = "Середа";
    } else if (day === 4) {
        dayName.innerHTML = "Четвер";
    } else if (day === 5) {
        dayName.innerHTML = "П'ятниця";
    } else if (day === 6) {
        dayName.innerHTML = "Субота";
    }
}