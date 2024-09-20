const template = `{{#books}}
  <section class="book">
    <h3>Назва книги: {{title}}</h3>
    <p>Автор: {{author}}</p>
    <p>Рік видання: {{year}}</p>
    <p>Жанр: {{genre}}</p>
    <div class="buttons">
      <button id="update" class="update" onclick="edit({{id}})">
        Редагувати
      </button>
      <button class="delete" onclick="remove({{id}})">Видалити</button>
    </div>
  </section>
{{/books}}`;

/* const bookList = {
  render(books, element, template) {
    let html = "";
    books.forEach((book) => {
      html += Mustache.render(template, book);
    });
    element.innerHTML = html;
  },
}; */
