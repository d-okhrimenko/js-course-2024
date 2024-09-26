const booksView = {
  render: function (array, htmlElement) {
    htmlElement.innerHTML = "";
    array.forEach((element) => {
      let section = document.createElement("div");
      section.classList.add("book");

      section.insertAdjacentHTML("beforeend", `<h2>${element.title}</h2>`);
      section.insertAdjacentHTML("beforeend", `<h3>${element.author}</h2>`);
      section.insertAdjacentHTML("beforeend", `<p>Рік видання: ${element.year}</p>`);
      section.insertAdjacentHTML("beforeend", `<p>Жанр твору: ${element.genre}</p>`);
      section.insertAdjacentHTML("beforeend", `<button class="button" onclick="edit(${element.id})">Редагувати</button>`);
      section.insertAdjacentHTML("beforeend", `<button class="button" onclick="remove(${element.id})">Видалити</button>`);

      htmlElement.appendChild(section);
    });
  },
};
