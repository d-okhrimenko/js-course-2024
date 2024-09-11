const booksView = {
  render: function (array, htmlElement) {
    htmlElement.innerHTML = ""; // Очищаємо контейнер перед рендером

    array.forEach((element) => {
      let section = document.createElement("div");
      section.classList.add("book");

      // Додаємо назву книги
      section.insertAdjacentHTML("beforeend", `<h2>${element.title}</h2>`);
      
      // Додаємо автора книги
      section.insertAdjacentHTML("beforeend", `<h3>${element.author}</h3>`);
      
      // Додаємо рік видання
      section.insertAdjacentHTML("beforeend", `<p>Рік видання: ${element.year}</p>`);
      
      // Додаємо жанр
      section.insertAdjacentHTML("beforeend", `<p>Жанр твору: ${element.genre}</p>`);
      
      // Додаємо кнопку "Редагувати"
      section.insertAdjacentHTML("beforeend", `<button class="button" onclick="edit(${element.id})">Редагувати</button>`);
      
      // Додаємо кнопку "Видалити"
      section.insertAdjacentHTML("beforeend", `<button class="button" onclick="remove(${element.id})">Видалити</button>`);

      // Додаємо новий елемент до HTML-контейнера
      htmlElement.appendChild(section);
    });
  }
};






  