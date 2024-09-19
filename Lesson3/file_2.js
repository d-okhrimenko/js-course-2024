console.log("index_2.html");

const button = document.querySelector("#btn");

button.addEventListener('click', inputDay);

function inputDay() {
  let today = new Date();

  let dayOfWeek = today.getDay();

  switch(dayOfWeek) {
    case 0:
      alert("Неділя");
      break;
    case 1:
      alert("Понеділок");
      break;
    case 2:
      alert("Вівторок");
      break;
    case 3:
      alert("Середа");
      break;
    case 4:
      alert("Четвер");
      break;
    case 5:
      alert("П'ятниця");
      break;
    case 6:
      alert("Субота");
      break;
  }
}