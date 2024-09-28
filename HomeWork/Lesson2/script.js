const myName = "Natalia";
const btn = document.getElementById("btn");
btn.onclick = function () {
  btn.textContent = `Привіт ${myName}`;
};
