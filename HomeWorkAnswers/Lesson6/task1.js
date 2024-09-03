const length = 10;
const minScore = 1;
const maxScore = 100;

function generateRandomArray(length, min, max) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

let array = generateRandomArray(length, minScore, maxScore);

function averageScore(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  let avScore = sum / array.length;
  return avScore.toFixed(0);
}

function max(array) {
  let max = Math.max(...array);
  return max;
}

function min(array) {
  let min = Math.min(...array);
  return min;
}

let value = Number(prompt("Введіть оцінку від 1 до 100 "));
array.push(value);

alert("Середній бал: " + averageScore(array) + " Максимальна оцінка " + max(array) + " Мінімальна оцінка " + min(array));
 
