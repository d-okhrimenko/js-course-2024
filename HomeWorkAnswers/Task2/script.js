document.getElementById("figure").addEventListener("change", function () {
  const figure = this.value;
  const parametersDiv = document.getElementById("parameters");
  parametersDiv.innerHTML = "";

  if (figure === "circle") {
    parametersDiv.innerHTML = `
            <label for="radius">Радіус (r):</label>
            <input type="number" id="radius" placeholder="Радіус">
        `;
  } else if (figure === "rectangle") {
    parametersDiv.innerHTML = `
            <label for="length">Довжина (a):</label>
            <input type="number" id="length" placeholder="Довжина">
            <label for="width">Ширина (b):</label>
            <input type="number" id="width" placeholder="Ширина">
        `;
  } else if (figure === "triangle") {
    parametersDiv.innerHTML = `
            <label for="sideA">Сторона a:</label>
            <input type="number" id="sideA" placeholder="Сторона a">
            <label for="sideB">Сторона b:</label>
            <input type="number" id="sideB" placeholder="Сторона b">
            <label for="sideC">Сторона c:</label>
            <input type="number" id="sideC" placeholder="Сторона c">
        `;
  }
});

function calculateCircle(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  const perimeter = 2 * Math.PI * radius;
  return { area, perimeter };
}

function calculateRectangle(length, width) {
  const area = length * width;
  const perimeter = 2 * (length + width);
  return { area, perimeter };
}

function calculateTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  const perimeter = a + b + c;
  return { area, perimeter };
}

function calculate() {
  const figure = document.getElementById("figure").value;
  let area = 0;
  let perimeter = 0;

  if (figure === "circle") {
    const radius = parseFloat(document.getElementById("radius").value);
    ({ area, perimeter } = calculateCircle(radius));
  } else if (figure === "rectangle") {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    ({ area, perimeter } = calculateRectangle(length, width));
  } else if (figure === "triangle") {
    const a = parseFloat(document.getElementById("sideA").value);
    const b = parseFloat(document.getElementById("sideB").value);
    const c = parseFloat(document.getElementById("sideC").value);
    ({ area, perimeter } = calculateTriangle(a, b, c));
  }

  document.getElementById("result").textContent = `Площа: ${area.toFixed(
    2
  )}. Периметр: ${perimeter.toFixed(2)}.`;
}
