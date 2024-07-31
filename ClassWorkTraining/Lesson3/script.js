// Task 1
// let myNumber1 = prompt("Put the first number");
// let myNumber2 = prompt("Put the second number");
// let myNumber3 = prompt("Put the third number");

// myNumber1 = parseFloat(myNumber1);
// myNumber2 = parseFloat(myNumber2);
// myNumber3 = parseFloat(myNumber3);

// let sum = myNumber1 + myNumber2 + myNumber3;
// let avg = sum / 3;

// console.log("The average sum is " + avg);

// Task 2
// let personBirthYear = +prompt("Put the year of your birth");
// let currentYear = new Date().getFullYear();

// let personAge = currentYear - personBirthYear;

// if (personAge >= 18) {
//     alert ("You are adult!");
// } else {
//     alert ("You are not adult!");
// }

// Task 3
let putTemp = document.getElementById('putTemp');
let btnToC = document.getElementById('btnToC');
let btnToF = document.getElementById('btnToF');
let output = document.getElementById('output');

btnToC.onclick = function() {
    let tempF = Number(putTemp.value);
    let tempC = 5/9 * (tempF - 32);

    output.innerHTML =  tempC;
}

btnToF.onclick = function() {
    let tempC = Number(putTemp.value);
    let tempF = 9 / 5 * tempC + 32;

    output.innerHTML =  tempF;
}