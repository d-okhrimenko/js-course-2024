//Введення величин
let year = parseInt(prompt('Введіть рік'))
const aliquot = 4
let resultYear = year % aliquot
//Обчислення
// Первірка чи змінна є числом
if (typeof year === 'number')
	alert('Це число ');
else
	alert('Це не число');

//Перевірка на високосний рік
if (resultYear === 0)
	alert('Високосній рік!')
else
	alert('Не високосній рік!')