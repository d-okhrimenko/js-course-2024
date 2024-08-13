const imt_btn = document.getElementById("IMT_btn");
const task_2_btn = document.getElementById("task_2_btn");
imt_btn.addEventListener("click", () => {
  let user_weight = parseFloat(prompt("Enter your weight in kg:"));
  let user_height = parseFloat(prompt("Enter your height in meters:"));
  function IMT(weight, height) {
    const index = (weight / Math.pow(height, 2)).toFixed(3);
    if (index < 18.5) {
      alert(`Ваш ІМТ = ${index} - свідчить про недостатню вагу`);
    } else if (index < 24.9 && index >= 18.5) {
      alert(`Ваш ІМТ = ${index} - еквівалент нормальної маси тіла`);
    } else if (index < 29.9 && index >= 25) {
      alert(`Ваш ІМТ = ${index} -  вказує на наявність зайвої ваги`);
    } else alert(`Ваш ІМТ = ${index} -  є ознакою ожиріння`);
  }
  IMT(user_weight, user_height);
});

function kolo() {
  let user_radius = Number(prompt("Введіть радіус кола:"));
  const square = Math.floor(Math.PI * Math.pow(user_radius, 2));
  const perimeter = Math.floor(2 * Math.PI * user_radius);
  return `Площа кола = ${square}, периметр = ${perimeter}`;
}
function rectangular() {
  let user_longitude = Number(prompt("Введіть довжину прямокутника:"));
  let user_width = Number(prompt("Введіть ширину прямокутника:"));
  const square = Math.floor(user_longitude * user_width);
  const perimeter = Math.floor(2 * (user_longitude + user_width));
  return `Площа прямокутника = ${square}, периметр = ${perimeter}`;
}
function triangle() {
  let a = Number(prompt("Введіть довжину першої сторони трикутника:"));
  let b = Number(prompt("Введіть довжину другої сторони трикутника:"));
  let c = Number(prompt("Введіть довжину третьої сторони трикутника:"));
  const p = (a + b + c) / 2;
  const square = Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  const perimeter = Math.floor(a + b + c);
  return `Площа трикутника = ${square}, периметр = ${perimeter}`;
}

task_2_btn.addEventListener("click", () => {
  let user_figura = prompt(
    "Введіть число в залежності від фігури (1 - коло, 2 - прямокутник, 3 - трикутник): "
  );
  switch (user_figura) {
    case "1": {
      alert(kolo());
      break;
    }
    case "2": {
      alert(rectangular());
      break;
    }
    case "3": {
      alert(triangle());
      break;
    }
    default:
      alert("Спробуйте ще раз");
      break;
  }
});
