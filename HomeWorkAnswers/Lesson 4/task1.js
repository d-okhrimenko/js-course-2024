// Завдання 1

// Гра: "Камінь, ножиці, папір"
// Опис гри:
// Користувач грає проти комп'ютера в класичну гру "Камінь, ножиці, папір".
// Програма запитує вибір користувача,
// генерує випадковий вибір для комп'ютера,
// визначає переможця та виводить результат.
// Кроки для виконання завдання:
// 1. Введення вибору користувача:
//    - Використайте `prompt` для запиту вибору користувача (камінь, ножиці, папір).
// 2. Генерація вибору комп'ютера:
//    - Використайте `Math.random()` для випадкового вибору між каменем, ножицями і папером.
// 3. Визначення переможця:
//    - Використайте умовні конструкції для визначення переможця за правилами гри:
//      - Камінь б'є ножиці.
//      - Ножиці б'ють папір.
//      - Папір б'є камінь.
//      - Однакові вибори - нічия.
// 4. Виведення результату:
//    - Використайте `alert` для виведення вибору користувача, вибору комп'ютера та результату гри.
// Додаткові завдання:
// 1. Додати можливість гри кілька раундів з підрахунком загального рахунку.
// 2. Додати можливість користувачеві вийти з гри за допомогою спеціальної команди
// (наприклад, введення "вихід")

// =================================================================
/* let choose = prompt("Введіть один з варіантів (камінь, ножиці, папір): ");
 
console.log(choose);
console.log(typeof choose); 
let set = choose.toLowerCase();
console.log(set);

if (set == "камінь" || set == "ножиці" || set == "папір") {
  res = set;
  console.log(choose + " " + set);
} else {
  alert("Введено некоректне значення");
}
*/
let count = 0;
let winUser = 0;
let winComp = 0;
let res = "";
let rounds = 3;
let userVariant, compVariant;
["1", "2", "3", "q"];

function chooseVariant(value) {
	switch (value) {
		case 1:
			console.log("Камінь");
			return "Камінь";
		case 2:
			console.log("Ножиці");
			return "Ножиці";
		case 3:
			console.log("Папір");
			return "Папір";
		// default:
		// 	alert("Повторіть введення");
	}
}

rounds = prompt("Виберіть кількість раундів: ");

while (count < rounds) {
	let userChoice = prompt("Виберіть свій варіант (1-камінь, 2-ножиці, 3-папір, q - Вихід): ").toLowerCase;
	// console.log(choose);
	// let set = choose.replace(/\s+/g, "").toLowerCase();
	// let isValid = set !== "" && value !== null;
	// console.log(set);
	// while (choose !=="q") {
	//   let choose = getValue(
	//     "Виберіть свій варіант (0-камінь, 1-ножиці, 3-папір): "
	//   );
	// }
	let isValid;
	if (userChoice == "q") {
		alert("Game over");
		break;
	} else if (userChoice !== "" && userChoice !== null) {
		let userChoiceNum = Number(userChoice);
		//console.log(userChoice, userChoiceNum);
		//console.log("user:" + chooseVariant(userChoiceNum));
		userVariant = chooseVariant(userChoiceNum);
		let compChoiceNum = Math.floor(Math.random() * 2) + 1;

		//console.log("comp:" + chooseVariant(compChoiceNum));
		compVariant = chooseVariant(compChoiceNum);
		count++;
		//console.log("№ спроби " + count);

		if (userChoiceNum == compChoiceNum) {
			alert("Ничія");
			res = "Ничія";
		} else if (
			(compChoiceNum === 1 && userChoiceNum === 2) ||
			(compChoiceNum === 2 && userChoiceNum === 3) ||
			(compChoiceNum === 3 && userChoiceNum === 1)
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
	//let output = document.querySelector("#output");
	//output.innerHTML = "Раунд №" + count;
	alert(`Рахунок "Людина" ${winUser} : "Компютер" ${winComp}.  Результат: ${res}.`);

	console.log(`Раунд № ${count}. Людина =  ${userVariant} Компютер = ${compVariant}`);
	console.log(`Раунд № ${count}. Результат: ${res}. Рахунок "Людина:Компютер" =  ${winUser} : ${winComp}`);

	let round = document.querySelector("#round");
	round.innerHTML = "Кількість раундів: " + count;
	let score = document.querySelector("#score");
	score.innerHTML = "Результат = 'Людина' " + winUser + " : 'Комп'ютер' " + winComp;
}
