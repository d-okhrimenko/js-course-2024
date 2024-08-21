while(true) {function getCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function getCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function getRectangleArea(length, width) {
    return length * width;
}

function getRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

function getTriangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function getTrianglePerimeter(a, b, c) {
    return a + b + c;
}

function chooseFigure(input) {
    while (true) {
        let figure = prompt(input);

        let isValid = figures.includes(figure);
        if (isValid) return figure;
        else {
            alert("Введіть коректне значення");
        }
    }
}

let figures = ["коло", "прямокутник", "трикутник"];

let shape = chooseFigure("Виберіть фігуру: коло, прямокутник, трикутник").toLowerCase();

if (shape === "коло") {
    let radius = getNumericValue("Введіть радіус кола");
    area = getCircleArea(radius);
    perimeter = getCirclePerimeter(radius);
}
else if (shape === "прямокутник") {
    let length = getNumericValue("Введіть довжину прямокутника");
    let width = getNumericValue("Введіть ширину прямокутника");
    area = getRectangleArea(length, width);
    perimeter = getRectanglePerimeter(length, width);
}
else if (shape === "трикутник") {
    let a = getNumericValue("Введіть довжину першої сторони трикутника");
    let b = getNumericValue("Введіть довжину другої сторони трикутника");
    let c = getNumericValue("Введіть довжину третьої сторони трикутника");
    area = getTriangleArea(a, b, c);
    perimeter = getTrianglePerimeter(a, b, c);
}

alert(`Фігура: ${shape} \nПлоща: ${area.toFixed(2)} \nПериметр: ${perimeter.toFixed(2)}`);}