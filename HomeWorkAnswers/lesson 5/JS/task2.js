// масиви з показниками для оформлення програми
const figuresNames = ["коло", "прямокутник", "трикутник"];
const figuresParams = [
  ["радіус"],
  ["довжина", "ширина"],
  ["1-й бік", "2-й бік", "3-й бік"],
];
const figureCharacteristics = ["площа", "периметр"];

// обчислення характеристик кола
let getCircleArea = (paramsArr) => Math.PI * Math.pow(paramsArr[0], 2);
let getCirclePerimeter = (paramsArr) => 2 * Math.PI * paramsArr[0];
// обчислення характеристик прямокутника
let getRectangleArea = (paramsArr) => paramsArr[0] * paramsArr[1];
let getRectanglePerimeter = (paramsArr) => 2 * (paramsArr[0] + paramsArr[1]);
// обчислення характеристик трикутника
let getTriangleArea = (paramsArr) => {
  let p = (paramsArr[0] + paramsArr[1] + paramsArr[2]) / 2;
  return Math.sqrt(p * (p - paramsArr[0]) * (p - paramsArr[1]) * (p - paramsArr[2]));
};
let getTrianglePerimeter = (paramsArr) => paramsArr[0] + paramsArr[1] + paramsArr[2];

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// допоміжні функції

// отримуємо представлення доступних фігур
let getFiguresString = () => { 
  let str = "";
  for (let i = 0; i < figuresNames.length; i++) 
    str += `'${figuresNames[i].charAt(0).toUpperCase()}${figuresNames[i].slice(1)}'${((i < figuresNames.length - 1) ? ", " : "?")}`;
  return str;
};
// перевіряємо чи введена фігура дозволена
let isProperFigure = (figure) => figuresNames.includes(figure); 
// отримуємо представлення значень параметрів фігури
let getFigureParamsString = (figParams) => {
  let str = "";
  for (let i = 0; i < figParams.length; i++) 
    str += `${figParams[i]}${(i < figParams.length -1) ? ", " : ""}`;
  return str;
}
// подаємо користувачу результати
let reportFigureCharacteristics = (figIdx, getArea, getPerimeter, figParams) => 
  `${figuresNames[figIdx]} (${getFigureParamsString(figParams)}):\n` + 
  `${figureCharacteristics[0]} = ${(getArea(figParams)).toFixed(2)}\n` +
  `${figureCharacteristics[1]} = ${(getPerimeter(figParams)).toFixed(2)}`;
// отримуємо масив введених користувачем значень параметрів фігури
let getFigureParamsArray = (figIdx) => {
  let figureParamsArray = new Array();
  let sndIdx = 0;
  for (let i = 0; i < figIdx + 1; i++)
    figureParamsArray.push(getEnteredValue(`Введіть ${figuresNames[figIdx]} : ${figuresParams[figIdx][sndIdx++]}`));
  return figureParamsArray;
}


let figure = getEnteredValue(`Оберіть фігуру: ${getFiguresString()}`, true);

if (isProperFigure(figure)) {
  let figureIndex = figuresNames.indexOf(figure);
  let figureParams = getFigureParamsArray(figureIndex);
  
  switch (figureIndex) {
    case 0: // коло
      alert(reportFigureCharacteristics(figureIndex, getCircleArea, getCirclePerimeter, figureParams));
      break;
    case 1: // прямокутник
      alert(reportFigureCharacteristics(figureIndex, getRectangleArea, getRectanglePerimeter, figureParams));
      break;
    case 2: // трикутник
      alert(reportFigureCharacteristics(figureIndex, getTriangleArea, getTrianglePerimeter, figureParams));
      break;
  }
}
