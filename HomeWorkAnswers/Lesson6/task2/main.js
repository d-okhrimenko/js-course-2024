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

let choice = prompt(
  `Виберіть дію:\n"1" - Додавання товару\n"2" - Видалення товару\n"3" - Виведення списку товарів`
);

if (choice === null) {
  alert("Програму завершено!");
} else {
  choice = Number(choice);
  if (isNaN(choice) || choice < 1 || choice > 3) {
    alert("Невірний вибір. Будь ласка, виберіть 1, 2 або 3.");
  } else {
    switch (choice) {
      case 1:
        let product = prompt("Додайте товар!");
        addProduct(product);
        break;
      case 2:
        let productRem = prompt("Введіть назву товару який треба видалити!");
        removeProduct(productRem);
        break;
      case 3:
        listProduct();
        break;
      default:
        alert("Ви не вибрали дію!");
        break;
    }
  }
}
