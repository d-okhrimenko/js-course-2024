let num = parseInt(prompt("Введіть число"));

if (typeof num == "number" && !isNaN(num)) {
  if (num % 2 == 0) alertMsgToUser(num, "");
  else alertMsgToUser(num, "не");
} else alert("Введенне вами значення не є числом");

function alertMsgToUser(num, msg) {
  alert(`Число ${num} є ${msg}парним`);
}
