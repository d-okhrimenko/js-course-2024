let count = 0;
let winUser = 0;
let winComp = 0;
let nobody = 0;
let res = "";
let rounds = 3;
let userVariant, compVariant;
let inputVariant = ["1", "2", "3", "q"];

function getValue(message) {
	while (true) {
		let value = prompt(message);
		let isValid = !isNaN(value) && value !== "" && value !== null;
		if (isValid) return Number(value);
	}
}
function chooseVariant(value) {
	switch (value) {
		case 1:
			// console.log("Камінь");
			return "Камінь";
		case 2:
			// console.log("Ножиці");
			return "Ножиці";
		case 3:
			// console.log("Папір");
			return "Папір";
	}
}

rounds = getValue("Виберіть кількість раундів: ");

while (count < rounds) {
	let userChoice = prompt("Виберіть свій варіант (1-камінь, 2-ножиці, 3-папір, q - Вихід): ").toLowerCase();
	if (!inputVariant.includes(userChoice)) {
		alert("Неправильний вибір. Повторіть введення");
		continue;
	}

	if (userChoice == "q") {
		console.log("Натиснута кнопка 'q' - Вихід з гри за вибором ігрока");
		break;
	}
	if (userChoice !== "" && userChoice !== null) {
		let userChoiceNum = Number(userChoice);
		userVariant = chooseVariant(userChoiceNum);
		let compChoiceNum = Math.floor(Math.random() * 3) + 1;
		compVariant = chooseVariant(compChoiceNum);
		count++;

		if (userChoiceNum == compChoiceNum) {
			res = "Нічия";
			nobody++;
		} else if (
			(compChoiceNum === 1 && userChoiceNum === 2) || //Камінь б'є ножиці
			(compChoiceNum === 2 && userChoiceNum === 3) || //Ножиці б'ють папір
			(compChoiceNum === 3 && userChoiceNum === 1) //Папір б'є камінь
		) {
			res = "Виграв комп'ютер";
			winComp++;
		} else {
			res = "Виграла людина";
			winUser++;
		}
	} else {
		alert("Невірні значення, повторіть");
		continue;
	}

	alert(
		` Раунд № ${count}. \n Результат: ${res}. \n Людина "${userVariant}"  :  Комп'ютер "${compVariant}".   Нічия: ${nobody}`,
	);

	console.log(`Раунд № ${count}. Людина =  ${userVariant} Компютер = ${compVariant}`);
	console.log(`Раунд № ${count}. Результат: ${res}. Рахунок "Людина : Ком'пютер" =  ${winUser} : ${winComp}`);
}
let round = document.querySelector("#round");
	round.innerHTML = rounds; 		//Вибрано раундів для ігри
let play = document.querySelector("#play");
	play.innerHTML = count; 		//Фактично зіграних раундів
let user = document.querySelector("#user");
	user.innerHTML = winUser; 		//Кількість перемог людини
let comp = document.querySelector("#comp");
	comp.innerHTML = winComp; 		//Кількість перемог комп'ютера
let none = document.querySelector("#none");
	none.innerHTML = nobody; 		//Кількість Нічий

// let score = document.querySelector("#score");
// score.innerHTML = "Результат = 'Людина' " + winUser + ": 'Комп'ютер' " + winComp + " 'Нічия': " + nobody;
alert(
	`Гра скінчилась.\n\n Зіграно раундів = ${count}.\n Перемогла "Людина" =  ${winUser}\n Переміг "Комп'ютер" = ${winComp}\n "Нічия" = ${nobody}`,
);
