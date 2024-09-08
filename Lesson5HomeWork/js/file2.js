function CalculationOfCircle(radius) {
    const pi = Math.PI;
    const area = pi * radius ** 2;
    const perimeter = 2 * pi * radius;
    return { area, perimeter };
}
function CalculationOfRectangle(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area, perimeter };
}
function CalculationOfTriangle(a, b, c) {
    const perimeter = a + b + c;
    const p = perimeter / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return { area, perimeter };
}

function CalculationOfFigure() {
    const figure = prompt("Виберіть фігуру: коло, прямокутник, трикутник");
    let result;
    switch (figure) {
        case "коло": {
            const radius = +prompt("Введіть радіус");
            result = CalculationOfCircle(radius);
            break;
        }
        case "прямокутник": {
            const length = +prompt("Введіть довжину");
            const width = +prompt("Введіть ширину");
            result = CalculationOfRectangle(length, width);
            break;
        }
        case "трикутник": {
            const a = +prompt("Введіть довжину сторони A трикутника:");
            const b = +prompt("Введіть довжину сторони B трикутника:");
            const c = +prompt("Введіть довжину сторони C трикутника:");
            result = CalculationOfTriangle(a, b, c);
            break;
        }
        default:
            alert("Виберіть правильну фігуру");
            return;
    }

    alert(
        `Фігура: ${figure} \nПериметр: ${result.perimeter} \nПлоща: ${result.area}`
    );

    document.querySelector("#figure").innerHTML = figure;

    document.querySelector("#perimeter").innerHTML =
        result.perimeter.toFixed(2);

    document.querySelector("#area").innerHTML = result.area.toFixed(2);
}

document.querySelector(".btn").addEventListener("click", () => {
    CalculationOfFigure();
});
