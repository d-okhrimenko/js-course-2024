let shopList = ["Bread", "Milk", "Butter"];

function add(addProd) {
  shopList.push(addProd);
}

function del(delProd) {
  for (let i = 0; i < shopList.length; i++) {
    if (shopList[i] === delProd) {
      shopList.splice(i, 1);
      break;
    }
  }
}

function display(array) {
  alert(array.join("\n"));
}

while (true) {
  let choice = Number(prompt("Оберіть дію: 1.Додати товар. 2.Видалити товар. 3.Вивести список 4.Завершити роботу"));
  switch (choice) {
    case 1:
      let ad = prompt("Введіть назву товару для додавання");
      add(ad);
      display(shopList);
      break;
    case 2:
      let dele = prompt("Введіть назву товару для видалення");
      del(dele);
      display(shopList);
      break;
    case 3:
      display(shopList);
      break;
    case 4:
      alert("Вихід з програми.");
      break;
    default:
      alert("Невірний вибір");
      continue;
  }
  if (choice === 4) {
    break;
  }
}
