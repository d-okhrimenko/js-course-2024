let marks = [];

function avgMark(array) {
  const sum = array.reduce((ass, val) => ass + val, 0);
  return array.length ? sum / array.length : 0;
}

function maxMark(array) {
  return Math.max(...array);
}

function minMark(array) {
  return Math.min(...array);
}

function getNumber(message) {
  while (true) {
    let number = prompt(message);
    let isNumber = !isNaN(number) && number !== "" && number !== null;
    if (isNumber) return Number(number);
  }
}

let amountMarks = getNumber(
  "Введіть скільки оцінок хочете ввести цілим числом?"
);

for (let i = 1; i <= amountMarks; i++) {
  const mark = getNumber(`Введіть оцінку від 0 до 100
    ${i} з ${amountMarks}`);
  marks.push(mark);
}

alert(` Всього оцінок: ${amountMarks}
        Середній бал: ${avgMark(marks)}
        Найвища оцінка: ${maxMark(marks)}
        Найменша оцінка: ${minMark(marks)}`);
