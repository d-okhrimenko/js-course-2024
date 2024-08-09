let choice = +prompt(
  'Виберіть цифру, якої відповідає фігура?\n"1" - Коло\n"2" - Прямокутник\n"3" - Трикутник'
);

if (choice === 1) {
  let circleRadius = Number(prompt("Введіть радіус кола?"));
  let circleAreaPerimeter = (radius) => {
    let areaCircle = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    let perimeterCircle = (2 * Math.PI * radius).toFixed(2);
    alert(`Площа кола: ${areaCircle}\nПериметр кола: ${perimeterCircle}`);
    return { areaCircle, perimeterCircle };
  };
  circleAreaPerimeter(circleRadius);
} else if (choice === 2) {
  let rectangleLength = Number(prompt("Введіть довжину прямокутника?"));
  let rectangleWidth = Number(prompt("Введіть ширину прямокутника?"));
  let rectangleAreaPerimeter = (length, width) => {
    let areaRectangle = (length * width).toFixed(2);
    let perimeterRectangle = (2 * (length + width)).toFixed(2);
    alert(
      `Площа прямокутника: ${areaRectangle}\nПериметр прямокутника: ${perimeterRectangle}`
    );
    return { areaRectangle, perimeterRectangle };
  };
  rectangleAreaPerimeter(rectangleLength, rectangleWidth);
} else if (choice === 3) {
  let triangleLengthSideA = Number(
    prompt("Введіть довжину сторони трикутника А?")
  );
  let triangleLengthSideB = Number(
    prompt("Введіть довжину сторони трикутника В?")
  );
  let triangleLengthSideC = Number(
    prompt("Введіть довжину сторони трикутника С?")
  );
  let triangleAreaPerimeter = (sideA, sideB, sideC) => {
    let _pivperimeter = ((sideA + sideB + sideC) / 2).toFixed(2);
    let areaTriangle = Math.sqrt(
      _pivperimeter *
        (_pivperimeter - sideA) *
        (_pivperimeter - sideB) *
        (_pivperimeter - sideC)
    ).toFixed(2);
    let perimeterTriangle = sideA + sideB + sideC;
    alert(
      `Площа трикутника: ${areaTriangle}\nПериметр Трикутника: ${perimeterTriangle}`
    );
    return { areaTriangle, perimeterTriangle };
  };
  triangleAreaPerimeter(
    triangleLengthSideA,
    triangleLengthSideB,
    triangleLengthSideC
  );
} else {
  alert("Ви ввели некоректне значення!");
}
