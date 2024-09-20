const form = document.forms[0];

// form.addEventListener("submit", function () {
//   for (let i = 0; i < form.elements.length - 1; i++) {
//     console.log(form.elements[i].className);
//     console.log(form.elements[i].name);
//     console.log(form.elements[i].id);
//     console.log(form.elements[i].type);
//     console.log(form.elements[i].tagName);
//     console.log(form.elements[i].value);
//   }
// });

form.title.addEventListener("change", function (event) {
  let titleCoincidence = booksList.books.some((el) => el.title == form.title.value);
  if (titleCoincidence) {
    form.title.setCustomValidity("Книга з такою назвою вже є у списку");
    event.preventDefault();
  } else {
    form.title.setCustomValidity("");
  }
});

const minYear = 1450;
let currentYear = new Date().getFullYear();

form.year.addEventListener("change", function (event) {
  if (form.year.value < minYear) {
    form.year.setCustomValidity("Рік видання не може бути меншим за 1450 рік");
    event.preventDefault();
  } else if (form.year.value > currentYear) {
    form.year.setCustomValidity("Рік видання не може бути більшим за поточний рік");
    event.preventDefault();
  } else {
    form.year.setCustomValidity("");
  }
});
