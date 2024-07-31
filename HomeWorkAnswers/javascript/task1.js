//Введення величин
let num1 = parseInt(prompt('Введіть число ', '0'))
let numEvent = 2
let result = num1 % numEvent
// Первірка чи змінна є числом
// if (typeof num1 === 'number')
// 	alert('Це число ');
// else
// 	alert('Це не число');

// //Перевірка на парне або не парне число
// if (num1 === result)
// 	alert('Число не парне')
// else
// 	alert('Число є парним')
// ------------------------------Другий варіант----------------------------------------
if (typeof num1 === 'number') {
	if (num1 === result) {
		alert('Число не парне')
	}
	else {
		alert('Число є парним')
	}
} else {
}
