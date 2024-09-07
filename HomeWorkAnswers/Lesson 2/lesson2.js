const pagePath = window.location.pathname.split('/').pop();

if (pagePath === "task2.html") {
  document.querySelector("#current-date").textContent = new Date().toLocaleDateString();
}

if (pagePath === "task3.html") {
  const name = "Олександр";

  document.querySelector("#btn").onclick = function () {
    document.querySelector("#name").textContent = `Привіт, ${name}!`;
  }
}