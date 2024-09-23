function render(data, htmlElement) {
  htmlElement.innerHTML = "";

  let section = document.createElement("div");
  section.classList.add("currentWeather");

  section.insertAdjacentHTML("beforeend", `<h2>Погода у населеному пункті ${data.name} (${data.sys.country}) </h2>`);
  section.insertAdjacentHTML("beforeend", `<p>Погода: ${data.weather[0].description}</p>`);
  section.insertAdjacentHTML(
    "beforeend",
    `<p>Поточна температура: ${data.main.temp}&#186;С (максимальна: ${data.main.temp_max}&#186;С, мінімальна: ${data.main.temp_min}&#186;С, відчуваєтся: ${data.main.feels_like}&#186;С)</p>`
  );
  section.insertAdjacentHTML("beforeend", `<p>Тиск: ${Math.round(Number(data.main.pressure) * 0.7501)} мм рт. ст.</p>`);

  htmlElement.appendChild(section);
}
