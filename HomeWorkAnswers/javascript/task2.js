//Введення величин
let date = new Date().getDay()
const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6
const sunday = 0
let typeDay;
//Обчислення
if (sunday === date)
	typeDay = 'Сьогодні Неділя!'
else if (monday === date)
	typeDay = 'Сьогодні Понеділок!'
else if (tuesday === date)
	typeDay = 'Сьогодні Вівторок!'
else if (wednesday === date)
	typeDay = 'Сьогодні Cереда!'
else if (thursday === date)
	typeDay = 'Сьогодні Четвер!'
else if (friday === date)
	typeDay = "'Сьогодні Пятниц'я!"
else if (saturday === date)
	typeDay = 'Сьогодні Суббота!'

document.write(`<h3>${typeDay}</h3>`)