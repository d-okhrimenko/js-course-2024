let correctAnswer = 0
let wrongAnswer = 0
let result = 0
for (let i = 1; i <= 6; i++) {
	const operators = ["+", "-", "*", "/"];
	const randomOperator = operators[Math.floor(Math.random() * operators.length)];
	const randomNum1 = Math.floor(Math.random() * 10) + 1;
	const randomNum2 = Math.floor(Math.random() * 10) + 1;
	let expression = `${randomNum1}  ${randomOperator}  ${randomNum2}`;
	// let solution = parseInt(randomNum1 + randomOperator + randomNum2);
	let answer = parseFloat(prompt(`Вкажіть правильну відповідь ${expression}`));
	switch (randomOperator) {
		case "+":
			result = randomNum1 + randomNum2
			break;
		case "-":
			result = randomNum1 - randomNum2
			break;
		case "*":
			result = randomNum1 * randomNum2
			break;
		case "/":
			result = randomNum1 / randomNum2
			break;
		default:
			break;
	}
	if (answer === result) {
		alert("Вірно")
		correctAnswer++
	}
	else {
		alert("Невірно")
		wrongAnswer++
	}
}
alert(`Кількість вірних відповідей: ${correctAnswer}`)
alert(`Кількість невірних відповідей: ${wrongAnswer}`)
