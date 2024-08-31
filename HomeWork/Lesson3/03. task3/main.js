document.querySelector("#btn").onclick = function () {
  let userVal = Number(document.querySelector("#year").value);
  if ((userVal % 4 === 0 && userVal % 100 !== 0) || userVal % 400 === 0) {
    document.querySelector("#result").innerHTML = "Високосний";
  } else {
    document.querySelector("#result").innerHTML = "Не високосний";
  }
};