let currentDate = new Date();
document.querySelector("#current-date").innerHTML = currentDate;
document.querySelector("#btn").onclick = function () {
  let welcomeMessage = document.querySelector("#hello-message");
  welcomeMessage.innerHTML = "Hi, Vladyslav!"
}