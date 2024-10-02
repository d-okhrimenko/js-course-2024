let markArray = [];

let i = 0;
while (i < 5) {
  let inputMark = Number(prompt("Введіть вашу оцінку?"));
  if (inputMark >= 0 && inputMark <= 100) {
    markArray.push(inputMark);
    i++;
  } else {
    alert("Ви ввели некоректне значення!");
  }
}

function average(markArray) {
  let sumMark = 0;
  for (const value of markArray) {
    sumMark += value;
  }
  let lengthArray = markArray.length;
  let averageMark = sumMark / lengthArray;

  return { average: averageMark, length: lengthArray, sum: sumMark };
}

function maxMark(array) {
  return Math.max(...array);
}

function minMark(array) {
  return Math.min(...array);
}

let resultAvg = average(markArray);
let resultMax = maxMark(markArray);
let resultMin = minMark(markArray);

alert(
  `Середній бал: ${resultAvg.average}\nНайвища оцінка: ${resultMax}\nНайнижча оцінка: ${resultMin}`
);

console.log("Сума оцінок:", resultAvg.sum);
console.log("Кількість оцінок:", resultAvg.length);
console.log("Середній бал:", resultAvg.average);
console.log("Найвища оцінка:", resultMax);
console.log("Найнижча оцінка:", resultMin);
