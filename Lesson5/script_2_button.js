console.log("index_2_button.html")

function getCorrectNumber(textButton) {
  submitButton.textContent = textButton;

  return new Promise((resolve) => {
      submitButton.onclick = function() {
          let input = inputField.value;
          
          if (isValidNumber(input)) {
              input = Number(input);
              textError.textContent = '';
              inputField.value = '';
              resolve(input);
          } else {
              inputField.value = '';
              textError.textContent = `Введіть коректні данні!`;
          };
      };
  });
};

let isValidNumberPlus = (input) => input == 0 || input == 1 || input == 2 || input == 3;
let getAreaCircle = (radius) => Math.PI * Math.pow(radius, 2);
let getPerimeterCircle = (radius) => 2 * Math.PI * radius;
let getAreaRectangle= (length, width) => length * width;
let getPerimeterRectangle = (length, width) => 2 * (length + width);
let getAreaTriangle = (a, b, c) => {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
};
let getPerimeterTriangle = (a, b, c) => a + b + c;
let isValidTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

const inputField = document.querySelector("#userInput");
const submitButton = document.querySelector("#submitButton");
const textMessages = document.querySelector("#textMessages");
const textHead = document.querySelector("#textHead");
const textError = document.querySelector("#textError");
const blockButton = document.querySelector("#blockButton")

let radius;
let circleArea;
let circlePerimeter;
let length;
let width;
let rectangleArea;
let rectanglePerimeter;
let side1Triangle;
let side2Triangle;
let side3Triangle;
let triangleArea;
let trianglePerimeter;

async function procesProgram() {
  while(true) {
    textHead.textContent = "Виберіть фігуру, периметр та площу якої будемо обчислювати: 1 - коло, 2 - прямокутник, 3 - трикутник, 0 - EXIT"
    let choosingFigure = await getCorrectNumber("Виберіть фігуру");

    if(isValidNumberPlus(choosingFigure)) {
      switch(choosingFigure) {
        case 0:
          textMessages.textContent = `Ви ввели ${choosingFigure}. Вихід з програми.`;
          blockButton.textContent = '';
          break;
        case 1:
          textHead.textContent = '';
          textMessages.textContent = `Ви ввели ${choosingFigure}. КОЛО:`;
          radius = await getCorrectNumber("Введіть радіус кола:");
          circleArea = getAreaCircle(radius).toFixed(2);
          circlePerimeter = getPerimeterCircle(radius).toFixed(2);
          textMessages.innerHTML = `Коло з радіусом ${radius} має:<br>Площу: ${circleArea}<br>Довжину: ${circlePerimeter}`;
          break;
        case 2:
          textHead.textContent = '';
          textMessages.textContent = `Ви ввели ${choosingFigure}. ПРЯМОКУТНИК:`;
          length = await getCorrectNumber("Введіть довжина прямокутника:");
          width = await getCorrectNumber("Введіть ширину прямокутника:");
          rectangleArea = getAreaRectangle(length, width);
          rectanglePerimeter = getPerimeterRectangle(length, width);
          textMessages.innerHTML = `Прямокутник з довжиною ${length} та шириною ${width} має:<br>Площу: ${rectangleArea}<br>Периметр: ${rectanglePerimeter}`;
          break;
        case 3:
          textHead.textContent = '';
          textMessages.textContent = `Ви ввели ${choosingFigure}. ТРИКУТНИК:`;
          side1Triangle = await getCorrectNumber("Введіть першу сторону трикутника");
          side2Triangle = await getCorrectNumber("Введіть другу сторону трикутника");
          side3Triangle = await getCorrectNumber("Введіть третю сторону трикутника");
  
          if(isValidTriangle(side1Triangle, side2Triangle, side3Triangle)) {
            triangleArea = getAreaTriangle(side1Triangle, side2Triangle, side3Triangle).toFixed(2);
            trianglePerimeter = getPerimeterTriangle(side1Triangle, side2Triangle, side3Triangle);
            textMessages.innerHTML = `Трикутник зі сторонами: ${side1Triangle}, ${side2Triangle} та ${side3Triangle} має:<br>Площу: ${triangleArea}<br>Периметр: ${trianglePerimeter}`;
          } else {
            textMessages.textContent = `Трикутник зі сторонами: ${side1Triangle}, ${side2Triangle} та ${side3Triangle} існувати не може !!!`
          };
          break;
      };
      // textHead.textContent = '';
      // blockButton.textContent = '';
      // break;
    } else {
      textError.textContent = `Введіть коректні данні!`;
    };
  };
};
procesProgram();
