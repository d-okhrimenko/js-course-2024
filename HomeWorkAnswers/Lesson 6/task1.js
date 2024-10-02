let grades = [];

for (let i = 0; i < 10; i++) {
  grades.push(Math.floor(Math.random() * 10) + 1);
}

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function max(array) {
  return Math.max(...array);
}

function min(array) {
  return Math.min(...array);
}

alert(`Average score among students: ${average(grades)}`);
alert(`Highest score: ${max(grades)}`);
alert(`Lowest score: ${min(grades)}`);
