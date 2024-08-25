const shoppingList = [];

const addItem = (productName) => {
  if (!productName) {
    return;
  }

  shoppingList.push(productName);
};

const removeItem = (productName) => {
  const idx = shoppingList.findIndex((item) => item === productName);
  shoppingList.splice(idx, 1);

  // Видаляє одразу всі співпадіння.
  // shoppingList.forEach((item, idx) => {
  //   if (item === productName) {
  //     shoppingList.splice(idx, 1);
  //   }
  // });
};

const showShoppingList = () => {
  if (shoppingList.length > 0) {
    alert(`Список покупок:\n- ${shoppingList.join('\n- ')}`);
  } else {
    alert('Список покупок порожній.');
  }
};

const manageShoppingList = () => {
  while (true) {
    const action = prompt(
      'Оберіть дію:\n"add" - додати товар\n"remove - видалити товар\n"show" - показати товари зі списку\nНатисніть "Скасувати" для виходу.'
    );

    if (action === null) {
      alert('Скасовано користувачем');
      break;
    }

    let productName;

    switch (action.toLowerCase()) {
      case 'add':
        productName = prompt('Введіть назву продукту, для додавання:');
        addItem(productName);
        break;
      case 'remove':
        productName = prompt('Введіть назву продукту, для видалення:');
        removeItem(productName);
        break;
      case 'show':
        showShoppingList();
        break;
      default:
        alert('Невідома дія. Спробуйте ще раз.');
    }
  }
};

manageShoppingList();
