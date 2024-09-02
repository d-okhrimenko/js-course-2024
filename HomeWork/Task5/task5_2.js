function calculateCircleArea(radius) {
  const area = Math.PI * radius ** 2;
  const perimeter = 2 * Math.PI * radius;
  return { area, perimeter };
}

function calculateRectangleArea(length, width) {
  const area = length * width;
  const perimeter = 2 * (length + width);
  return { area, perimeter };
}

function calculateTriangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const perimeter = a + b + c;
  return { area, perimeter };
}

const figure = prompt("Выберите фигуру (круг, прямоугольник, треугольник):");

if (figure === "круг") {
  const radius = parseFloat(prompt("Введите радиус круга:"));
  const { area, perimeter } = calculateCircleArea(radius);
  console.log(`%cПлощадь круга: ${area.toFixed(2)}`, "color: red");
  console.log(`%cПериметр круга: ${perimeter.toFixed(2)}`, "color: red");
} else if (figure === "прямоугольник") {
  const length = parseFloat(prompt("Введите длину прямоугольника:"));
  const width = parseFloat(prompt("Введите ширину прямоугольника:"));
  const { area, perimeter } = calculateRectangleArea(length, width);
  console.log(`%cПлощадь прямоугольника: ${area.toFixed(2)}`, "color: red");
  console.log(`%cПериметр прямоугольника: ${perimeter.toFixed(2)}`, "color: red");
} else if (figure === "треугольник") {
  const a = parseFloat(prompt("Введите длину стороны A треугольника:"));
  const b = parseFloat(prompt("Введите длину стороны B треугольника:"));
  const c = parseFloat(prompt("Введите длину стороны C треугольника:"));
  const { area, perimeter } = calculateTriangleArea(a, b, c);
  console.log(`%cПлощадь треугольника: ${area.toFixed(2)}`, "color: red");
  console.log(`%cПериметр треугольника: ${perimeter.toFixed(2)}`, "color: red");
} else {
  console.log("%cНекорректный выбор фигуры", "color: red");
}
