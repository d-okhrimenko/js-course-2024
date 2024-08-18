const btn_1_task = document.getElementById("btn-1-task");
const btn_2_task = document.getElementById("btn-2-task");

// 1 task
function average_score(arr) {
  let sum = arr.reduce((acum, value) => {
    return acum + value;
  }, 0);
  return Math.floor(sum / arr.length);
}
function min_score(arr) {
  return Math.min(...arr);
}
function max_score(arr) {
  return Math.max(...arr);
}

// 2 task
function add_item() {
  let user_stop = false;
  let list = [];
  while (!user_stop) {
    let user_item = prompt(
      "Введіть ваш товар, якщо введено всі товари введіть -1: "
    );
    if (user_item != -1) {
      list.push(user_item);
    } else user_stop = true;
  }
  return list;
}
function delete_item(item, arr) {
  const index = arr.indexOf(item);

  if (arr.includes(item) == true) {
    arr.splice(index, 1);
  } else return alert("Такого товару немає в списку, повторіть спробу");
}

btn_1_task.addEventListener("click", () => {
  let user_scores_arr = [];
  let user_stop_score = false;
  while (!user_stop_score) {
    let user_scores = Number(
      prompt(
        "Введіть ваші оцінки (0 - 100), якщо введено всі оцінки введіть -1: "
      )
    );
    if (user_scores != -1) {
      user_scores_arr.push(user_scores);
    } else user_stop_score = true;
  }
  return alert(
    `Ваш середінй бал: ${average_score(
      user_scores_arr
    )}, максимальний бал:${max_score(user_scores_arr)},
    мінімальний бал: ${min_score(user_scores_arr)}`
  );
});

let user_list = [];
btn_2_task.addEventListener("click", () => {
  let user_choise = Number(
    prompt(
      "Введіть - 1 якщо хочете додати товар до списку, 2 - якщо хочете видалити товар зі списку, 3 - якщо хочете побачити список"
    )
  );

  switch (user_choise) {
    case 1: {
      let result = add_item();
      user_list.push(...result);
      alert(user_list);
      break;
    }
    case 2: {
      let item_to_delete = prompt("Введіть товар, який хочете видалити:");
      delete_item(item_to_delete, user_list);
      alert(user_list);
      break;
    }
    case 3: {
      alert(`Ваш список товарів: ${user_list.join(", ")}`);
      break;
    }

    default: {
      alert("Невірний вибір, повторіть спробу");
      break;
    }
  }
});
