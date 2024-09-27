function shopingList() {
  let shopingList = [];

  while (true) {
    const inputChoice = Number(prompt(`${displayShopingList(shopingList)}\n\nОберіть дію:\n1 - додати\n2 - видалити`));
    console.log(inputChoice);
    if (inputChoice === 0) {
      alert("Ввід скасовано.\nЗавершення програми...");
      break;
    }
    operationChoice(shopingList, inputChoice);
  }

  function operationChoice(array, choice) {
    switch (choice) {
      case 1:
        addGood(array);
        break;
      case 2:
        deleteGood(array);
        break;
      default:
        alert("Невірний вибір!");
    }
  };

  function addGood(array) {
    const input = getValidGoodName("Введіть назву товару:");
    if (input !== null) array.push(input);
  };

  function deleteGood(array) {
    if (array.length === 0) {
      alert("Список порожній...");
      return;
    }
    const itemNumber = getValidGoodNumber(array, "Введіть номер товару для видалення:");
    if (itemNumber !== null) array.splice(itemNumber - 1, 1);
  };

  function displayShopingList(array) {
    if (array.length > 0) {
      return `Список покупок:\n${array.map((item, index) => `${index + 1}. ${item}`).join('\n')}`;
    } else {
      return "Список порожній...";
    }
  };

  function getValidGoodNumber(array, message) {
    while (true) {
      const input = Number(prompt(message));
      if (input === 0) return null;

      if (input > 0 && input <= array.length) {
        return input;
      } else {
        alert("Невірний номер товару!");
      }
    }
  };

  function getValidGoodName(message) {
    while (true) {
      const input = prompt(message);
      if (input === null) return null;

      if (input !== "") {
        return input.trim();
      } else {
        alert("Поле не може бути пустим!");
      }
    }
  };
};