let grades = [];

// закоментовано глючний код, не можу зрозуміти причини. Не відпрацьовує часто брейк.
// while (true) {
//     let value = Number(prompt("Введіть оцінку студента"));
//     grades.push(value);
//     let isValid = !isNaN(value) && value !== "" && value >= 0;
//     if (isValid == false) break;
// } 

while (true) {
    let value = Number(prompt("Введіть оцінку студента"));
    grades.push(value);
    if (isNaN(value)) { grades.pop(value); break; }
    else if (value < 1 || value > 100) { grades.pop(value); break; }
    else if (value == "") { grades.pop(value); break; }
}
console.log(grades.length);

function max(grades) {
    return Math.max(...grades);
}
console.log(max(grades));

function min(grades) {
    return Math.min(...grades);
}
console.log(min(grades));

function average(grades) {
    let sum = 0;
    for (const value of grades) {
        sum += value;
    }
    return sum / grades.length;
}
console.log(average(grades));
alert(`Максимальна оцінка ${max(grades)}, мінімальна оцінка ${min(grades)}, середній бал ${average(grades)}`)