function yearTrue() {
  let input = document.getElementById("yearInput").value;
  let year = parseInt(input, 10);
  let resultDiv = document.getElementById("result");
  if (isNaN(year) || year <= 0) {
    resultDiv.textContent = "Будь ласка, введіть коректний рік.";
  } else {
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeap) {
      resultDiv.textContent = year + " є високосним роком.";
    } else {
      resultDiv.textContent = year + " не є високосним роком.";
    }
  }
}
