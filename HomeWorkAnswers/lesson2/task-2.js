document.querySelector("#btn").onclick = function () {
  const day = new Date();
  document.querySelector("#date").innerHTML = "Сьогодні " + day;
};
