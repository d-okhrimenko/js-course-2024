// Встановив розширення Live Server та користуюсь їм для завантаження сторінок у браузері.

let myDate = new Date();

let output = document.querySelector("#output");
output.innerHTML = myDate;

let btn = (document.querySelector("#btn").onclick = () => {
  let myName = "Maksym";
  alert(`Привіт ${myName}, як справи?`);
});
