function calculateCircle(radius) {
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);
    const perimeter = 2 * pi * radius;
    return { area, perimeter };
}

function calculateRectangle(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area, perimeter };
}

function calculateTriangle(a, b, c) {
    // Перевірка на правильність сторін трикутника
    if (a + b <= c || a + c <= b || b + c <= a) {
        return { area: NaN, perimeter: NaN };
    }

    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    const perimeter = a + b + c;
    return { area, perimeter };
}

function calculateShape() {
    const shape = prompt("Виберіть фігуру (коло, прямокутник, трикутник):").toLowerCase();

    let result;
    
    switch (shape) {
        case 'коло':
            const radius = parseFloat(prompt("Введіть радіус кола:"));
            if (isNaN(radius) || radius <= 0) {
                alert("Будь ласка, введіть коректний радіус.");
                return;
            }
            result = calculateCircle(radius);
            alert(`Площа кола: ${result.area.toFixed(2)}\nПериметр кола: ${result.perimeter.toFixed(2)}`);
            break;
        case 'прямокутник':
            const length = parseFloat(prompt("Введіть довжину прямокутника:"));
            const width = parseFloat(prompt("Введіть ширину прямокутника:"));
            if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
                alert("Будь ласка, введіть коректні значення довжини та ширини.");
                return;
            }
            result = calculateRectangle(length, width);
            alert(`Площа прямокутника: ${result.area.toFixed(2)}\nПериметр прямокутника: ${result.perimeter.toFixed(2)}`);
            break;
        case 'трикутник':
            const a = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
            const b = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
            const c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
            if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
                alert("Будь ласка, введіть коректні значення сторін трикутника.");
                return;
            }
            result = calculateTriangle(a, b, c);
            if (isNaN(result.area)) {
                alert("Введені сторони не можуть утворити трикутник.");
                return;
            }
            alert(`Площа трикутника: ${result.area.toFixed(2)}\nПериметр трикутника: ${result.perimeter.toFixed(2)}`);
            break;
        default:
            alert("Невірний вибір фігури. Будь ласка, виберіть 'коло', 'прямокутник' або 'трикутник'.");
    }
}
