let inputContainer = document.querySelector(".input-container");
let resultElement = document.getElementById("result");

function clearInputs() {
  // Удаляем все элементы input
  let elements = inputContainer.querySelectorAll("input, .calculate");
  elements.forEach((el) => el.remove());

  // Очищаем результат
  resultElement.textContent = "";
}

let circleAreaPerimeter = () => {
  clearInputs();

  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "radius");
  input.setAttribute("placeholder", "Введіть радіус кола?");
  inputContainer.appendChild(input);

  let calcButton = document.createElement("button");
  calcButton.classList.add("calculate");
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

    resultElement.innerHTML = `Площа кола: ${areaCircle}<br>Периметр кола: ${perimeterCircle}`;
  });
};

let rectangleAreaPerimeter = () => {
  clearInputs();

  let inputRecLength = document.createElement("input");
  inputRecLength.setAttribute("type", "number");
  inputRecLength.setAttribute("id", "length");
  inputRecLength.setAttribute("placeholder", "Введіть довжину прямокутника?");
  inputContainer.appendChild(inputRecLength);

  let inputRecWidth = document.createElement("input");
  inputRecWidth.setAttribute("type", "number");
  inputRecWidth.setAttribute("id", "width");
  inputRecWidth.setAttribute("placeholder", "Введіть ширину прямокутника?");
  inputContainer.appendChild(inputRecWidth);

  let calcButton = document.createElement("button");
  calcButton.classList.add("calculate");
  calcButton.textContent = "Розрахувати";
  inputContainer.appendChild(calcButton);

  calcButton.addEventListener("click", () => {
    let inputRec = parseFloat(inputRecLength.value);
    let inputRec2 = parseFloat(inputRecWidth.value);
    if (isNaN(inputRec || inputRec2) || (inputRec || inputRec2) <= 0) {
      alert("Будь ласка, введіть коректний радіус");
      return;
    }

    let areaRectangle = (inputRec * inputRec2).toFixed(2);
    let perimeterRectangle = (2 * (inputRec + inputRec2)).toFixed(2);

    resultElement.innerHTML = `Площа прямокутника: ${areaRectangle}<br>Периметр прямокутника: ${perimeterRectangle}`;
  });
};

let triangleAreaPerimeter = () => {
  clearInputs();

  let inputTriangleA = document.createElement("input");
  inputTriangleA.setAttribute("type", "number");
  inputTriangleA.setAttribute("id", "inputTriangleA");
  inputTriangleA.setAttribute(
    "placeholder",
    "Введіть довжину сторони трикутника А?"
  );
  inputContainer.appendChild(inputTriangleA);

  let inputTriangleB = document.createElement("input");
  inputTriangleB.setAttribute("type", "number");
  inputTriangleB.setAttribute("id", "inputTriangleB");
  inputTriangleB.setAttribute(
    "placeholder",
    "Введіть довжину сторони трикутника В?"
  );
  inputContainer.appendChild(inputTriangleB);

  let inputTriangleC = document.createElement("input");
  inputTriangleC.setAttribute("type", "number");
  inputTriangleC.setAttribute("id", "inputTriangleC");
  inputTriangleC.setAttribute(
    "placeholder",
    "Введіть довжину сторони трикутника С?"
  );
  inputContainer.appendChild(inputTriangleC);

  let calcButton = document.createElement("button");
  calcButton.classList.add("calculate");
  calcButton.textContent = "Розрахувати";
  inputContainer.appendChild(calcButton);

  calcButton.addEventListener("click", () => {
    let inputTriA = parseFloat(inputTriangleA.value);
    let inputTriB = parseFloat(inputTriangleB.value);
    let inputTriC = parseFloat(inputTriangleC.value);
    if (
      isNaN(inputTriA || inputTriB || inputTriC) ||
      (inputTriA || inputTriB || inputTriC) <= 0
    ) {
      alert("Будь ласка, введіть коректний радіус");
      return;
    }

    let _pivperimeter = ((inputTriA + inputTriB + inputTriC) / 2).toFixed(2);
    let areaTriangle = Math.sqrt(
      _pivperimeter *
        (_pivperimeter - inputTriA) *
        (_pivperimeter - inputTriB) *
        (_pivperimeter - inputTriC)
    ).toFixed(2);
    let perimeterTriangle = inputTriA + inputTriB + inputTriC;

    resultElement.innerHTML = `Площа прямокутника: ${areaTriangle}<br>Периметр прямокутника: ${perimeterTriangle}`;
  });
};

document.getElementById("btnCircle").onclick = circleAreaPerimeter;
document.getElementById("btnRectangle").onclick = rectangleAreaPerimeter;
document.getElementById("btnTriangle").onclick = triangleAreaPerimeter;
