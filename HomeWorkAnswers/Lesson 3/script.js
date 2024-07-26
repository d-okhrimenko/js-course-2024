// Task 1
// let userNumber = prompt('Put your number');
// userNumber = parseInt(userNumber);

// if (!isNaN(userNumber)) {
//     if (userNumber % 2 === 0) {
//         alert("Number is even");
//     } else {
//         alert("Number is odd");
//     }
// } else {
//     alert ("Put the correct number");
// }

// Task 2
let todayDate = document.getElementById('todayDate');
let btnCheck = document.getElementById('btnCheck');
let output = document.getElementById('output');

btnCheck.onclick = function() {
    todayDate = new Date().getDay();
    if (todayDate === 0) {
        output.innerHTML = "Today is Sunday";
    } else if (todayDate === 1) {
            output.innerHTML = "Today is Monday";
    } else if (todayDate === 2) {
        output.innerHTML = "Today is Tuesday";
    } else if (todayDate === 3) {
            output.innerHTML = "Today is Wednesday";
    } else if (todayDate === 4) {
        output.innerHTML = "Today is Thursday";
    } else if (todayDate === 5) {
            output.innerHTML = "Today is Friday";
    } else {
        output.innerHTML = "Today is Saturday";
    }   
}


