function generateQuizz() {
  let num1 = Math.floor(Math.random() * 10 + 1);
  let num2 = Math.floor(Math.random() * 10 + 1);
  let operator = Math.floor(Math.random() * 3);
  let operatorsList = ["+", "-", "*"];

  switch (operator) {
    case 0:
      answer = num1 + num2;
      break;
    case 1:
      answer = num1 - num2;
      break;
    case 2:
      answer = num1 * num2;
      break;
  }
  let question = `${num1} ${operatorsList[operator]} ${num2}`;
  document.querySelector("#question").innerHTML = question;
  return answer;
}
generateQuizz();

let userAnswer;
let attempts = 3;
let correctAnswer = 0;
let incorrectAnswer = 0;

document.querySelector("#submit").onclick = function () {
  userAnswer = Number(document.querySelector("#input").value);
  if (answer === userAnswer) {
    correctAnswer++;
    document.getElementById(
      "comment"
    ).innerHTML = `Правильна відповідь! Кількість правильних відповідей ${correctAnswer}`;
    document.getElementById("input").value = "";
    generateQuizz();
  } else {
    attempts--;
    incorrectAnswer++;
    document.getElementById("input").value = "";
    if (attempts > 0) {
      document.getElementById(
        "comment"
      ).innerHTML = `Неправильна відповідь. Спробуйте ще раз. У вас залишилося ${attempts} спроби`;
    } else {
      alert(
        `Ви вичерпали усі спроби. Ваш результат: правильні відповіді - ${correctAnswer}. Неправильні відповіді ${incorrectAnswer}`
      );
      document.getElementById("comment").innerHTML = "";
      attempts = 3;
      correctAnswer = 0;
      incorrectAnswer = 0;
      generateQuizz();
    }
  }
};
