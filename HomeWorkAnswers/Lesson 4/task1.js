let valueUser = '';
let result = '';
let countVictory = 0;
let countDraw = 0;
let countDefeat = 0;

while (true) {
	do {
		valueUser = prompt('Введіть камінь, ножиці, папір або вихід').toLowerCase();
	} while (
		valueUser !== 'камінь' &&
		valueUser !== 'ножиці' &&
		valueUser !== 'папір' &&
		valueUser !== 'вихід'
	)

	let valueComp = ['камінь', 'ножиці', 'папір'];
	valueComp = valueComp[Math.floor(Math.random() * valueComp.length)];

	switch (valueUser) {
		case 'камінь':
			if (valueComp === 'камінь') {
				result = 'нічия';
				countDraw++;
			} else if (valueComp === 'ножиці') {
				result = 'перемога';
				countVictory++;
			} else {
				result = 'поразка';
				countDefeat++;
			}
			break
		case 'ножиці':
			if (valueComp === 'ножиці') {
				result = 'нічия';
				countDraw++;
			} else if (valueComp === 'папір') {
				result = 'перемога';
				countVictory++;
			} else {
				result = 'поразка';
				countDefeat++;
			}
			break
		case 'папір':
			if (valueComp === 'папір') {
				result = 'нічия';
				countDraw++;
			} else if (valueComp === 'камінь') {
				result = 'перемога';
				countVictory++;
			} else {
				result = 'поразка';
				countDefeat++;
			}
			break
		default:
			break;
	}
	
	if (valueUser == 'вихід') {
		break;
	}

	alert(
		`Вибор користувача: ${valueUser}, вибор комп'ютера: ${valueComp}, результат: ${result}, перемоги: ${countVictory}, нічиї: ${countDraw}, поразки: ${countDefeat}`
	);
}