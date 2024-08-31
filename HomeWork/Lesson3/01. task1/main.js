document.querySelector("#btn").onclick = function () {
  let userValue = Number(document.querySelector("#number").value);
  if (userValue % 2 === 0) {
    document.querySelector("#result").innerHTML = "Парне";
  } else {
    document.querySelector("#result").innerHTML = "Непарне";
  }
};
