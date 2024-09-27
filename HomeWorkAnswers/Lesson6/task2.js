let goods = ['bread', 'milk'];

function addItem(itemName) {
  goods.push(itemName);
}

function removeItem(itemName) {
  goods = goods.filter((item) => item !== itemName);
}

function showGoods(array) {
  let result = '';
  for (let index = 0; index < array.length; index++) {
    result += `#${index + 1} is ${array[index]}\n`;
  }
  return result;
}

let runProgram = true;
while (runProgram) {
  let action = prompt(
    'Choose your action (add=a, remove=r, show=s) with a list of goods or exit.'
  );
  let item;
  switch (action) {
    default:
      alert(`Your action is invalid. Try again.`);
      break;
    case 'add':
    case 'a':
      item = prompt('Enter your item to add:');
      addItem(item);
      break;
    case 'remove':
    case 'r':
      item = prompt('Enter your item to remove:');
      removeItem(item);
      break;
    case 'show':
    case 's':
      alert(showGoods(goods));
      break;
    case 'exit':
    case null:
      runProgram = false;
      break;
  }
}
