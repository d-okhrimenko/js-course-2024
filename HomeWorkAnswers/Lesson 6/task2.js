const shoppingList = ["Banana", "Apple"];

function showList() {
  let list = document.querySelector("#showList");
  list.innerHTML = shoppingList.join(", ");
}

function addToShoppingList() {
  let item = document.querySelector("#addProducts").value.trim();
  if (item) {
    shoppingList.push(item);
    showList();
  }
}

function removeFromShoppingList() {
  let item = document.querySelector("#removeProducts").value.trim();

  const itemIndex = shoppingList.indexOf(item);

  if (itemIndex > -1) {
    shoppingList.splice(itemIndex, 1);
    showList();
  }
}
