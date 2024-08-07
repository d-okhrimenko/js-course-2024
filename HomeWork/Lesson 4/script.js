const text_input_1 = document.getElementById("text-input-1");
const btn_1_start = document.getElementById("btn-1-start");
let btn_1_end = document.getElementById("btn-1-end");
let user_count = document.getElementById("user_count");

const rock = 1;
const scissors = 2;
const paper = 3;

btn_1_start.addEventListener("click", function () {
  if (text_input_1.value == false) {
    alert("Введіть свій предмет та знову натисніть на кнопку");
  } else {
    gameActive = true;
    let user_choose = Number(text_input_1.value);

    while (gameActive == true) {
      let pc_choose = Math.floor(Math.random() * 3) + 1;
      if (pc_choose == 1) {
        if (user_choose == 1) {
          alert("Нічия");
        } else if (user_choose == 2) {
          alert("Ви програли");
        } else {
          alert("Ви перемогли");
          user_count.innerText++;
        }
      } else if (pc_choose == 2) {
        if (user_choose == 1) {
          alert("Ви перемогли");
          user_count.innerText++;
        } else if (user_choose == 2) {
          alert("Нічия");
        } else {
          alert("Ви програли");
        }
      } else {
        if (user_choose == 1) {
          alert("Ви програли");
        } else if (user_choose == 2) {
          alert("Ви перемогли");
          user_count.innerText++;
        } else {
          alert("Нічия");
        }
      }
      gameActive = false;
    }
  }
});
btn_1_end.addEventListener("click", function () {
  user_count.innerText = 0;
});

const generator_btn = document.getElementById("generator-btn");
const math_task = document.getElementById("math-task");
const text_input_2 = document.getElementById("text-input-2");
const btn_1_confirm = document.getElementById("btn-1-confirm");
const btn_2_end = document.getElementById("btn-2-end");
const result = document.getElementById("result");
const choices_count = document.getElementById("choices_count");
const user_count_2 = document.getElementById("user_count_2");
const operators = ["+", "-", "*", "/"];
let pc_res;

generator_btn.addEventListener("click", function () {
  let pc_number_expresion = [];
  for (let i = 0; i < 2; i++) {
    pc_number_expresion.push(Math.floor(Math.random() * 10) + 1);
  }
  let pc_expresion_operator = operators[Math.floor(Math.random() * 4)];
  pc_res = pc_calc(
    pc_number_expresion[0],
    pc_number_expresion[1],
    pc_expresion_operator
  );
  math_task.innerText =
    pc_number_expresion[0] +
    " " +
    pc_expresion_operator +
    " " +
    pc_number_expresion[1];
});

function pc_calc(number_1, number_2, operator) {
  switch (operator) {
    case "+":
      return Number(number_1 + number_2);
    case "-":
      return Number(number_1 - number_2);
    case "*":
      return Number(number_1 * number_2);
    case "/":
      return Number(number_1 / number_2);
  }
}

btn_1_confirm.addEventListener("click", function () {
  let user_answear = Number(text_input_2.value);
  if (user_answear == pc_res) {
    user_count_2.innerText = Number(user_count_2.innerText) + 1;
    result.innerText = "Ваша відповідь - правильна";
    choices_count.innerText = Number(choices_count.innerText) + 1;
  } else {
    result.innerText = "Ваша відповідь - неправильна, спробуйте ще раз";
    choices_count.innerText = Number(choices_count.innerText) + 1;
  }
});

btn_2_end.addEventListener("click", function () {
  user_count.innerText = "";
});
