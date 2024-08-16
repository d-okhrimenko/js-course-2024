function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function trianglePerimeter(a, b, c) {
    return a + b + c;
}

let figure = prompt("Виберіть фігуру (коло, прямокутник, трикутник):").toLowerCase();

let area, perimeter;

if (figure === "коло") {
    let radius = parseFloat(prompt("Введіть радіус кола:"));
    area = circleArea(radius);
    perimeter = circlePerimeter(radius);
} else if (figure === "прямокутник") {
    let length = parseFloat(prompt("Введіть довжину прямокутника:"));
    let width = parseFloat(prompt("Введіть ширину прямокутника:"));
    area = rectangleArea(length, width);
    perimeter = rectanglePerimeter(length, width);
} else if (figure === "трикутник") {
    let a = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
    let b = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
    let c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
    area = triangleArea(a, b, c);
    perimeter = trianglePerimeter(a, b, c);
} else {
    alert("Невідома фігура!");
}

if (area && perimeter) {
    alert("Площа: " + area.toFixed(2) + "\nПериметр: " + perimeter.toFixed(2));
}
