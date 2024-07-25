function showDayOfWeek() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const days = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П’ятниця",
    "Субота",
  ];

  const dayName = days[dayOfWeek];

  document.getElementById(
    "dayOfWeek"
  ).innerHTML = `Сьогодні:${today.toLocaleDateString()} (${dayOfWeek}-й) день тижня - <b>${dayName}</b>.`;
  return;
}
