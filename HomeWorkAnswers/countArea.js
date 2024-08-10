function calculateCircle(radius) {
    const pi = Math.PI;
    const circleArea = Math.floor(pi * radius * radius);
    const circlePerimeter = Math.floor(2 * pi * radius);
    return { circleArea, circlePerimeter };
}

function calculateRectangle (length, width) {
    const rectangleArea = Math.floor(length * width);
    const rectanglePerimeter = Math.floor(2 * (length + width));
    return { rectangleArea, rectanglePerimeter };
}

function calculateTriangle (lengthA, lengthB, lengthC) {
    const p = (lengthA + lengthB + lengthC) / 2;
    const triangleArea = Math.floor(Math.sqrt(p * (p - lengthA) * (p - lengthB) * (p - lengthC)));
    const trianglePerimeter = Math.floor(lengthA + lengthB + lengthC);
    return { triangleArea, trianglePerimeter };
}

function getValidValue(promptMessage) {
    let value;
    do {
        value = +prompt(promptMessage);
    } while (isNaN(value) || value <= 0);
    return value;
}

function getValidTriangleSides () {
    let sideA, sideB, sideC;
    do {
        sideA = getValidValue('Enter the length of the first side of the triangle:');
        sideB = getValidValue('Enter the length of the second side of the triangle:');
        sideC = getValidValue('Enter the length of the third side of the triangle:');
        
        if (!(sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA)) {
            alert('The given sides do not form a valid triangle. Please enter valid side lengths.');
        }
    } while (!(sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA));
    return { sideA, sideB, sideC };
}

let figureShape = prompt('please choose one of the figures: circle, rectangle, triangle');

let result;

switch (figureShape) {
    case 'circle':
        const radius = getValidValue('Enter the radius');
        result = calculateCircle(radius);
        alert(`Circle area is: ${result.circleArea}, circle perimeter is: ${result.circlePerimeter}`);
        break;
    
    case 'rectangle':
        const length = getValidValue('Enter the length of the rectangle');
        const width = getValidValue('Enter the width of the rectangle');
        result = calculateRectangle(length, width);
        alert(`Rectangle area is: ${result.rectangleArea}, rectangle perimeter is: ${result.rectanglePerimeter}`);
        break;

    case 'triangle':
        const { sideA, sideB, sideC } = getValidTriangleSides();
        result = calculateTriangle(sideA, sideB, sideC);
        alert(`Triangle area is: ${result.triangleArea}, triangle perimeter is: ${result.trianglePerimeter}`);
        break;

        default:
            alert('Invalid shape type. Please choose circle, rectangle, or triangle.');
}