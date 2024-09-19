// Task 1
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// while (true) {
//     let value = +prompt('Put number from 1 till 100');
//     if (value === randomNumber) {
//         alert ('You won! I guessed number ' + value);
//         break;
//     } else if (value < randomNumber) {
//         alert ("No, I guessed number more than " + value);
//     } else {
//         alert ("No, I guessed number less than " + value);
//     }
// }

// Task 2
// let userPhrase = prompt('Put your phrase');

// let value = userPhrase.replace(/\s+/g, "").toLowerCase();
// let len = value.length;

// let isPalindrome = true;
// for (let i = 0; i < len / 2; i++) {
//     if (value[i] !== value[len - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// if (isPalindrome) {
//     alert ("Phrase " + userPhrase + " is a palindrome");
// } else {
//     alert ("Phrase " + userPhrase + " is NOT a palindrome");
// }

// Task 3
let start;
do {
    start = Number(prompt('Put the first number'));
    if (isNaN(start) || start === "" || start === null) {
        alert('Put the correct number');
    }
} while (isNaN(start) || start === "" || start === null);

let end;
do {
    end = Number(prompt('Put the last number'));
    if (isNaN(end) || end === "" || end === null) {
        alert('Put the correct number');
    } else if (end < start) {
        alert('The last number cannot be less than the first number');
    }
} while (isNaN(end) || end === "" || end === null || end < start);

let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
alert(`Sum of numbers from ${start} to ${end} is ${sum}`);
