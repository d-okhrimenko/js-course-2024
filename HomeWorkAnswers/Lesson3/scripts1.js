function checkNumber() {
  let inputValue = document.getElementById("input-n").value;
  let numberForCheck = parseFloat(inputValue);
  let resultOutput = document.getElementById("check-result");
  if (isNaN(numberForCheck)) {
    // document.getElementById("check-result").innerHTML = "Введіть, будь-ласка, число";
    resultOutput.innerHTML = "Введіть, будь-ласка, число";
    resultOutput.style.color = "red";
  } else {
    let typeNumber;
    if (numberForCheck === 0) {
      typeNumber = "Введено число 0";
      resultOutput.style.color = "red";
    } else {
      typeNumber = ((numberForCheck % 2) === 0) ? "Введене число парне" : "Введене число непарне";
      resultOutput.style.color = "green";
    }
    resultOutput.innerHTML = typeNumber;
  }
}