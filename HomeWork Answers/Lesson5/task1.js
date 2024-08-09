function bmi(h, w){
    let res = w/ Math.pow(h, 2)
    return res.toFixed(1);
}
function toDetermineBmi(bmi) {
    if (bmi < 18.5) alert("Недостатня вага ІМТ: " + bmi);
    else if (bmi < 24.9 && bmi >= 18.5) alert("Нормальна вага ІМТ: " + bmi);
    else if (bmi < 29.9 && bmi >= 25) alert("Надмірна вага ІМТ: " + bmi);
    else  alert("Ожиріння ІМТ: " + bmi);
}
function func1() {
    let height = prompt("Введіть зріст");
    let weight = prompt("Введіть вагу");
    let result = bmi(height, weight);
    toDetermineBmi(result);
}