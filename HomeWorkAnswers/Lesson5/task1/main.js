let myWeight = Number(prompt("Введіть вашу вагу?"));
let myHeight = Number(prompt("Введіть ваш зріст?"));

function indexWeight(myWeight, myHeight) {
  let myIndexWeight = parseFloat((myWeight / (myHeight * myHeight)).toFixed(2));
  return myIndexWeight;
}

function categoryIndex(myIndexWeight) {
  let myCategory;
  if (myIndexWeight < 18.5) {
    myCategory = "Свідчить про недостатню вагу";
  } else if (myIndexWeight >= 18.5 && myIndexWeight <= 24.9) {
    myCategory = "Еквівалент нормальної маси тіла";
  } else if (myIndexWeight >= 25 && myIndexWeight <= 29.9) {
    myCategory = "Вказує на наявність зайвої ваги";
  } else if (myIndexWeight > 30) {
    myCategory = "Є ознакою ожиріння";
  }
  return myCategory;
}

let indexIMT = indexWeight(myWeight, myHeight);
let categoryFat = categoryIndex(indexIMT);

alert(`Ваш ІМТ = ${indexIMT} кг/м2.\nОзнака: ${categoryFat}.`);
