const bookList = {
  render(books, element) {
    let markup = '';

    books.forEach(({ id, title, author, year, genre }) => {
      markup += `
        <div>
          <div>
            <span>
              <strong>${title}</strong> - ${author}, ${year}, ${genre}
            </span>
          </div>
          <div>
            <button onclick="edit('${id}')">Редагувати</button>
            <button onclick="remove('${id}')">Видалити</button>
          </div>
        </div>
      `;
    });

    element.innerHTML = markup;
  },
};
