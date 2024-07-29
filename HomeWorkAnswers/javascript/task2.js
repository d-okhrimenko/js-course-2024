//Введення величин
let date = new Date().getDay()
const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6
const sunday = 0

//Обчислення
if (sunday === date)
	alert('Сьогодні Неділя!')
else if (monday === date)
	alert('Сьогодні Понеділок!')
else if (tuesday === date)
	alert('Сьогодні Вівторок!')
else if (wednesday === date)
	alert('Сьогодні середа!')
else if (thursday === date)
	alert('Сьогодні Четвер!')
else if (friday === date)
	alert("Сьогодні Пятниц'я!")
else if (saturday === date)
	alert('Сьогодні Суббота!')
