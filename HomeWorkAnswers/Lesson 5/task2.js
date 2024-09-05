// // Circle
// let circleRadius = +prompt("Put the radius");

// function circleArea (radius) {
//    return Math.PI * Math.pow(radius, 2);
// }

// console.log(circleArea(circleRadius));

// function circlePerimeter (radius) {
//    return 2 * Math.PI * radius;
// }

// console.log(circlePerimeter(circleRadius));

// // Rectangle
// let rectangleLength = +prompt("Put the length");
// let rectangleWidth = +prompt("Put the width");

// function rectangleArea(length, width) {
//     return length * width
// }

// console.log(rectangleArea(rectangleLength, rectangleWidth));

// function rectanglePerimeter(length, width) {
//     return 2 * (length + width)
// }

// console.log(rectanglePerimeter(rectangleLength, rectangleWidth));

// // Triangle
// let triangleLength1 = +prompt("Put the length of the first side");
// let triangleLength2 = +prompt("Put the length of the second side");
// let triangleLength3 = +prompt("Put the length of the third side");

// function  triangleArea(a, b, c) {
//     let p = (a + b + c) / 2;
//     return Math.sqrt(p * (p - a) * (p - b) * (p - c));
// }
// console.log(triangleArea(triangleLength1, triangleLength2, triangleLength3));

// function trianglePerimeter(a, b, c) {
//         return a + b + c
// }
// console.log(trianglePerimeter(triangleLength1, triangleLength2, triangleLength3));


// Запит користувача для вибору фігури
const shape = prompt("Choose the shape (circle, rectangle, triangle):").toLowerCase();

switch (shape) {
    case "circle":
        let circleRadius = +prompt("Put the radius:");
        
        let circleArea = Math.PI * Math.pow(circleRadius, 2);
        let circlePerimeter = 2 * Math.PI * circleRadius;
        
        alert(`Area of the circle: ${circleArea.toFixed(2)}\nPerimeter of the circle: ${circlePerimeter.toFixed(2)}`);
        break;
    
    case "rectangle":
        let rectangleLength = +prompt("Put the length of the rectangle:");
        let rectangleWidth = +prompt("Put the width of the rectangle:");
        
        let rectangleArea = rectangleLength * rectangleWidth;
        let rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
        
        alert(`Area of the rectangle: ${rectangleArea.toFixed(2)}\nPerimeter of the circle rectangle: ${rectanglePerimeter.toFixed(2)}`);
        break;
    
    case "triangle":
        let triangleLength1 = +prompt("Put the length of the first side:");
        let triangleLength2 = +prompt("Put the length of the second side:");
        let triangleLength3 = +prompt("Put the length of the third side:");
        
        let p = (triangleLength1 + triangleLength2 + triangleLength3) / 2;
        let triangleArea = Math.sqrt(p * (p - triangleLength1) * (p - triangleLength2) * (p - triangleLength3));
        let trianglePerimeter = triangleLength1 + triangleLength2 + triangleLength3;
        
        alert(`Area of the triangle: ${triangleArea.toFixed(2)}\nPerimeter of the triangle: ${trianglePerimeter.toFixed(2)}`);
        break;
    
    default:
        alert("Unknown shape. Please, choose a circle, a rectangle or a triangle).");
}