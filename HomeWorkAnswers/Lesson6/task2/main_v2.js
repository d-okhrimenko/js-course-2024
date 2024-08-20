let productArray = ["Помідори", "Огірки", "Капуста"];

const actionSelect = document.getElementById("action");
const productInputGroup = document.getElementById("productInputGroup");
const productInput = document.getElementById("productInput");
const actionButton = document.getElementById("actionButton");
const productsList = document.getElementById("products");

function updateProductList() {
  productsList.innerHTML = "";
  productArray.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product;
    productsList.appendChild(li);
  });
}

actionSelect.addEventListener("change", function () {
  if (this.value === "1" || this.value === "2") {
    productInputGroup.style.display = "block";
  } else {
    productInputGroup.style.display = "none";
  }
});

actionButton.addEventListener("click", function () {
  const action = actionSelect.value;
  const product = productInput.value.trim();

  switch (action) {
    case "1":
      if (product) {
        productArray.push(product);
        alert(`Товар "${product}" додано до списку.`);
        productInput.value = "";
      } else {
        alert("Будь ласка, введіть назву товару.");
      }
      break;
    case "2":
      if (product) {
        const index = productArray.indexOf(product);
        if (index !== -1) {
          productArray.splice(index, 1);
          alert(`Товар "${product}" видалено зі списку.`);
          productInput.value = "";
        } else {
          alert(`Товар "${product}" не знайдено в списку.`);
        }
      } else {
        alert("Будь ласка, введіть назву товару для видалення.");
      }
      break;
    case "3":
      alert("Список товарів:\n" + productArray.join("\n"));
      break;
    default:
      alert("Будь ласка, виберіть дію.");
  }

  updateProductList();
});

updateProductList();
