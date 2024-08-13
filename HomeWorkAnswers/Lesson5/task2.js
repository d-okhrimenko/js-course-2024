let circlePerimeter = (radius) => roundTo2(2 * Math.PI * radius);
let circleArea = (radius) => roundTo2(Math.PI * Math.pow(radius, 2));

let rectanglePerimeter = (a, b) => (a + b) * 2;
let rectangleArea = (a, b) => a * b;

let trianglePerimeter = (a, b, c) => a + b + c;
let P = (a, b, c) => (a + b + c) / 2;
let triangleArea = (a, b, c) =>
  roundTo2(
    Math.sqrt(
      P(a, b, c) * (P(a, b, c) - a) * (P(a, b, c) - b) * (P(a, b, c) - c)
    )
  );

while (true) {
  let figureType = prompt('Enter type of the figure:');
  showInfoPerFigure(figureType);

  if (figureType === 'exit' || figureType === null) break;
}

function showInfoPerFigure(figure) {
  switch (figure) {
    default:
      alert(`The ${figure} value is invalid. Try again.`);
      break;
    case 'circle':
    case '1':
      let r = getNumericValue('Enter radius:');
      alert(
        `Triangle: perimeter = ${circlePerimeter(r)} and area = ${circleArea(
          r
        )}.`
      );
      break;
    case 'rectangle':
    case '2':
      let a = getNumericValue('Enter a:');
      let b = getNumericValue('Enter b:');
      alert(
        `Rectangle: perimeter = ${rectanglePerimeter(
          a,
          b
        )} and area = ${rectangleArea(a, b)}.`
      );
      break;

    case 'triangle':
    case '3':
      let a3 = getNumericValue('Enter a:');
      let b3 = getNumericValue('Enter b:');
      let c3 = getNumericValue('Enter c:');
      alert(
        `Triangle: perimeter = ${trianglePerimeter(
          a3,
          b3,
          c3
        )} and area = ${triangleArea(a3, b3, c3)}.`
      );
      break;
  }
}

function roundTo2(num) {
  return Math.round(num * 100) / 100;
}
