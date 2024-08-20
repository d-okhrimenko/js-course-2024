let scores = [1, 2, 3, 4, 5];

function genArray(len) {
  return Array.from({ length: len }, () => Math.floor(Math.random() * 100));
}

scores = genArray(3);

function sum(array) {
  return array.reduce((x, y) => x + y);
}

function averageScore(array) {
  return sum(array) / array.length;
}

function maxScore(array) {
  return Math.max(...array);
}

function minScore(array) {
  return Math.min(...array);
}

console.log(scores);
console.log(sum(scores));
console.log(averageScore(scores));
console.log(maxScore(scores));
console.log(minScore(scores));

function enterScores() {
  let userScores = [];
  let number = Number(prompt('Enter the number of your scores:'));
  for (let index = 0; index < number; index++) {
    userScores.push(Number(prompt(`Enter your score # ${index + 1}:`)));
  }
  return userScores;
}

let userScores = enterScores();

scores = scores.concat(userScores);

console.log(userScores);
console.log(scores);

alert(
  `Average scope = ${averageScore(scores)},\nMax scope = ${maxScore(
    scores
  )},\nMin scope = ${minScore(scores)}`
);
