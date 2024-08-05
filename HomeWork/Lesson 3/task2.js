let nowDate = new Date()
let today = document.querySelector("#today");
let day = document.querySelector("#day");

switch (nowDate.getDay()) {
    case 0:
        dayWeek = "Неділя";
        break;
    case 1:
        dayWeek = "Понеділок";
        break;
    case 2:
        dayWeek = "Вівторок";
        break;
    case 3:
        dayWeek = "Середа";
        break;
    case 4:
        dayWeek = "Четвер";
        break;
    case 5:
        dayWeek = "П'ятниця";
        break;
    case 6:
        dayWeek = "Субота";
        break;
}

today.innerHTML = nowDate.toDateString();
day.innerHTML = dayWeek;