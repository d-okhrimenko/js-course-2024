document.querySelector("#btn-check").onclick = function () {
  let today = new Date();
  let weekDay = today.getDay();
  if (weekDay == 1) {
    showResult("Сьогодні: понеділок");
  } else if (weekDay == 2) {
    showResult("Сьогодні: вівторок");
  } else if (weekDay == 3) {
    showResult("Сьогодні: середа");
  } else if (weekDay == 4) {
    showResult("Сьогодні: четвер");
  } else if (weekDay == 5) {
    showResult("Сьогодні: п'ятниця");
  } else if (weekDay == 6) {
    showResult("Сьогодні: субота");
  } else if (weekDay == 7) {
    showResult("Сьогодні: неділя");
  } else {
    showResult("Хто зна, що за день тижня сьогодні :(");
  }
};

function showResult(result) {
  let output = document.querySelector("#output");
  output.innerHTML = result;
}
