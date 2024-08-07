let valueUser = 0;
let answerCorrect = 0;
let answerInCorrect = 0;

while (true) {
	let expression = ['+', '-', '*', '/'];
	expression = expression[Math.floor(Math.random() * expression.length)];

	let value1 = Math.floor(Math.random() * 10) + 1;
	let value2 = Math.floor(Math.random() * 10) + 1;

	let result = `${value1} ${expression} ${value2}`;

	valueUser = prompt(`Введіть результат: ${result}`);
	
	if (valueUser == 'вихід') {
		break;
	}
	
	result = eval(result)

	if (valueUser == result) {
		answerCorrect++;
	} else {
		answerInCorrect++;
	}
}

alert(
	`Правильних відповідей: ${answerCorrect}, неправильних: ${answerInCorrect}`
);
