let listBooks = () => {
  const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    {
      title: "Гаррі Поттер і філософський камінь",
      author: "Дж. К. Роулінг",
      year: 1997,
      genre: "Фентезі",
    },
    {
      title: "Гра престолів",
      author: "Джордж Р. Р. Мартін",
      year: 1996,
      genre: "Фентезі",
    },
    {
      title: "Старий і море",
      author: "Ернест Хемінгуей",
      year: 1952,
      genre: "Пригодницький роман",
    },
    {
      title: "Майстер і Маргарита",
      author: "Михайло Булгаков",
      year: 1967,
      genre: "Фантастика",
    },
  ];

  const paragraphs = [];

  return {
    _add() {
      for (let i = 0; i < books.length; i++) {
        let p = document.createElement("p");

        p.textContent = `${books[i].title} — ${books[i].author}, ${books[i].year}, ${books[i].genre}`;

        paragraphs.push(p);
        console.log(p);
      }
    },

    _display() {
      let div = document.querySelector("#bookList");

      if (!div) {
        console.error("Элемент с id 'bookList' не найден.");
        return;
      }

      paragraphs.forEach((i) => {
        div.appendChild(i);
      });
    },
  };
};

const bookList = listBooks();
bookList._add();
bookList._display();
