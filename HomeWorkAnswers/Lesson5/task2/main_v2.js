let inputContainer = document.querySelector(".input-container");
let resultElement = document.getElementById("result");

function clearInputs() {
  // Удаляем все элементы input
  let inputs = inputContainer.querySelectorAll("input");
  inputs.forEach((input) => input.remove());

  // Очищаем результат
  resultElement.textContent = "";
}

let circleAreaPerimeter = () => {
  clearInputs();

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "radius");
  input.setAttribute("placeholder", "Введіть радіус кола?");
  inputContainer.appendChild(input);

  let areaCircle = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  let perimeterCircle = (2 * Math.PI * radius).toFixed(2);

  resultElement.textContent = `Площа кола: ${areaCircle}\nПериметр кола: ${perimeterCircle}`;

  let calcButton = document.createElement("button");
  calcButton.textContent = "Розрахувати";
  inputContainer.appendChild(calcButton);

  calcButton.addEventListener("click", () => {
    let radius = parseFloat(input.value);
    if (isNaN(radius) || radius <= 0) {
      alert("Будь ласка, введіть коректний радіус");
      return;
    }

    let areaCircle = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    let perimeterCircle = (2 * Math.PI * radius).toFixed(2);

    resultElement.textContent = `Площа кола: ${areaCircle}\nПериметр кола: ${perimeterCircle}`;
  });
};

// document.getElementById("btnCircle").onclick = circleAreaPerimeter;

// let rectangleLength = Number(prompt("Введіть довжину прямокутника?"));
// let rectangleWidth = Number(prompt("Введіть ширину прямокутника?"));
// let rectangleAreaPerimeter = (length, width) => {
//   let areaRectangle = (length * width).toFixed(2);
//   let perimeterRectangle = (2 * (length + width)).toFixed(2);
//   alert(
//     `Площа прямокутника: ${areaRectangle}\nПериметр прямокутника: ${perimeterRectangle}`
//   );
//   return { areaRectangle, perimeterRectangle };
// };
// rectangleAreaPerimeter(rectangleLength, rectangleWidth);

// let triangleLengthSideA = Number(
//   prompt("Введіть довжину сторони трикутника А?")
// );
// let triangleLengthSideB = Number(
//   prompt("Введіть довжину сторони трикутника В?")
// );
// let triangleLengthSideC = Number(
//   prompt("Введіть довжину сторони трикутника С?")
// );
// let triangleAreaPerimeter = (sideA, sideB, sideC) => {
//   let _pivperimeter = ((sideA + sideB + sideC) / 2).toFixed(2);
//   let areaTriangle = Math.sqrt(
//     _pivperimeter *
//       (_pivperimeter - sideA) *
//       (_pivperimeter - sideB) *
//       (_pivperimeter - sideC)
//   ).toFixed(2);
//   let perimeterTriangle = sideA + sideB + sideC;
//   alert(
//     `Площа трикутника: ${areaTriangle}\nПериметр Трикутника: ${perimeterTriangle}`
//   );
//   return { areaTriangle, perimeterTriangle };
// };
// triangleAreaPerimeter(
//   triangleLengthSideA,
//   triangleLengthSideB,
//   triangleLengthSideC
// );

// alert("Ви ввели некоректне значення!");
