let getCirclePerimeter = radius => 2 * Math.PI * radius;
let getCircleArea = radius => Math.PI * Math.pow(radius, 2);

let getRectanglePerimeter = (a, b) => 2 * (a + b);
let getRectangleArea = (a, b) => a * b;

let getTrianglePerimeter = (a, b, c) => a + b + c;
let getTriangleArea = (a, b, c) => {
    p = getTrianglePerimeter(a, b, c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};
    
let figure = prompt("Оберіть фігуру (коло, прямокутник, трикутник)");

let perimeter;
let area;

switch (figure) {
    case "коло":
        let radius = +prompt("Введіть радіус");
        perimeter = getCirclePerimeter(radius);        
        area = getCircleArea(radius);
        break;
    case "прямокутник":
        let width = +prompt("Введіть довжину");        
        let height = +prompt("Введіть ширину");
        perimeter = getRectanglePerimeter(width, height);        
        area = getRectangleArea(width, height);
        break;
    case "трикутник":
        let a = +prompt("Введіть 1 сторону");        
        let b = +prompt("Введіть 2 сторону");
        let c = +prompt("Введіть 3 сторону");
        perimeter = getTrianglePerimeter(a, b, c);        
        area = getTriangleArea(a, b, c);
        break;
};

alert(`${figure}
Периметр = ${perimeter}
Площа = ${area}`);