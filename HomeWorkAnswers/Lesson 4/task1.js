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

rounds = getValue("Виберіть кількість раундів: ");

while (count < rounds) {
	let userChoice = prompt("Виберіть свій варіант (1-камінь, 2-ножиці, 3-папір, q - Вихід): ");
	if (!inputVariant.includes(userChoice)) {
		alert("Неправильний вибір. Повторіть введення");
		continue;
	}

	// let set = choose.replace(/\s+/g, "").toLowerCase();
	// let isValid = set !== "" && value !== null;
	// console.log(set);
	// while (choose !=="q") {
	//   let choose = getValue(
	//     "Виберіть свій варіант (0-камінь, 1-ножиці, 3-папір): "
	//   );
	// }
	//else
	if (userChoice == "q") {
		// alert(
		// 	`Гру закінчено \n Зіграно раундів = ${count}. \n Перемогла "Людина" =  ${winUser} \n Переміг "Комп'ютер" = ${winComp} \n "Ничія" = ${nobody}`,
		// );
		alert("Вихід");
		break;
	}
	if (userChoice !== "" && userChoice !== null) {
		let userChoiceNum = Number(userChoice);
		userVariant = chooseVariant(userChoiceNum);
		let compChoiceNum = Math.floor(Math.random() * 2) + 1;
		compVariant = chooseVariant(compChoiceNum);
		count++;

		if (userChoiceNum == compChoiceNum) {
			res = "Ничія";
			nobody++;
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
	alert(
		` Раунд № ${count}. \n Результат: ${res}. \n Людина "${userVariant}"  :  Компютер "${compVariant}".   Ничія: ${nobody}`,
	);

	console.log(`Раунд № ${count}. Людина =  ${userVariant} Компютер = ${compVariant}`);
	console.log(`Раунд № ${count}. Результат: ${res}. Рахунок "Людина:Компютер" =  ${winUser} : ${winComp}`);

	// let round = document.querySelector("#round");
	// round.innerHTML = "Кількість раундів: " + count;
	// let score = document.querySelector("#score");
	// score.innerHTML = "Результат = 'Людина' " + winUser + " : 'Комп'ютер' " + winComp + " 'Ничія': " + nobody;
}
let round = document.querySelector("#round");
round.innerHTML = "Вибрано раундів: " + rounds;
let play = document.querySelector("#play");
play.innerHTML = "Зіграно раундів: " + count;
let user = document.querySelector("#user");
user.innerHTML = count;
let comp = document.querySelector("#comp");
comp.innerHTML = count;

// let score = document.querySelector("#score");
// score.innerHTML = "Результат = 'Людина' " + winUser + ": 'Комп'ютер' " + winComp + " 'Ничія': " + nobody;
alert(
	`Гра скінчилась.\n\n Зіграно раундів = ${count}.\n Перемогла "Людина" =  ${winUser}\n Переміг "Комп'ютер" = ${winComp}\n "Ничія" = ${nobody}`,
);
