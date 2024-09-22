document.querySelector("#btn").onclick = function () {
  let name = "Oleksandr";
  let output = document.querySelector("#output");
  output.innerHTML = `Hello ${name}!`;
  output.style.color = "red";
};
