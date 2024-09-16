function getCircleAreaAndPerimeter(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  let perimeter = 2 * Math.PI * radius;

  return {
    area: Math.floor(area),
    perimeter: Math.floor(perimeter),
  };
}

function getRectangleAreaAndPerimeter(length, width) {
  let area = length * width;
  let perimeter = 2 * (length + width);

  return {
    area: Math.floor(area),
    perimeter: Math.floor(perimeter),
  };
}

function getTriangleAreaAndPerimeter(a, b, c) {
  let perimeter = a + b + c;
  let p = perimeter / 2;
  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

  return {
    area: Math.floor(area),
    perimeter: Math.floor(perimeter),
  };
}

function calculateCircle() {
  const radius = document.getElementById("circleRadius").value;
  const result = getCircleAreaAndPerimeter(parseFloat(radius));
  document.getElementById(
    "circleResult"
  ).innerText = `Area: ${result.area}, Perimeter: ${result.perimeter}`;
}

function calculateRectangle() {
  const length = document.getElementById("rectLength").value;
  const width = document.getElementById("rectWidth").value;
  const result = getRectangleAreaAndPerimeter(
    parseFloat(length),
    parseFloat(width)
  );
  document.getElementById(
    "rectResult"
  ).innerText = `Area: ${result.area}, Perimeter: ${result.perimeter}`;
}

function calculateTriangle() {
  const a = document.getElementById("triA").value;
  const b = document.getElementById("triB").value;
  const c = document.getElementById("triC").value;
  const result = getTriangleAreaAndPerimeter(
    parseFloat(a),
    parseFloat(b),
    parseFloat(c)
  );
  document.getElementById(
    "triResult"
  ).innerText = `Area: ${result.area}, Perimeter: ${result.perimeter}`;
}
