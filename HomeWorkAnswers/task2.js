
//Варіант1 

let today = new Date;
let dayOfWeek = today.getDay();
console.log(dayOfWeek);

if (dayOfWeek == 0) {
    alert("Привіт! Сьогодні - неділя");
}
if (dayOfWeek == 1) {
    alert("Привіт! Сьогодні - понеділок");
}
if (dayOfWeek == 2) {
    alert("Привіт! Сьогодні - вівторок");
}
if (dayOfWeek == 3) {
    alert("Привіт! Сьогодні - середа");
}
if (dayOfWeek == 4) {
    alert("Привіт! Сьогодні - четверг");
}
if (dayOfWeek == 5) {
    alert("Привіт! Сьогодні - п'ятниця");
}
if (dayOfWeek == 6) {
    alert("Привіт! Сьогодні - субота");
}


///Варіант 2

/*
let today = new Date;
const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
console.log(today);
alert("Привіт! Сьогодні - " + days[today.getDay()]);
*/

