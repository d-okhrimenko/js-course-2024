let getCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
let getCirclePerimeter = (radius) => 2 * Math.PI * radius;

let getRectangleArea = (a, b) => a * b;
let getRectanglePerimeter = (a, b) => 2 * (a + b);

let getTriangleArea = (a, b, c) => {
  p = getTrianglePerimeter(a, b, c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};
let getTrianglePerimeter = (a, b, c) => a + b + c;

let figure = prompt("Оберіть фігуру - коло, прямокутник або трикутник");

let area;
let perimeter;

switch (figure) {
  case "коло":
    let radius = +prompt("Введіть радіус");
    area = getCircleArea(radius);
    perimeter = getCirclePerimeter(radius);
    break;
  case "прямокутник":
    let width = +prompt("Введіть довжину");
    let height = +prompt("Введіть ширинру");
    area = getRectangleArea(width, height);
    perimeter = getRectanglePerimeter(width, height);
    break;
  case "трикутник":
    let a = +prompt("Введіть 1 сторону");
    let b = +prompt("Введіть 2 сторону");
    let c = +prompt("Введіть 3 сторону");
    area = getTriangleArea(a, b, c);
    perimeter = getTrianglePerimeter(a, b, c);
    break;
}

alert(`${figure} Периметр = ${perimeter} Площа ${area}`);
