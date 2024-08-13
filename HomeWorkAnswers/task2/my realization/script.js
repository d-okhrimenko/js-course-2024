function getSides(origin) {
    switch (origin) {
        case "triangle":
            side1 = parseInt(document.getElementById("side1").value)
            side2 = parseInt(document.getElementById("side2").value)
            side3 = parseInt(document.getElementById("side3").value)
        case "rectangle":
            width = parseInt(document.getElementById("width").value)
            height = parseInt(document.getElementById("height").value)
        case "circle":
            radius = parseInt(document.getElementById("radius").value)
    }
}



let side1;
let side2;
let side3;
function calculateTrianglePerimeter() {
    getSides("triangle")
    document.getElementById("perimeter_of_triangle").textContent = side1 + side2 + side3
    return side1 + side2 + side3
}

function calculateTriangleArea() {
    let perimeter = calculateTrianglePerimeter()

    document.getElementById("area_of_triangle").textContent = Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3)).toFixed(3)
}

function calculateTriangle() {
    calculateTriangleArea()
    calculateTrianglePerimeter()
}



let width;
let height;
function calculateRectanglePerimeter() {
    getSides("rectangle")
    document.getElementById("perimeter_of_rectangle").textContent = 2 * (height + width)
}

function calculateRectangleArea() {
    document.getElementById("area_of_rectangle").textContent = height * width
}

function calculateRectangle() {
    calculateRectanglePerimeter()
    calculateRectangleArea()
}



let radius;
function calculateCirclePerimeter() {
    getSides("circle")
    document.getElementById("perimeter_of_circle").textContent = (2 * Math.PI * radius).toFixed(3)
}

function calculateCircleArea() {
    getSides("circle")
    document.getElementById("area_of_circle").textContent = (Math.PI * Math.pow(radius, 2)).toFixed(3)
}

function calculateCircle() {
    calculateCircleArea()
    calculateCirclePerimeter()
}