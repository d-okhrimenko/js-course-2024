// Обчислюємо площу і периметр кола:
function calculateCircle(radius) {
    let circleArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    let circlePerimetr = (2 * Math.PI * radius).toFixed(2);
    return `Площа кола - ${circleArea} \nПериметр кола - ${circlePerimetr}`;
}
// Обчислюємо площу і периметр прямокутника:
function calculateRectangle(rectangleLength, rectangleWidth) {
    let rectangleArea = rectangleLength * rectangleWidth;
    let rectanglePerimetr = 2 * (rectangleLength + rectangleWidth);
    return `Площа прямокутника - ${rectangleArea} \nПериметр прямокутника - ${rectanglePerimetr}`;
}
// Обчислюємо площу і периметр трикутника:
function calculateTriangle(side1, side2, side3) {
    let trianglePerimetr = side1 + side2 + side3;
    let halfPerimetr = trianglePerimetr / 2
    let triangleArea = (Math.sqrt(halfPerimetr * (halfPerimetr - side1) * (halfPerimetr - side2) * (halfPerimetr - side3))).toFixed(2);
    return `Площа трикутника - ${triangleArea} \nПериметр трикутника - ${trianglePerimetr}`;
}
// Приймаємо введені користувачем дані і виводим результат для кола
document.querySelector("#btnCircle").onclick = function () {
    const radius = getNumericValue("Введіть радіус кола");
    let circleResult = calculateCircle(radius);
    alert(`${circleResult}`);
}
// Приймаємо введені користувачем дані і виводим результат для прямокутника
document.querySelector("#btnRectangle").onclick = function () {
    const rectangleLength = getNumericValue("Введіть довжину прямокутника");
    const rectangleWidth = getNumericValue("Введіть ширину прямокутника");
    let rectangerResult = calculateRectangle(rectangleLength, rectangleWidth);
    alert(`${rectangerResult}`);
}
// Приймаємо введені користувачем дані і виводим результат для трикутника
document.querySelector("#btnTriangle").onclick = function () {
    const side1 = getNumericValue("Введіть довжину першої сторони трикутника");
    const side2 = getNumericValue("Введіть довжину другої сторони трикутника");
    const side3 = getNumericValue("Введіть довжину третьої сторони трикутника");
    let triangleResult = calculateTriangle(side1, side2, side3);
    alert(`${triangleResult}`);
}