let shoppingList = ["banana", "bread", "milk"];

// Add new item to Shopping List
function addItem(item) {
  shoppingList.push(item);
  return shoppingList;
}

// Remove item from Shopping List
function removeItem(arr, value) {
  arr = arr.filter((item) => item !== value);
  return arr;
}

// Display Shopping List
function displayList(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${[i + 1]}. ${arr[i]}`);
  }
}

// Let user to interact with list
let newItem;
let removedItem;

while (true) {
  let userInput = Number(
    prompt(
      "Оберіть дію: натисніть 1 - щоб додати товар, 2 - видалити товар, 3 - показати список в консолі, 0 - завершити роботу "
    )
  );
  if (userInput === 1) {
    newItem = prompt("Введіть товар, який ви хочете додати до списку");
    addItem(newItem);
  } else if (userInput === 2) {
    removedItem = prompt("Введіть товар, який ви хочете видалити зі списку");
    shoppingList = removeItem(shoppingList, removedItem);
  } else if (userInput === 3) {
    displayList(shoppingList);
  } else if (userInput === 0) {
    break;
  }
}
