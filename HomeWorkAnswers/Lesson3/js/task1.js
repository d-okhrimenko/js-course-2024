document.querySelector("#btn-check").onclick = function () {
  let number = Number(document.querySelector("#number").value);
  if (number == 0) {
    showResult("Нуль");
  } else if (number % 2 == 0) {
    showResult("Парне");
  } else {
    showResult("Не парне");
  }
};

document.querySelector("#number").onclick = function () {
  showResult("");
  document.querySelector("#number").value = "";
};

function showResult(result) {
  let output = document.querySelector("#output");
  output.innerHTML = result;
}
