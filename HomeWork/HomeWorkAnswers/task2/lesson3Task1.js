"use strict";

let value = prompt("Введіть число");
let valueNumb = Number(value);

if (value == valueNumb) {
  if (valueNumb % 2 === 0) {
    alert("це число парне");
  } else {
    alert("це число непарне");
  }
} else {
  alert("це не число");
}
