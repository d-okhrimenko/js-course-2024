const assessments = [];

function getAssessment(max) {
  return Math.floor(Math.random() * max) + 1;
}

for (let i = 1; i <= 20; i++) {
  assessments.push(getAssessment(100));
}
console.log(assessments);

function average(assessments) {
  let sum = 0;
  for (let value of assessments) {
    sum += value;
  }
  return Math.floor(sum / assessments.length);
}

function max(assessments) {
  return Math.max(...assessments);
}

function min(assessments) {
  return Math.min(...assessments);
}

alert(`Ваші оцінки за семестр: \n ${assessments.join(", ")}`);

alert(
  `Мінімальний бал становить ${min(assessments)},\nмаксимальний - ${max(
    assessments
  )}, \nсередній бал дорівнює ${average(assessments)}`
);
