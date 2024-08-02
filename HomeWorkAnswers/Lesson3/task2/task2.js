function showDayOfWeek() {
  let today = new Date();
  let dayIndex = today.getDay();
  const daysOfWeek = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];
  let dayName = daysOfWeek[dayIndex];
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = "Сьогодні " + dayName + ".";
}
