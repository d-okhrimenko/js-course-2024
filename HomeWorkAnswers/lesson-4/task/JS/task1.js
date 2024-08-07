alert('Гра: "Камінь, ножиці, папір"')
const rockPaperShears = ["камінь", "ножиці", "папір"];

let win = 0
let lost = 0
let draw = 0
let end = true
for (let i = 1; i <= 5; i++) {
	let computerChoice = rockPaperShears[Math.floor(Math.random() * rockPaperShears.length)];
	let userAnswer = prompt('Введіть щось з цього "камінь, ножиці чи папір"').toLowerCase();
	if ((userAnswer === 'камінь' && computerChoice === "ножиці") ||
		(userAnswer === 'ножиці' && computerChoice === "папір") ||
		(userAnswer === 'папір' && computerChoice === "камінь")) {
		alert("Ви виграли!")
		win++
		end = confirm("Продовжуємо гру?")
		if (end === false) {
			break
		}
	}
	else if (userAnswer === computerChoice) {
		alert("Однакові вибори.  Нічия!")
		draw++
		end = confirm("Продовжуємо гру?")
		if (end === false) {
			break
		}
	}
	else {
		alert("Ви програли!")
		lost++
		end = confirm("Продовжуємо гру?")
		if (end === false) {
			break
		}
	}
}
alert(`Кількість вийграшів ${win}, програшів ${lost} , нічиїх ${draw}`)


// else if (userAnswer === 'ножиці' && computerChoice === "папір") {
// 	result = "Ножиці б'ють папір.  Ви виграли!"
// 	win++
// }
// else if (userAnswer === 'папір' && computerChoice === "камінь") {
// 	result = "Папір б'є камінь.  Ви виграли!"
// 	win++
// }
// else if (userAnswer === computerChoice) {
// 	result = "Однакові вибори.  Нічия!"
// }
// else {
// 	result = "Програли!"
// }