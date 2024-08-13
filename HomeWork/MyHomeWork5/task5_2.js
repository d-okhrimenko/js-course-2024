let area;
let perimeter;

let calculationCircle = radius => {
    area = Math.PI * Math.pow(radius, 2);
    perimeter = 2 * Math.PI * radius;
}

let calculationRectangle = (length, width) => {
    area = length * width;
    perimeter = 2 * (length + width);
}

let calculationTriangle = (a, b, c) => {
    let p = (a + b + c) / 2;
    area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    perimeter = a + b + c;
}

function getFigure() {
    while (true) {
        let value = prompt('Вибреріть фігуру');
        let isValid = value == 'коло' || value == 'прямокутник' || value == 'трикутник';
        if (isValid) return value;
    }
}

let figure = getFigure();

if (figure == 'коло') {
    let radius = getNumericValue('Введіть радіус');
    let result = calculationCircle(radius);
} else if (figure == 'прямокутник') {
    let length = getNumericValue('Введить довжину');
    let weight = getNumericValue('Введить ширину');
    let result = calculationRectangle(length, weight);
} else {
    let a = getNumericValue('Введить довжину сторони a');
    let b = getNumericValue('Введить довжину сторони b');
    let c = getNumericValue('Введить довжину сторони c');
    let result = calculationTriangle(a, b, c);
}

alert('площа фигури = ' + area.toFixed(2));
alert('періметер фігури = ' + perimeter.toFixed(2));