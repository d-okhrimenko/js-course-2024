console.log('index_2.html')

let array = ['Сукня', 'Спідниця'];

let isValidNumberRange = (input) => input >= 0 && input <= 3;
let isValidNumber = (input) => typeof input === 'string' && input.trim() !== '' && !isNaN(input) && input !== null;

let addProduct = (product) => array.push(product);

function deleteProduct(product) {
  let indexProduct = array.indexOf(product);
  if(indexProduct !== -1) {
    array.splice(indexProduct, 1);
  } else {
    alert('Ви намагаєтеся видалити неіснуючий товар!');
  }
}

let printArray = (arr) => alert(`Наш масив товарів:\n${arr.join('\n ')}`);

while(true) {
  let userInput = prompt('Виберіть дію:\n1 - додати товар;\n2 - видалити товар;\n3 - вивести список товарів\n0 - EXIT');
  if(isValidNumber(userInput) && isValidNumberRange(userInput)) {
    userInput = Math.floor(Number(userInput));
    switch(userInput) {
      case 1:
        let productAdd = prompt('Введіть назву товару');
        addProduct(productAdd);
        printArray(array);
        break;
      case 2:
        let productDelete = prompt(`Вкажіть товар для відалення:\n${array.join('\n ')}`);
        deleteProduct(productDelete);
        printArray(array);
        break;
      case 3:
        printArray(array);
        break;
    }
    if(userInput === 0) break;
  } else {
    alert('Введіть коректне значення');
  }
}
