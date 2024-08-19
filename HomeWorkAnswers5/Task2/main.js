function circleAreaAndPerimeter(radius) {
    let aria = Math.PI * radius * radius;
    let perimeter = Math.PI * 2 * radius;
    alert(`The aria of the circle is ${aria} and perimeter is ${perimeter}`);
}

function rectangleAreaAndPerimeter(length, width) {
    let aria = length * width;
    let perimeter = 2 * (length + width);
    alert(`The aria of the rectangle is ${aria} and perimeter is ${perimeter}`);
}

function triangleAreaAndPerimeter(a, b, c) {
    let perimeter = a + b + c;
    let p = perimeter / 2;
    let aria = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    alert(`The aria of the triangle is ${aria} and perimeter is ${perimeter}`);
}

let request = prompt("Choose figure for calculation area and perimeter: circle, rectangle or triangle");

switch (request) {
    case "circle":
        let radius = +prompt("Input the radius of the circle");
        circleAreaAndPerimeter(radius);
        break;
    case "rectangle":
        let length = +prompt("Input the lenth of the rectangle");
        let width = +prompt("Input the width of the rectangle");
        rectangleAreaAndPerimeter(length, width);
        break;
    case "triangle":
        let a = +prompt("Input side A of triangle");
        let b = +prompt("Input side B of triangle");
        let c = +prompt("Input side C of triangle");
        triangleAreaAndPerimeter(a, b, c);
        break;
}