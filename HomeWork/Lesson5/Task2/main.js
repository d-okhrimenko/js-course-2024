// Formulas for Circle
let getCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
let getCirclePerimeter = (radius) => 2 * Math.PI * radius;

// Formulas for Rectangle
let getRectangleArea = (height, width) => height * width;
let getRectanglePerimeter = (height, width) => 2 * (height + width);

// Formulas for Triangle
let getTriangleArea = (a, b, c) => {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};
let getTrianglePerimeter = (a, b, c) => a + b + c;

// Get user input & figures parameters
let userInput = Number(
  prompt(
    "Оберіть фігуру для якої ви хочете обчислити площу і периметр. Щоб обрати коло введіть 1, прямокутник - 2,трикутник - 3."
  )
);

let radius, height, width, a, b, c;

function getParameters() {
  if (userInput === 1) {
    radius = Number(prompt("Введіть радіус кола в см"));
  } else if (userInput === 2) {
    height = Number(prompt("Введіть довжину прямокутника в см."));
    width = Number(prompt("Введіть ширину прямокутника в см."));
  } else if (userInput === 3) {
    a = Number(prompt("Введіть довжину першої сторони трикутника в см."));
    b = Number(prompt("Введіть довжину другої сторони трикутника в см."));
    c = Number(prompt("Введіть довжину третьої сторони трикутника в см."));
  }
}
getParameters();

// Calculate area & perimeter for chosen figures with chosen parameters
let area;
let perimeter;

function calculateResults() {
  if (userInput === 1) {
    area = Math.floor(getCircleArea(radius));
    perimeter = Math.floor(getCirclePerimeter(radius));
    alert(
      `Площа кола дорівнює ${area} см², периметр кола дорівнює ${perimeter} см.`
    );
  } else if (userInput === 2) {
    area = getRectangleArea(height, width);
    perimeter = getRectanglePerimeter(height, width);
    alert(
      `Площа прямокутника дорівнює ${area} см², периметр прямокутника дорівнює ${perimeter} см.`
    );
  } else if (userInput === 3) {
    area = Math.floor(getTriangleArea(a, b, c));
    perimeter = Math.floor(getTrianglePerimeter(a, b, c));
    alert(
      `Площа трикутника дорівнює ${area} см², периметр трикутника дорівнює ${perimeter} см.`
    );
  }
}
calculateResults();
