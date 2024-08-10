function calculateCircle(radius) {
    let circleArea = Math.PI * Math.pow(radius, 2);
    let circlePerimeter = 2 * Math.PI * radius;
    alert(`Circle area: ${circleArea}\nCircle perimeter: ${circlePerimeter}`);
}

function calculateRectangle(rectangleLength, rectangleWidth) {
    let rectangleArea = rectangleLength * rectangleWidth;
    let rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
    alert(`Rectangle area: ${rectangleArea}\nRectangle perimeter: ${rectanglePerimeter}`);
}

function calculateTriangle(firstSideLength, secondSideLength, thirdSideLength) {
    let trianglePerimeter = firstSideLength + secondSideLength + thirdSideLength;
    let p = trianglePerimeter / 2;
    let triangleArea = Math.sqrt(p * (p - firstSideLength) * (p - secondSideLength) * (p - thirdSideLength));
    alert(`Triangle area: ${triangleArea}\nTriangle perimeter: ${trianglePerimeter}`);
}

function askFigureType() {
    let userChoice = prompt("Which figure do you need?\nInput 'Circle', 'Rectangle' or 'Triangle'");
    if (userChoice === "Circle" || userChoice === "circle" || userChoice === "CIRCLE") {
        let radius = Number(prompt("Input radius:"));
        if (isNaN(radius)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            askFigureType();
            return;
        }
        calculateCircle(radius);
    } else if (userChoice === "Rectangle" || userChoice === "rectangle" || userChoice === "RECTANGLE") {
        let rectangleLength = Number(prompt("Input length:"));
        if (isNaN(rectangleLength)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            askFigureType();
            return;
        }
        let rectangleWidth = Number(prompt("Input width:"));
        if (isNaN(rectangleWidth)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            askFigureType();
            return;
        }
        calculateRectangle(rectangleLength, rectangleWidth);
    } else if (userChoice === "Triangle" || userChoice === "triangle" || userChoice === "TRIANGLE") {
        let firstSideLength = Number(prompt("Input first side length:"));
        if (isNaN(firstSideLength)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            askFigureType();
            return;
        }
        let secondSideLength = Number(prompt("Input second side length:"));
        if (isNaN(secondSideLength)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            askFigureType();
            return;
        }
        let thirdSideLength = Number(prompt("Input third side length:"));
        if (isNaN(thirdSideLength)) {
            alert("It is not a NUMBER. Please, input NUMBER!");
            askFigureType();
            return;
        }
        calculateTriangle(firstSideLength, secondSideLength, thirdSideLength);
    } else {
        alert("Wrong input value!\nPlease, input 'Circle', 'Rectangle' or 'Triangle'!");
        askFigureType();
    }
}

askFigureType();
