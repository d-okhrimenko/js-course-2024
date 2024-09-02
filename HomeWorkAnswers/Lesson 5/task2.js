// Площа та периметр кола
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// Площа та периметр прямокутника
function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Площа та периметр трикутника
function calculateTriangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function calculateTrianglePerimeter(a, b, c) {
    return a + b + c;
}

function geometryCalculator() {
    const shape = prompt("Виберіть фігуру (коло, прямокутник, трикутник):").toLowerCase();

    let area, perimeter;

    switch (shape) {
        case "коло":
            const radius = parseFloat(prompt("Введіть радіус кола:"));
            if (isNaN(radius) || radius <= 0) {
                alert("Некоректне значення радіуса.");
                return;
            }
            area = calculateCircleArea(radius);
            perimeter = calculateCirclePerimeter(radius);
            break;

        case "прямокутник":
            const length = parseFloat(prompt("Введіть довжину прямокутника:"));
            const width = parseFloat(prompt("Введіть ширину прямокутника:"));
            if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
                alert("Некоректні значення для довжини або ширини.");
                return;
            }
            area = calculateRectangleArea(length, width);
            perimeter = calculateRectanglePerimeter(length, width);
            break;

        case "трикутник":
            const a = parseFloat(prompt("Введіть довжину сторони a:"));
            const b = parseFloat(prompt("Введіть довжину сторони b:"));
            const c = parseFloat(prompt("Введіть довжину сторони c:"));
            if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
                alert("Некоректні значення для сторін трикутника.");
                return;
            }
            area = calculateTriangleArea(a, b, c);
            perimeter = calculateTrianglePerimeter(a, b, c);
            break;

        default:
            alert("Невідома фігура.");
            return;
    }

    alert(`Фігура: ${shape}\nПлоща: ${area.toFixed(2)}\nПериметр: ${perimeter.toFixed(2)}`);
}

geometryCalculator();