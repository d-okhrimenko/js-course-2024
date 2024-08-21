function min(array) {
    return Math.min(...array);
}

function max(array) {
    return Math.max(...array);
}

function sum(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function checkAllNumbers(array) {
    for (const number of array) {
        if (isNaN(number) || number < 0 || number > 100) {
            return false;
        }
    }

    return true;
}

let average = marks => marks.length ? sum(marks) / marks.length : 0;


let round = (number, precision) => {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}


let user = prompt("Введіть оцінки через пробіл");

if (user !== null && user !== "") {
    let marks = user.split(" ").map(Number);

    if (checkAllNumbers(marks)) {
        let avgMark = round(average(marks), 1);
        let minMark = min(marks);
        let maxMark = max(marks);
    
    
        alert(`Середній бал: ${avgMark}
Найвища оцінка: ${maxMark}
Найнижча оцінка: ${minMark}`);
    } else {
        alert("Оцінки мають бути цілими числами від 0 до 100");
    }
} else {
    alert("Ви нічого не ввели");
}
