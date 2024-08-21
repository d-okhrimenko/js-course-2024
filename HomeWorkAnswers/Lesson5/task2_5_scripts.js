// Завдання 2
// Написати програму, яка обчислює площу та периметр різних геометричних фігур (коло, прямокутник, трикутник).
//Кожна геометрична фігура повинна мати свою окрему функцію для обчислення площі та периметру.

function getNumericValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if (isValid) return Number(value);
  }
}

let figureType = prompt(
  "Виберіть фігуру для якої потрібно вичислити площу: трикутник, коло чи прямокутник"
);
if (figureType == "трикутник") {
  let firstSideOfTriangle = getNumericValue(
    "Введіть довжину першої сторони трикутника"
  );
  let secondSideOfTriangle = getNumericValue(
    "Введіть довжину другої сторони трикутника"
  );
  let thirdSideOfTriangle = getNumericValue(
    "Введіть довжину третьої сторони трикутника"
  );

  let getTrianglePerimeter = (
    firstSideOfTriangle,
    secondSideOfTriangle,
    thirdSideOfTriangle
  ) => firstSideOfTriangle + secondSideOfTriangle + thirdSideOfTriangle;
  let pt =
    getTrianglePerimeter(
      firstSideOfTriangle,
      secondSideOfTriangle,
      thirdSideOfTriangle
    ) / 2;

  let getTriangleArea = () =>
    Math.sqrt(
      pt *
        (pt - firstSideOfTriangle) *
        (pt - secondSideOfTriangle) *
        (pt - thirdSideOfTriangle)
    );

  console.log(pt);
  console.log(getTriangleArea());
  let trAreaAnswer = getTriangleArea();
  trAreaAnswer.toFixed(2);

  alert(
    `Периметр трикутника - ${getTrianglePerimeter(
      firstSideOfTriangle,
      secondSideOfTriangle,
      thirdSideOfTriangle
    )}; Площа трикутника ${trAreaAnswer.toFixed(2)};`
  );
} else if (figureType == "коло") {
  let radius = getNumericValue("Введіть радіус кола");
  let getCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
  let getCirclePerimeter = (radius) => 2 * Math.PI * radius;
  alert(
    `Площа кола - ${getCircleArea(radius).toFixed(
      2
    )}; Периметр кола - ${getCirclePerimeter(radius).toFixed(2)};`
  );
} else if (figureType == "прямокутник") {
  let rectangleHeight = getNumericValue("Введіть висоту прямокутника");
  let rectangleWidth = getNumericValue("Введіть ширину прямокутника");
  rectangleArea = rectangleHeight * rectangleWidth;
  rectanglePerimeter = 2 * (rectangleHeight + rectangleWidth);
  alert(
    `Площа прямокутника - ${rectangleArea}; Периметр прямокутника - ${rectanglePerimeter};`
  );
}
