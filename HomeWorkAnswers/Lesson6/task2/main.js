let productArray = ["Помідори", "Огірки", "Капуста"];

function addProduct(product) {
  productArray.push(product);
  console.log(productArray);
}

function removeProduct(productRem) {
  let index = productArray.indexOf(productRem);
  if (index !== -1) {
    productArray.splice(index, 1);
    console.log(`Товар "${productRem}" був видалений!`);
  } else {
    console.log(`Товар "${productRem}" не знайдено в списку.`);
  }
}

function listProduct() {
  alert("Список товарів:\n" + productArray.join("\n"));
}

let continueProgram = true;

while (continueProgram) {
  let choice = prompt(
    `Виберіть дію:\n"1" - Додавання товару\n"2" - Видалення товару\n"3" - Виведення списку товарів\n"4" - Вихід`
  );

  if (choice === null) {
    continueProgram = false;
  } else if (choice.trim() === "") {
    alert("Ви нічого не ввели. Будь ласка, виберіть дію.");
  } else {
    choice = Number(choice);
    if (isNaN(choice) || choice < 1 || choice > 4) {
      alert("Невірний вибір. Будь ласка, виберіть 1, 2, 3 або 4.");
    } else {
      switch (choice) {
        case 1:
          let product = prompt("Додайте товар!");
          if (product && product.trim() !== "") {
            addProduct(product.trim());
          } else {
            alert("Ви не ввели назву товару.");
          }
          break;
        case 2:
          let productRem = prompt("Введіть назву товару який треба видалити!");
          if (productRem && productRem.trim() !== "") {
            removeProduct(productRem.trim());
          } else {
            alert("Ви не ввели назву товару для видалення.");
          }
          break;
        case 3:
          listProduct();
          break;
        case 4:
          continueProgram = false;
          break;
      }
    }
  }
}

alert("Дякуємо за використання програми!");
