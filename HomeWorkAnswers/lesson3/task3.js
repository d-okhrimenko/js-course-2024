let userYear = Number(prompt("Введіть рік"));

function isIntegerYear(year) {
  if (!year) {
    let userYear = Number(prompt("Будь ласка, введіть рік"));
    isIntegerYear(userYear);
  } else if (!Number.isInteger(year)) {
    let userYear = Number(prompt("Будь ласка, введіть ціле число"));
    isIntegerYear(userYear);
  } else {
    document.querySelector("#year").innerHTML = year;
    let result = year % 4;
    let outPut = document.querySelector("#value");
    outPut.innerHTML = result === 0 ? "високосний" : "не високосний";
  }
}
isIntegerYear(userYear);
