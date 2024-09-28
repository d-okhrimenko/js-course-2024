

let today = new Date();

// Визначення дня тижня
let dayOfWeek = today.getDay();


if (dayOfWeek === 0) {
  alert("Сьогодні неділя");
} else if (dayOfWeek === 1) {
  alert("Сьогодні понеділок");
} else if (dayOfWeek === 2) {
  alert("Сьогодні вівторок");
} else if (dayOfWeek === 3) {
  alert("Сьогодні середа");
} else if (dayOfWeek === 4) {
  alert("Сьогодні четвер");
} else if (dayOfWeek === 5) {
  alert("Сьогодні п'ятниця");
} else if (dayOfWeek === 6) {
  alert("Сьогодні субота");
}