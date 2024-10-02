"use strict";

var shoppingList = ["Banana", "Apple"];

function showList() {
  var list = document.querySelector("#showList");
  list.innerHTML = shoppingList.join(", ");
}

function addToShoppingList() {
  var item = document.querySelector("#addProducts").value.trim();

  if (item) {
    shoppingList.push(item);
    showList();
  }
}

function removeFromShoppingList() {
  var item = document.querySelector("#removeProducts").value.trim();
  var itemIndex = shoppingList.indexOf(item);

  if (itemIndex > -1) {
    shoppingList.splice(itemIndex, 1);
    showList();
  }
}