window.addEventListener("load", () => {
  let today = new Date();
  let result = document.querySelector("#result");
  let day = today.getDay();
  result.innerHTML = showDayOfTheWick(day);
});

function showDayOfTheWick(value) {
  let result = "";
  let daysOfTheWick = ["Нуділя", "Понедмлок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"];

  if (value < 0 || value > daysOfTheWick.length) {
    return;
  }

  result = daysOfTheWick[value];
  return result;
}
