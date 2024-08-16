let calculationAreaCircle = radius => (Math.PI * Math.pow(radius, 2)).toFixed(2);
let calculationPerimeterCircle = radius => (2 * Math.PI * radius).toFixed(2);


let calculationAreaRectangle = (length, width) => (length * width).toFixed(2);
let calculationPerimeterRectangle = (length, width) => (2 * (length + width)).toFixed(2);


let calculationAreaTriangle = (a, b, c) => {
    let p = (a + b + c) / 2;
    return (Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(2);
}
let calculationPerimeterTriangle = (a, b, c) => (a + b + c).toFixed(2);

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
    alert('площа фигури = ' + calculationAreaCircle(radius));
    alert('періметер фігури = ' + calculationPerimeterCircle(radius));
} else if (figure == 'прямокутник') {
    let length = getNumericValue('Введить довжину');
    let weight = getNumericValue('Введить ширину');
    alert('площа фигури = ' + calculationAreaRectangle(length, weight));
    alert('періметер фігури = ' + calculationPerimeterRectangle(length, weight));
} else {
    let a = getNumericValue('Введить довжину сторони a');
    let b = getNumericValue('Введить довжину сторони b');
    let c = getNumericValue('Введить довжину сторони c');
    alert('площа фигури = ' + calculationAreaTriangle(a, b, c));
    alert('періметер фігури = ' + calculationPerimeterTriangle(a, b, c));
}
