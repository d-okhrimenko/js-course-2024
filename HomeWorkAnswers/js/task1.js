const input = prompt('Введыть число');
const userNumber = Number(input);

if (isNaN(userNumber)) {
  alert(`Введіть будь-ласка корректне число`);
} else {
  if (!(userNumber % 2)) {
    alert(`Число ${userNumber} є парним`);
  } else {
    alert(`Число ${userNumber} є непарним`);
  }
}
