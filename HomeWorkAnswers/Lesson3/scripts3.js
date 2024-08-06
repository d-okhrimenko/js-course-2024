function checkBissextile() {
  let inputValue = document.getElementById("input-y").value;
  let yearForCheck = parseInt(inputValue);
  let resultOutput = document.getElementById("check-result");
  if (isNaN(yearForCheck) || yearForCheck <= 0) {
    resultOutput.innerHTML = "Введіть, будь-ласка, рік";
    resultOutput.style.color = "red";
  } else {
    let typeYear;
    typeYear = ((yearForCheck % 4) === 0) ? "Рік високосний" : "Рік не є високосним";
    resultOutput.style.color = "green";
    resultOutput.innerHTML = typeYear;
  }
}