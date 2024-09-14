while (true) {
    askFigure();
}

function askFigure() {
    const figure = prompt("Choose a figure: circle - 1, rectangle - 2, or triangle - 3")?.toLowerCase();
    let area, perimeter, figureName;

    let result;
    if (figure === "1") {
        figureName = "circle";
        result = calcCircle(area, perimeter);
    } else if (figure === "2") {
        figureName = "rectangle";
        result = calcRectangle(area, perimeter);
    } else if (figure === "3") {
        figureName = "triangle";
        result = calcTriangle(area, perimeter);
    } else {
        result = "Invalid figure type. Please try again.";
        figureName = "Unknown";
    }

    alert(`Figure: ${figureName}\n` + result);
}

function calcCircle(area, perimeter) {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    if (!isParameterValid(radius)) {
        return "Invalid parameters! Enter a valid data";
    }
    area = Math.PI * Math.pow(radius, 2);
    perimeter = 2 * Math.PI * radius;
    return `Area: ${area.toFixed(2)}\nPerimeter: ${perimeter.toFixed(2)}`
}

function calcRectangle(area, perimeter) {
    const length = parseFloat(prompt("Enter the length of the rectangle:"));
    const width = parseFloat(prompt("Enter the width of the rectangle:"));
    if (!isParameterValid(length) || !isParameterValid(width)) {
        return "Invalid parameters! Enter a valid data";
    }
    area = length * width;
    perimeter = 2 * (length + width);
    return `Area: ${area.toFixed(2)}\nPerimeter: ${perimeter.toFixed(2)}`
}

function calcTriangle(area, perimeter) {
    const sideA = parseFloat(prompt("Enter the length of side A:"));
    const sideB = parseFloat(prompt("Enter the length of side B:"));
    const sideC = parseFloat(prompt("Enter the length of side C:"));
    if (!isParameterValid(sideA) || !isParameterValid(sideB) || !isParameterValid(sideC) ) {
        return "Invalid parameters! Enter a valid data";
    }
    const p = (sideA + sideB + sideC) / 2;
    area = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
    perimeter = sideA + sideB + sideC;
    return `Area: ${area.toFixed(2)}\nPerimeter: ${perimeter.toFixed(2)}`;
}

function isParameterValid(value) {
    return !(isNaN(value) || value <= 0);
}