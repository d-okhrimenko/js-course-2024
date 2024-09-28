"use strict";

const shoppingCart = ["tomato", "pizza", "tea"];

function addItems(arr) {
  const items = getWithoutValidation('Enter items, that you want to add, separated by ","')
    .split(",")
    .map((el) => el.trim());
  arr.push(...items);
}

function removeItems(arr) {
  const items = getWithoutValidation('Enter items, that you want to remove, separated by ","')
    .split(",")
    .map((el) => el.trim());
  const sorted = arr.filter((el) => !items.includes(el));
  arr.splice(0, arr.length);
  arr.push(...sorted);
}

function alertCartContent(arr) {
  alert(`Your Sopping Cart contains:
  ${arr}`);
}

function getAction() {
  const action = getMatchedInput(
    `What would you like to  do?
    type "a" to add new item into shopping cart

    type "r" to remove item from shopping cart

    type "p" to print all items in shopping cart 
    
    type "x" to stop operation with shopping cart`,
    isMatchingString,
    ["a", "r", "p", "x"]
  );
  return action;
}

function executeInput() {
  const action = getAction();

  switch (action) {
    case "a":
      addItems(shoppingCart);
      break;
    case "r":
      removeItems(shoppingCart);
      break;
    case "p":
      alertCartContent(shoppingCart);
      break;
    case "x":
      return;
  }
  executeInput();
}

executeInput();
