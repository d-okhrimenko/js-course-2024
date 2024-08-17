let productsInStore = [];

while (true) {
  let userDoing = prompt(
    "Choice: \n1- Add product in sote\n2 - Delete product from store\n3 - Print items in store\nOr ente'q'"
  );
  if (userDoing.toLowerCase() === "q") {
    alert("You finished creat you sore.");
    break;
  } else if (userDoing === "1") {
    let itemFromUser = prompt("Ener name of product : ");
    addProductInStore(itemFromUser, productsInStore);
  } else if (userDoing === "2") {
    let itemFromUser = prompt("Ener name of product : ");
    deleteItem(itemFromUser, productsInStore);
  } else if (userDoing === "3") {
    printIteminStore(productsInStore);
  }
}

// Add Product in store
function addProductInStore(itemName, store) {
  if (store.indexOf(itemName) === -1) {
    alert(`You added in store ${itemName}`);
    store.push(itemName);
  }
}

// Print all item in store
function printIteminStore(store) {
  store.forEach((item) => {
    firstChar = Array.from(item)[0];
    console.log(firstChar.toUpperCase() + item.slice(1));
  });
}

// Delete item in store
function deleteItem(itemName, store) {
  const index = store.indexOf(itemName);
  if (index > -1) {
    alert(`You deleted from store ${itemName}`);
    store.splice(index, 1);
  }
}
