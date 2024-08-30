console.log("index_1.html");

document.querySelector("#btn").onclick = function () {
  let userInput = +(document.querySelector("#input").value);
  userInput % 2 == 0 ? result("Число ПАРНЕ") : result("Число НЕПАРНЕ");
}

function result(text) {
  alert(text);
}