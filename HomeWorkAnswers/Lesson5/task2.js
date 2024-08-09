const PI = Math.PI;
let perimeter;
let area;

let userFigure = prompt("Виберіть фігуру: коло, прямокутник чи трикутник");

let circleArea = radius => PI * radius * radius;

let circlePerimeter = radius => 2 * PI * radius;

let rectangleArea = (width, lenght) => width * lenght;

let rectanglePerimeter = (width, lenght) => 2 * (width + lenght);

let trianglePerimeter = (a, b, c) => a + b + c;

let triangleArea = function getTriangleArea(a, b, c){
    let perimetr = a + b + c;
    let area = Math.sqrt(perimetr * ((perimetr - a) * (perimetr - b) * (perimetr -c)));
    return area;
}

let truncateToTwo = num => Math.floor(num * 100) / 100;

function getParametersOfFigure(userFigure){
    switch(userFigure){
        case "коло":
            let radius = +prompt("Введіть радіус кола");

            perimeter = truncateToTwo(circlePerimeter(radius));
            area = truncateToTwo(circleArea(radius));
            return [perimeter, area, userFigure];
        case "прямокутник":
            let width = +prompt("Введіть ширину прямокутника");
            let height = +prompt("Введіть довжину прямокутника");

            perimeter = truncateToTwo(rectanglePerimeter(width, height));
            area = truncateToTwo(rectangleArea(width, height));
            return [perimeter, area, userFigure];
        case "трикутник":
            let sideA = +prompt("Введіть довжину сторони 'а'");
            let sideB = +prompt("Введіть довжину сторони 'в'");
            let sideC = +prompt("Введіть довжину сторони 'с'");
    
            perimeter = truncateToTwo(trianglePerimeter(sideA, sideB, sideC));
            area = truncateToTwo(triangleArea(sideA, sideB, sideC));
            return [perimeter, area, userFigure];
        default:
            alert("Невірний вибір");
    }
}

let parametersOfFigre = getParametersOfFigure(userFigure);

alert(`Фігура "${parametersOfFigre[2]}" має периметр ${parametersOfFigre[0]} та площу ${parametersOfFigre[1]}`);