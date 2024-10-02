let myWeight = Number(prompt("Введіть вашу вагу?"));
let myHeight = Number(prompt("Введіть ваш зріст?"));
let myCategory;

let indexWeight = (myWeight, myHeight) =>
  (myWeight / Math.pow(myHeight, 2)).toFixed(2);

let categoryIndex = (indexWeight) => {
  if (indexWeight < 18.5) {
    myCategory = "Свідчить про недостатню вагу";
  } else if (indexWeight >= 18.5 && indexWeight <= 24.9) {
    myCategory = "Еквівалент нормальної маси тіла";
  } else if (indexWeight >= 25 && indexWeight <= 29.9) {
    myCategory = "Вказує на наявність зайвої ваги";
  } else if (indexWeight > 30) {
    myCategory = "Є ознакою ожиріння";
  }
  return myCategory;
};

let indexIMT = indexWeight(myWeight, myHeight);
let categoryFat = categoryIndex(indexIMT);

alert(`Ваш ІМТ = ${indexIMT} кг/м2.\nОзнака: ${categoryFat}.`);
