// Функція для обчислення площі та периметру кола
function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// Функція для обчислення площі та периметру прямокутника
function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Функція для обчислення площі та периметру трикутника
function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function trianglePerimeter(a, b, c) {
    return a + b + c;
}

// Запит вибору фігури у користувача
let figure = prompt("Виберіть фігуру: коло, прямокутник, трикутник");

let area, perimeter;

if (figure.toLowerCase() === "коло") {
    let radius = parseFloat(prompt("Введіть радіус кола:"));
    area = circleArea(radius);
    perimeter = circlePerimeter(radius);
} else if (figure.toLowerCase() === "прямокутник") {
    let length = parseFloat(prompt("Введіть довжину прямокутника:"));
    let width = parseFloat(prompt("Введіть ширину прямокутника:"));
    area = rectangleArea(length, width);
    perimeter = rectanglePerimeter(length, width);
} else if (figure.toLowerCase() === "трикутник") {
    let a = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
    let b = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
    let c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
    area = triangleArea(a, b, c);
    perimeter = trianglePerimeter(a, b, c);
} else {
    alert("Неправильний вибір фігури.");
}

if (area && perimeter) {
    alert("Площа: " + area.toFixed(2) + "\nПериметр: " + perimeter.toFixed(2));
}