let userNumber = Number(prompt("Введіть число"));
function isANumber(number) {
  if (!number) {
    let userNumber = Number(prompt("Спробуйте ще раз. Введіть число"));
    isANumber(userNumber);
  } else {
    console.log(number);
    let result = number % 2;
    if (result === 0) {
      document.querySelector(
        "#num"
      ).innerHTML = `Ви ввели парне число ${number}`;
    } else {
      document.querySelector(
        "#num"
      ).innerHTML = `Ви ввели непарне число ${number}`;
    }
  }
}
isANumber(userNumber);
