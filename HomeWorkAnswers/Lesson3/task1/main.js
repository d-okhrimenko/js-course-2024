function checkNumber() {
  let inputNumber = parseFloat(document.getElementById("numberInput").value);
  let resultElement = document.getElementById("result");

  if (isNaN(inputNumber)) {
    resultElement.textContent = "Ви ввели не число!";
    resultElement.style.color = "red";
  } else {
    if (inputNumber % 2 === 0) {
      resultElement.textContent = `Число ${inputNumber} є парним.`;
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = `Число ${inputNumber} є непарним.`;
      resultElement.style.color = "blue";
    }
  }
}
