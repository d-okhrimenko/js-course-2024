function areaAndPerimeterCalculateProgram() {
  const circle = "коло";
  const rectangle = "прямокутник";
  const triangle = "трикутник";

  const calculateCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
  const calculateCirclePerimeter = (radius) => 2 * Math.PI * radius;

  const calculateRectangleArea = (length, width) => length * width;
  const calculateRectanglePerimeter = (length, width) => 2 * (length + width);

  const calculateTrianglePerimeter = (a, b, c) => a + b + c;
  const calculateTriangleArea = (a, b, c) => {
    if (a + b <= c || a + c <= b || b + c <= a) {
      alert("Неправильні параметри трикутника!");
    }
    const p = calculateTrianglePerimeter(a, b, c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  };

  const output = (figure, area, perimeter) => `Ваш вибір - ${figure}\nПлоща - ${area}\nПериметр - ${perimeter}`;

  const selectedFigure = validateInput(`1 - ${circle}\n2 - ${rectangle}\n3 - ${triangle}\n\nОберіть фігуру:`);

  switch (selectedFigure) {
    case 1:
      const radius = validateInput("Введіть радіус:")
      alert(output(circle, calculateCircleArea(radius).toFixed(3), calculateCirclePerimeter(radius).toFixed(3)));
      break;
    case 2:
      const length = validateInput("Введіть довжину:");
      const width = validateInput("Введіть ширину:");
      alert(output(rectangle, calculateRectangleArea(length, width), calculateRectanglePerimeter(length, width)));
      break;
    case 3:
      let sideA, sideB, sideC, triangleArea;

      do {
        sideA = validateInput("Введіть довжину сторони A:");
        sideB = validateInput("Введіть довжину сторони B:");
        sideC = validateInput("Введіть довжину сторони C:");
        triangleArea = calculateTriangleArea(sideA, sideB, sideC);
      } while (isNaN(triangleArea) || Math.abs(triangleArea) <= 0);

      alert(output(triangle, triangleArea.toFixed(3), calculateTrianglePerimeter(sideA, sideB, sideC)));
      break;
    default: alert("Невірний вибір!")
  }

  function validateInput(message) {
    while (true) {
      let input = prompt(message);

      if (input === null) {
        alert("Ввід скасовано.\nЗавершення програми...");
        throw new Error("Input cancelled.");
      }

      if (input === "" || isNaN(Number(input))) {
        alert("Некоректний ввід!\nВедіть числове значення.");
      } else if (Number(input) <= 0) {
        alert("Некоректний ввід!\nВведіть число > 0.")
      } else {
        return Number(input);
      }
    }
  };
};