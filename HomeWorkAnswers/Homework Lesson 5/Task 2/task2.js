function calculateCircle() {
    let circleRadius = parseFloat(document.getElementById("circleRadius").value);
    if (isNaN(circleRadius) || circleRadius <= 0) {
        alert("Please input NUMBER!\nGreater than 0!");
        return;
    }
    let circleArea = Math.PI * Math.pow(circleRadius, 2);
    let circlePerimeter = 2 * Math.PI * circleRadius;
    document.getElementById("circleArea").innerText = circleArea.toFixed(2);
    document.getElementById("circlePerimeter").innerText = circlePerimeter.toFixed(2);
}

function calculateRectangle() {
    let rectangleLength = parseFloat(document.getElementById("rectangleLength").value);
    let rectangleWidth = parseFloat(document.getElementById("rectangleWidth").value);
    if (isNaN(rectangleLength) || rectangleLength <= 0 || isNaN(rectangleWidth) || rectangleWidth <= 0) {
        alert("Please input NUMBER!\nGreater than 0!");
        return;
    }
    let rectangleArea = rectangleLength * rectangleWidth;
    let rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
    document.getElementById("rectangleArea").innerText = rectangleArea.toFixed(2);
    document.getElementById("rectanglePerimeter").innerText = rectanglePerimeter.toFixed(2);
}

function calculateTriangle() {
    let a = parseFloat(document.getElementById("firstSideLength").value);
    let b = parseFloat(document.getElementById("secondSideLength").value);
    let c = parseFloat(document.getElementById("thirdSideLength").value);
    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0) {
        alert("Please input NUMBER!\nGreater than 0!");
        return;
    }
    let perimeter = a + b + c;
    let p = perimeter / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    document.getElementById("triangleArea").innerText = area.toFixed(2);
    document.getElementById("trianglePerimeter").innerText = perimeter.toFixed(2);
}
