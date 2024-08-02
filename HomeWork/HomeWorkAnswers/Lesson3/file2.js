let currentDate = new Date();
let today = currentDate.getDay();
console.log(today);

if (today == 0) {
    alert("Неділя");
}
else if (today == 1) {
    alert("Понеділок");
}
else if (today == 2) {
    alert("Вівторок");
}
else if (today == 3) {
    alert("Середа");
}
else if (today == 4) {
    alert("Четвер");
}
else if (today == 5) {
    alert("П'ятниця");
}
else {
    alert("Субота");
}




