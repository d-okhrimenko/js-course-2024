let number = +prompt("Введіть число: ");

let mod = number % 2;

console.log(mod);

if (mod >= 0){
    if (mod === 0){
     alert("Число парне");
    } else if (mod === 1){
     alert("Число непарне");
    }
} else if (alert ("Ввід числа неправильний"));