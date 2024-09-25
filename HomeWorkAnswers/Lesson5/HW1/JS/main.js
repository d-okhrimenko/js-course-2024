// 2. Створити функцію для визначення категорії ІМТ:
//    - Використайте стандартні категорії ВООЗ:
//      - Недостатня вага: ІМТ < 18.5
//      - Нормальна вага: 18.5 ≤ ІМТ < 24.9
//      - Надмірна вага: 25 ≤ ІМТ < 29.9
//      - Ожиріння: ІМТ ≥ 30

let userHeight, userWeight;
while (true) {
  userHeight = prompt("Введіть свій зріст (наприклад 1.78) : ");
  if (userHeight === "" || userHeight === null || userHeight === undefined) {
    alert("Треба ввести значення!");
    continue;
  } else {
    userHeight = Number(userHeight);
    if (!isNaN(userHeight)) {
      while (true) {
        userWeight = prompt("Введіть свою вагу (наприклад 99.9 : ");
        if (userWeight === "" || userWeight === null || userWeight === undefined) {
          alert("Треба ввести значення!");
          continue;
        } else {
          userWeight = Number(userWeight);
          if (!isNaN(userWeight)) {
            break;
          }else{
            alert("всі значення мають бути цифрами!");
          }   
        }
      }
      break;
    } else {
      alert("всі значення мають бути цифрами!");
    }
  }

  // userWeight = +prompt('Введіть свою вагу (наприклад 76.7) : ');
  // console.log(userHeight);
}

getResult(getIMT, userWeight, userHeight);

function getResult(value, weight, height) {
  if (typeof value === "function") {
    let index = value(weight, height);
    if (index < 18.8) {
      alert("Недостатня вага");
    } else if (index < 24.9) {
      alert("Нормальна вага");
    } else if (index < 29.9) {
      alert("Надмірна вага");
    } else {
      alert("Ожиріння");
    }
  }
}

function getIMT(weight, height) {
  let IMT = 0;
  if (typeof height === "number" && typeof weight === "number") {
    IMT = weight / Math.pow(height, 2);
  }
  return IMT.toFixed(2);
}
