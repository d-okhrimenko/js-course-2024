function calculateCircleAreaAndPerimeter(radius) {
    const area = Math.PI * radius * radius;
    const perimeter = 2 * Math.PI * radius;
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

function calculateRectangleAreaAndPerimeter(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

function calculateTriangleAreaAndPerimeter(a, b, c) {
    const perimeter = a + b + c;
    const p = perimeter / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return { area: area.toFixed(2), perimeter: perimeter.toFixed(2) };
}

function selectFigure() {
    const figure = prompt("Оберіть фігуру: коло, прямокутник або трикутник").toLowerCase();

    let result;
    switch (figure) {
        case 'коло':
            const radius = parseFloat(prompt("Введіть радіус кола:"));
            result = calculateCircleAreaAndPerimeter(radius);
            alert(`Площа кола: ${result.area}\nПериметр кола: ${result.perimeter}`);
            break;
        case 'прямокутник':
            const length = parseFloat(prompt("Введіть довжину прямокутника:"));
            const width = parseFloat(prompt("Введіть ширину прямокутника:"));
            result = calculateRectangleAreaAndPerimeter(length, width);
            alert(`Площа прямокутника: ${result.area}\nПериметр прямокутника: ${result.perimeter}`);
            break;
        case 'трикутник':
            const a = parseFloat(prompt("Введіть сторону a трикутника:"));
            const b = parseFloat(prompt("Введіть сторону b трикутника:"));
            const c = parseFloat(prompt("Введіть сторону c трикутника:"));
            result = calculateTriangleAreaAndPerimeter(a, b, c);
            alert(`Площа трикутника: ${result.area}\nПериметр трикутника: ${result.perimeter}`);
            break;
        default:
            alert("Неправильний вибір фігури. Спробуйте ще раз.");
    }
}