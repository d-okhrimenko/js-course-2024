// Task 1
let getCircleArea = radius => Math.PI * Math.pow(radius, 2);

function getCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

const radius = +prompt("Put the radius");
let area = getCircleArea(radius);
let perimeter = getCirclePerimeter(radius);

console.log(area);
console.log(perimeter);