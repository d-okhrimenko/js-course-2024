console.log("index_1.html");

function calculation(height, weight) {
  imt = weight/Math.pow(height/100, 2);
  return parseFloat(imt.toFixed(1));
}

function recommendations(height, weight) {
  let imt = calculation(height, weight);
  let text;

  if(imt < 18.5) text = "У вас недостатня вага.";
  else if(imt >= 18.5 && imt <= 24.9) text = "У вас нормальна маса тіла.";
  else if(imt >= 25 && imt <= 29.9) text = "У вас зайва вага.";
  else text = "У вас ознаки ожиріння.";
  return `Ваш індекс маси тіла ${imt}. ${text}`;
}

let clearInputField = () => inputElement.value = '';
let clearTextError = () => textError.textContent = "";

let button = document.querySelector("#btn");

let step = 1;
let height;
let weight;
let textMessages = document.querySelector("#textMessages");
let textError = document.querySelector("#textError");
let textRecommendations = document.querySelector("#textRecommendations");
let inputElement = document.querySelector("#input");

button.addEventListener("click", function() {
  let userValue = inputElement.value;

  if (step === 1) {
    if(isValidNumber(userValue)) {
      clearTextError();
      textRecommendations.textContent = "";
      height = Math.floor(+userValue);
      textMessages.innerHTML = `Ваш зріст: ${height} см<br>`;
      clearInputField();
      step = 2;
      this.textContent = 'Введіть ваш вагу';
    } else {
      clearInputField();
      textError.textContent = "Введіть корректне число!";
    }
  } else if (step === 2) {
    if(isValidNumber(userValue)) {
      clearTextError();
      weight = Math.floor(+userValue);
      textMessages.innerHTML += `Ваша вага: ${weight} кг`;
      clearInputField();
      step = 1;
      textRecommendations.textContent = recommendations(height, weight);
      this.textContent = 'Введіть ваш зріст';
    } else {
      clearInputField();
      textError.textContent = "Введіть корректне число!";
    }
  }
});