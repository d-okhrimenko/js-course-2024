// HOMEWORK TASK 1

const weightValue = document.querySelector("#weightInput");
const heightValue = document.querySelector("#heightInput");

document.querySelector("#countBMI").onclick = function () {
  let weight = +weightValue.value;
  let height = +heightValue.value;

  if (checkValidValueBMI([weight, height])) {
    let BMI = getBMI(weight, height);
    let mes = getMes(BMI);
    showBMIResult(BMI, mes);
  }
};

document.querySelector("#resetBMI").onclick = function () {
  resetValueAndResultBMI();
};

let getBMI = (weight, height) => weight / Math.pow(height / 100, 2);

let checkValidValueBMI = (values) => {
  for (let value of values) {
    if (value === "" || isNaN(value) || value === null || value <= 10) {
      document.querySelector("#resultBMI").innerHTML =
        "Будь ласка, введіть коректне числове значення";
      weightValue.value = "";
      heightValue.value = "";
      return false;
    }
  }
  return true;
};

let getMes = (BMI) => {
  let mes;

  if (BMI < 18.5) {
    mes = "Ваша вага недостатня. Перегляньте своє харчування!";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    mes = "Ваша вага нормальна. Ви харчуєтесь правильно!";
  } else if (BMI >= 25 && BMI < 29.9) {
    mes = "Ваша вага надмірна. Перегляньте своє харчування!";
  } else if (BMI >= 30 && BMI < 34.9) {
    mes = "У Вас ожиріння. Радикально перегляньте своє харчування!";
  } else if (BMI >= 35) {
    mes =
      "У Вас надмірне ожиріння. Терміново радикально перегляньте своє харчування!";
  }
  return mes;
};

let showBMIResult = (BMI, mes) => {
  document.querySelector(
    "#resultBMI"
  ).innerHTML = `Ваш ІМТ складає <b>${BMI.toFixed(1)}</b>. ${mes}`;
};

let resetValueAndResultBMI = () => {
  weightValue.value = "";
  heightValue.value = "";
  document.querySelector("#resultBMI").innerHTML =
    "Тут буде відображатись результат обчислень";
};

// HOMEWORK TASK 2

const firstValueLabel = document.querySelector("#firstValueLabel");
const firstValueInput = document.querySelector("#firstValueInput");
const secondValueLabel = document.querySelector("#secondValueLabel");
const secondValueInput = document.querySelector("#secondValueInput");
const thirdValueLabel = document.querySelector("#thirdValueLabel");
const thirdValueInput = document.querySelector("#thirdValueInput");
let selectedShape;

document.querySelector("#square").onclick = function () {
  resetValueAndResult();
  firstValueLabel.innerHTML = "Сторона квадрата";
  firstValueLabel.style.display = "block";
  firstValueInput.style.display = "block";
  selectedShape = "square";
};

document.querySelector("#rectangle").onclick = function () {
  resetValueAndResult();
  firstValueLabel.innerHTML = "Ширина";
  secondValueLabel.innerHTML = "Довжина";
  firstValueLabel.style.display = "block";
  firstValueInput.style.display = "block";
  secondValueLabel.style.display = "block";
  secondValueInput.style.display = "block";
  selectedShape = "rectangle";
};

document.querySelector("#circle").onclick = function () {
  resetValueAndResult();
  firstValueLabel.innerHTML = "Радіус кола";
  firstValueLabel.style.display = "block";
  firstValueInput.style.display = "block";
  selectedShape = "circle";
};

document.querySelector("#triangle").onclick = function () {
  resetValueAndResult();
  firstValueLabel.innerHTML = "1 сторона";
  secondValueLabel.innerHTML = "2 сторона";
  thirdValueLabel.innerHTML = "3 сторона";
  firstValueLabel.style.display = "block";
  firstValueInput.style.display = "block";
  secondValueLabel.style.display = "block";
  secondValueInput.style.display = "block";
  thirdValueLabel.style.display = "block";
  thirdValueInput.style.display = "block";
  selectedShape = "triangle";
};

document.querySelector("#count").onclick = function () {
  let width = +firstValueInput.value;
  let length = +secondValueInput.value;
  let radius = +firstValueInput.value;
  let side1 = +firstValueInput.value;
  let side2 = +secondValueInput.value;
  let side3 = +thirdValueInput.value;

  if (selectedShape === "square") {
    if (checkValidValue([width])) {
      let area = getSquareArea(width);
      let perimeter = getSquarePerimeter(width);
      showShapeResult("квадрат", area, perimeter);
    }
  } else if (selectedShape === "rectangle") {
    if (checkValidValue([width, length])) {
      let area = getRectangleArea(width, length);
      let perimeter = getRectanglePerimeter(width, length);
      showShapeResult("прямокутник", area, perimeter);
    }
  } else if (selectedShape === "circle") {
    if (checkValidValue([radius])) {
      let area = getCircleArea(radius);
      let perimeter = getCirclePerimeter(radius);
      showShapeResult("коло", area, perimeter);
    }
  } else if (selectedShape === "triangle") {
    if (checkValidValue([side1, side2, side3])) {
      if (isTriangleValid(side1, side2, side3)) {
        let area = getTriangleArea(side1, side2, side3);
        let perimeter = getTrianglePerimeter(side1, side2, side3);
        showShapeResult("трикутник", area, perimeter);
      } else {
        document.querySelector("#shapesResult").innerHTML =
          "Введені сторони не утворюють трикутник.";
      }
    }
  }
};

let getSquareArea = (width) => Math.pow(width, 2);
let getSquarePerimeter = (width) => width * 4;

let getRectangleArea = (width, length) => width * length;
let getRectanglePerimeter = (width, length) => (width + length) * 2;

let getCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
let getCirclePerimeter = (radius) => Math.PI * radius * 2;

let getTriangleArea = (side1, side2, side3) => {
  let p = (side1 + side2 + side3) / 2;
  return Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
};
let getTrianglePerimeter = (side1, side2, side3) => side1 + side2 + side3;

let checkValidValue = (values) => {
  for (let value of values) {
    if (value === "" || isNaN(value) || value === null || value <= 0) {
      document.querySelector("#shapesResult").innerHTML =
        "Будь ласка, введіть коректне числове значення";
      firstValueInput.value = "";
      secondValueInput.value = "";
      thirdValueInput.value = "";
      return false;
    }
  }
  return true;
};

let isTriangleValid = (side1, side2, side3) => {
  return (
    side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
  );
};

let showShapeResult = (shape, area, perimeter) => {
  document.querySelector(
    "#shapesResult"
  ).innerHTML = `Ви обрали <b>${shape}</b>. Його площа складає ${area.toFixed(
    0
  )} см<sup>2</sup>, периметр складає ${perimeter.toFixed(0)} см.`;
};

let resetValueAndResult = () => {
  firstValueInput.value = "";
  secondValueInput.value = "";
  thirdValueInput.value = "";
  firstValueLabel.style.display = "none";
  firstValueInput.style.display = "none";
  secondValueLabel.style.display = "none";
  secondValueInput.style.display = "none";
  thirdValueLabel.style.display = "none";
  thirdValueInput.style.display = "none";
  document.querySelector("#shapesResult").innerHTML =
    "Тут буде відображатись результат обчислень";
};
