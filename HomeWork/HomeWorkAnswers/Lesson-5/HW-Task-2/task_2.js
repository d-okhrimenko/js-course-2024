let circleAreaPerimeter = radius => {
    const area = Math.PI * Math.pow(radius, 2);
    const perimeter = 2 * Math.PI * radius;
    return { area, perimeter };
}

let rectangleAreaPerimeter = (length, width) => {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area, perimeter };
}

let triangleAreaPerimeter = (a, b, c) => {
    const perimeter = a + b + c;
    const semiPerimeter = perimeter / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    return { area, perimeter };
}

let getUserChoiceOfFigure = () => {
    while (true) {
        let userChoice = prompt("Оберіть тип фігури (коло/прямокутник/трикутник)").toLowerCase();
        let isValid = userChoice == "коло" || userChoice == "прямокутник" || userChoice == "трикутник";
        if (isValid) return userChoice;
    }

}

let validateInput = (...values) => {
    for (let value of values) {
        if (isNaN(value) || value <= 0) {
            return false;
        }
    }
    return true;
}

function showResult(figure, area, perimeter) {
    alert(`Фігура: ${figure}\nПлоща: ${area.toFixed(2)}\nПериметр: ${perimeter.toFixed(2)}`);
}

let figure = getUserChoiceOfFigure();
let result;

switch (figure) {
    case "коло":
        const radius = parseFloat(prompt("Введіть радіус кола:"));
        if (validateInput(radius)) {
            result = circleAreaPerimeter(radius);
            showResult("Коло", result.area, result.perimeter);
        } else {
            alert("Будь ласка, введіть коректний радіус.");
        }
        break;

    case "прямокутник":
        const length = parseFloat(prompt("Введіть довжину прямокутника:"));
        const width = parseFloat(prompt("Введіть ширину прямокутника:"));
        if (validateInput(length, width)) {
            result = rectangleAreaPerimeter(length, width);
            showResult("Прямокутник", result.area, result.perimeter);
        } else {
            alert("Будь ласка, введіть коректні значення для довжини та ширини.");
        }
        break;

    case "трикутник":
        const a = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
        const b = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
        const c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
        if (validateInput(a, b, c)) {
            result = triangleAreaPerimeter(a, b, c);
            showResult("Трикутник", result.area, result.perimeter);
        } else {
            alert("Будь ласка, введіть коректні значення для сторін трикутника.");
        }
        break;
}
