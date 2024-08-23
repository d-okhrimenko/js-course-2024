// Функція для обчислення площі та периметру кола
function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
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
    let p = (a + b + c) / 2;  // Напівпериметр
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function trianglePerimeter(a, b, c) {
    return a + b + c;
}

// Запит користувача на вибір фігури
let shape = prompt("Виберіть фігуру: коло, прямокутник, трикутник").toLowerCase();

let area, perimeter;

if (shape === "коло") {
    let radius = parseFloat(prompt("Введіть радіус кола:"));
    area = circleArea(radius);
    perimeter = circlePerimeter(radius);
} else if (shape === "прямокутник") {
    let length = parseFloat(prompt("Введіть довжину прямокутника:"));
    let width = parseFloat(prompt("Введіть ширину прямокутника:"));
    area = rectangleArea(length, width);
    perimeter = rectanglePerimeter(length, width);
} else if (shape === "трикутник") {
    let a = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
    let b = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
    let c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
    area = triangleArea(a, b, c);
    perimeter = trianglePerimeter(a, b, c);
} else {
    alert("Невірно вибрана фігура.");
}

// Виведення результату
if (area !== undefined && perimeter !== undefined) {
    alert("Площа: " + area.toFixed(2) + "\nПериметр: " + perimeter.toFixed(2));
}
