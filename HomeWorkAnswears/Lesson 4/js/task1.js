let game = Math.floor(Math.random() * 100) +1;
console.log(`число ${game}`);

let computerHand;
if (game <= 33) {
    computerHand = "камінь";
} else if (game > 33 && game <= 66) {
    computerHand = "ножиці";
} else {
    computerHand = "папір";
}
console.log("компьютер вибрав", computerHand);

let myHand = prompt("Введіть одне значення", "камінь, ножичі, папір");
console.log("ти вибрав", myHand);

if (myHand == "камінь" && computerHand == "ножиці") {
    console.log("Камінь б'є ножиці.");
} else if (myHand == "ножиці" && computerHand == "папір" ) {
    console.log("Ножиці б'ють папір.");
} else if (myHand == "папір" && computerHand == "камінь" ) {
    console.log("Папір б'є камінь.");
} else if (myHand == computerHand) {
    console.log("Однакові вибори - нічия.");
}



// - Камінь б'є ножиці.
// - Ножиці б'ють папір.
// - Папір б'є камінь.
// - Однакові вибори - нічия.