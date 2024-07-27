const input = document.querySelector("#input");
document.querySelector("#btn").onclick = function () {
  const name = input.value;
  document.querySelector("#msg").innerHTML = `Hello, ${name}`;
};
