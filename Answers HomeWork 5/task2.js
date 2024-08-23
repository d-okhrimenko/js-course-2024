// Обчислення площі та периметру кола
function getCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
function getCirclePerimetr(radius) {
    return 2 * Math.PI * radius;
}

// Обчислення площі та периметру прямокутника
function getRectangleArea(length, width) {
    return length * width;
}
function getRectanglePerimetr(length, width) {
    return 2 * (length + width);
}

// Обчислення площі та периметру трикутника
function getTriangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
function getTrianglePerimetr(a, b, c) {
    return a + b + c;
}



// Результати обчислень кола
document.querySelector("#btnCircleArea").onclick = function resultCircleArea() {
    let circleArea = getCircleArea(Number(document.getElementById('CircleArea').value));
    document.querySelector('#resCircleArea').textContent = circleArea;
    //alert(circleArea);
}

document.querySelector("#btnCirclePerimetr").onclick = function resultCirclePerimetr() {
    let circlePerimetr = getCirclePerimetr(Number(document.getElementById('CirclePerimetr').value));
    document.querySelector('#resCirclePerimetr').textContent = circlePerimetr;
    // alert(circlePerimetr);
}

// Результати обчислень прямокутника
document.querySelector("#btnRectangleArea").onclick = function resultRectangleArea() {
    let rectangleArea = getRectangleArea(Number(document.getElementById('lengthArea').value), Number(document.getElementById('widthArea').value));
    document.querySelector('#resRectangleArea').textContent = rectangleArea;
    // alert(rectangleArea);
}

document.querySelector("#btnRectanglePerimetr").onclick = function resultRectanglePerimetr() {
    let rectanglePerimetr = getRectanglePerimetr(Number(document.getElementById('lengthPerimetr').value), Number(document.getElementById('widthPerimetr').value));
    document.querySelector('#resRectanglePerimetr').textContent = rectanglePerimetr;
    // alert(rectanglePerimetr);
}

// Результати обчислень трикутника
document.querySelector("#btnTriangleArea").onclick = function resultTriangleArea() {
    let triangleArea = getTriangleArea(Number(document.getElementById('sideA').value), Number(document.getElementById('sideB').value), Number(document.getElementById('sideC').value));
    document.querySelector('#resTriangleArea').textContent = triangleArea;
    // alert(triangleArea);
}

document.querySelector("#btnTrianglePerimetr").onclick = function resultTrianglePerimetr() {
    let trianglePerimetr = getTrianglePerimetr(Number(document.getElementById('sideA1').value), Number(document.getElementById('sideB1').value), Number(document.getElementById('sideC1').value));
    document.querySelector('#resTrianglePerimetr').textContent = trianglePerimetr;
    // alert(trianglePerimetr);
}
