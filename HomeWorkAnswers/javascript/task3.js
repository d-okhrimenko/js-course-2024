//Введення величин
let year = parseInt(prompt('Введіть рік'))
const aliquot = 4
let resultYear = year % aliquot
let leapYear;
//Обчислення
// Первірка чи змінна є числом
if (typeof year === 'number') {
	if (resultYear === 0)
		leapYear = 'Високосний рік!';
	else
		leapYear = 'Не високосний рік!';
}
else {

}

alert(leapYear)



