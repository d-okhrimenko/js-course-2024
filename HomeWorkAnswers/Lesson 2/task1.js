const tagDate = document.querySelector("#date");

setInterval(function () {
  tagDate.innerHTML = new Date();
});
