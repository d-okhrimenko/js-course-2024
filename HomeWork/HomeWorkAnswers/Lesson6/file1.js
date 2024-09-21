function avg(array) {
    let sum = 0;
    for (const value of array) {
        sum += value;
    }

    let aaa = sum / array.length;
    return aaa;
}

function max(array) {
    return Math.max(...array);
}

function min(array) {
    return Math.min(...array);
}

let evaluations = [88, 72, 56, 99, 74, 89, 51, 92, 59];
for (let index = 9; index < 12; index++) {
    let abc = +prompt("Введіть нову оцінку");
    evaluations.push(abc);
}

a = max(evaluations);
b = min(evaluations);
c = avg(evaluations).toFixed(2);

alert("Максимальне значення масиву - " + a);
alert("Мінімальне значення масиву - " + b);
alert("Середнє значення масиву - " + c);
