let userVal = Number(
  prompt(
    "Камінь, ножиці чи папір? Введіть 0, щоб обрати камінь, 1 - ножиці, 2 - папір. "
  )
);

let compVal = getRandomNumber(0, 3);
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let options = ["Камінь", "Ножиці", "Папір"];

if (
  (userVal === 0 && compVal === 1) ||
  (userVal === 1 && compVal === 2) ||
  (userVal === 2 && compVal === 0)
) {
  alert(
    `Ви обрали ${options[userVal]}, комп'ютер обрав ${options[compVal]}. Ви перемогли.`
  );
} else if (userVal === compVal) {
  alert(
    `Ви обрали ${options[userVal]}, комп'ютер обрав ${options[compVal]}. Нічия.`
  );
} else {
  alert(
    `Ви обрали ${options[userVal]}, комп'ютер обрав ${options[compVal]}. Ви програли.`
  );
}
