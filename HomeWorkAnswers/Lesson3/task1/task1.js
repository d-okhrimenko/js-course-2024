function checkParity() {
  let input = document.getElementById("numberInput").value;
  let number = parseInt(input, 10);
  let resultDiv = document.getElementById("result");
  if (isNaN(number)) {
    resultDiv.textContent = "Будь ласка, введіть правильне число.";
  } else {
    if (number % 2 === 0) {
      resultDiv.textContent = number + " є парним числом.";
    } else {
      resultDiv.textContent = number + " є непарним числом.";
    }
  }
}
