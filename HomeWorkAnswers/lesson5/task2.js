function inputValue(sideOne, sideTwo, sideThree) {
  let valueCircle = document.querySelector("#circle");
  valueCircle.innerHTML = sideOne;
  let valueRectangle = document.querySelector("#rectangle");
  valueRectangle.innerHTML = sideTwo;
  let valueTriangle = document.querySelector("#triangle");
  valueTriangle.innerHTML = sideThree;
}

function isValidNumber(value) {
  let result = !isNaN(value) && value !== "" && value !== null;
  return result;
}

function showResult(result, figure) {
  let output = document.querySelector("#output");
  output.innerHTML = `Площа ${figure} становить - ${result[0]}. Периметр ${figure} становить - ${result[1]}`;
}
function showNoResult() {
  let outResult = document.querySelector("#output");
  outResult.innerHTML = "";
}

function circleCalculate(radius) {
  let result = [];
  result[0] = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  result[1] = (2 * Math.PI * radius).toFixed(2);
  return result;
}

function rectangleCalculate(side1, side2) {
  let result = [];
  result[0] = (side1 * side2).toFixed(2);
  result[1] = (2 * side1 + 2 * side2).toFixed(2);
  return result;
}

function triangleCalculate(side1, side2, side3) {
  let result = [];
  let param = (side1 + side2 + side3) / 2;
  result[0] = Math.sqrt(
    param * (param - side1) * (param - side2) * (param - side3)
  ).toFixed(2);
  result[1] = (side1 + side2 + side3).toFixed(2);
  return result;
}

document.querySelector("#btnCircle").onclick = function () {
  inputValue("Введіть радіус", "", "");
  showNoResult();
  document.querySelector("#btnCalculate").onclick = function () {
    let radius = document.querySelector("#sideOne").value;
    if (isValidNumber(radius)) {
      let result = circleCalculate(+radius);
      console.log("bingo");
      showResult(result, "кола");
    } else {
      alert("Введіть коректно значення.");
    }
  };
};

document.querySelector("#btnRectangle").onclick = function () {
  inputValue(
    "Введіть сторону 1 прямокутника",
    "Введіть сторону 2 прямокутника",
    ""
  );
  showNoResult();
  document.querySelector("#btnCalculate").onclick = function () {
    let sideOne = document.querySelector("#sideOne").value;
    let sideTwo = document.querySelector("#sideTwo").value;
    if (isValidNumber(sideOne) && isValidNumber(sideTwo)) {
      let result = rectangleCalculate(+sideOne, +sideTwo);
      showResult(result, "прямокутника");
    } else {
      alert("Введіть коректно значення.");
    }
  };
};

document.querySelector("#btnTriangle").onclick = function () {
  inputValue(
    "Введіть сторону 1 трикутника",
    "Введіть сторону 2 трикутника",
    "Введіть сторону 3 трикутника"
  );
  showNoResult();
  document.querySelector("#btnCalculate").onclick = function () {
    let sideOne = document.querySelector("#sideOne").value;
    let sideTwo = document.querySelector("#sideTwo").value;
    let sideThree = document.querySelector("#sideThree").value;

    if (
      isValidNumber(sideOne) &&
      isValidNumber(sideTwo) &&
      isValidNumber(sideThree)
    ) {
      let result = triangleCalculate(+sideOne, +sideTwo, +sideThree);
      showResult(result, "трикутника");
    } else {
      alert("Введіть коректно значення.");
    }
  };
};
