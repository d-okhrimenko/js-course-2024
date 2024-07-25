const currentDate = new Date();

const dayIndex = currentDate.getDay();

const weekDays = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];

// Використання індекса елемента масиву
// const todayDay = weekDays[dayIndex];
// alert(`Сьогодні ${todayDay}.`);

let message;

// Через if / else
if (dayIndex === 0) {
  message = `Сьогодні ${weekDays[dayIndex]}.`;
} else if (dayIndex === 1) {
  message = `Сьогодні ${weekDays[dayIndex]}.`;
} else if (dayIndex === 2) {
  message = `Сьогодні ${weekDays[dayIndex]}.`;
} else if (dayIndex === 3) {
  message = `Сьогодні ${weekDays[dayIndex]}.`;
} else if (dayIndex === 4) {
  message = `Сьогодні ${weekDays[dayIndex]}.`;
} else if (dayIndex === 5) {
  message = `Сьогодні ${weekDays[dayIndex]}.`;
} else if (dayIndex === 6) {
  message = `Сьогодні ${weekDays[dayIndex]}.`;
}

// Через switch / case
// switch (dayIndex) {
//   case 0:
//     message = `Сьогодні ${weekDays[dayIndex]}.`;
//     break;
//   case 1:
//     message = `Сьогодні ${weekDays[dayIndex]}.`;
//     break;
//   case 2:
//     message = `Сьогодні ${weekDays[dayIndex]}.`;
//     break;
//   case 3:
//     message = `Сьогодні ${weekDays[dayIndex]}.`;
//     break;
//   case 4:
//     message = `Сьогодні ${weekDays[dayIndex]}.`;
//     break;
//   case 5:
//     message = `Сьогодні ${weekDays[dayIndex]}.`;
//     break;
//   case 6:
//     message = `Сьогодні ${weekDays[dayIndex]}.`;
//     break;
// }

alert(message);
