const CIRCLE = 'коло';
const RECTANGLE = 'прямокутник';
const TRIANGLE = 'трикутник';

function getNumericValue(message) {
    while (true) {
        let value = prompt(message);
        if (!isNaN(value) && value !== "" && value !== null) {
            return Number(value);
        } else {
            alert('Будь, ласка введіть коректне число');
        }
    }
}

function getCirclParams() {
    let radius = getNumericValue('Вкажіть радіус (см)');
    return {
        perimeter: 2 * Math.PI * radius,
        area: Math.PI * Math.pow(radius, 2)
    };
}

function getRectangleParams() {
    let length = getNumericValue('Вкажіть довжину (см)');
    let width = getNumericValue('Вкажіть ширину (см)');
    return {
        perimeter: 2 * (width + length),
        area: width * length
    }
}

function getTriangleParams() {
    let edgeA = getNumericValue('Довжина сторони a (см)');
    let edgeB = getNumericValue('Довжина сторони b (см)');
    let edgeC = getNumericValue('Довжина сторони c (см)');

    if (!isTriangleExists(edgeA, edgeB, edgeC)) {
        alert(`Трикутник з такими сторонами не може існувати`);
        return null;
    }

    let perimeter = edgeA + edgeB + edgeC;
    let p = perimeter / 2;
    let area = Math.sqrt(p * (p - edgeA) * (p - edgeB) * (p - edgeC));
    return { perimeter, area };
}

function isTriangleExists(edge1, edge2, edge3) {
    return edge1 + edge2 > edge3 && edge2 + edge3 > edge1 && edge1 + edge3 > edge2;
}

function selectShape() {
    while (true) {
        let value = prompt('Виберіть фігуру: коло, прямокутник, трикутник');
        if (value == CIRCLE || value == RECTANGLE || value == TRIANGLE) {
            return value;
        } else {
            alert('Будь, ласка виберіть фігуру зі списку!');
        }
    }
}

function calculateShapeParameters(shape) {
    switch (shape) {
        case CIRCLE:
            return getCirclParams();
        case RECTANGLE:
            return getRectangleParams();
        case TRIANGLE:
            return getTriangleParams();
        default:
            return null;
    }
}

function displayResult(shape, parameters) {
    if (parameters) {
        alert(`Периметр ${shape}: ${parameters.perimeter.toFixed(1)} см; площа ${shape}: ${parameters.area.toFixed(1)} см²`);
    } else {
        start();
    }
}

function start() {
    let shape = selectShape();
    let parameters = calculateShapeParameters(shape);
    displayResult(shape, parameters)
}
start();
