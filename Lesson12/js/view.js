import { add } from "./math.js";

const output = document.querySelector("#output");
document.querySelector("#add-button").addEventListener("click", function () {
  let value1 = +document.querySelector("#value1").value;
  let value2 = +document.querySelector("#value2").value;

  let result = add(value1, value2);
  output.textContent = result;
});
