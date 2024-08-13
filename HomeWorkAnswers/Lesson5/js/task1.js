function getImt(weight, height) {
  console.log(typeof weight);
  height /= 100;
  let imt = weight / (height * height);
  return imt;
}

function getCategoryImt(imt) {
  if (imt < 18.5) return "Недостатня вага";
  else if (imt < 24.9) return "Нормальна вага";
  else if (imt < 29.9) return "Надмірна вага";
  else if (imt >= 30.0) return "Ожиріння";
  else return "Не коректні дані";
}

document.querySelector("#btn").onclick = function () {
  let weight = Number(document.querySelector("#weight").value);
  let height = Number(document.querySelector("#height").value);
  let imt = getImt(weight, height);
  result = getCategoryImt(imt);
  let output = document.querySelector("#output");
  output.innerHTML = result;
};
