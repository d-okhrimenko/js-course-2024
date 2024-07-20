const myName = "Валерій";

document.querySelector("#btn").onclick = function () {
  let output = document.querySelector("#hello");
  output.innerHTML = "Привіт " + myName;
  output.style.color = "red";
};
