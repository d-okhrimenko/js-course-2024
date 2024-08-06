let output = document.querySelector('#output');
let btn = document.querySelector('#btn');


btn.onclick = function () {
    let year = Number(document.querySelector('#year').value);
    while (isNaN(year)) {
        alert("Please, input the correct value!");
        year = Number(prompt("Enter a valid year:"));

    }
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        output.innerHTML = `The year ${year} is a leap year`;
    }
    else {
        output.innerHTML = `The year ${year} isn't a leap year`;
    }
}