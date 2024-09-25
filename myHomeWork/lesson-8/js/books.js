"use strict";

const books = {
  book: [
    {
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
      genre: "Антиутопія",
    },
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
  ],
  render() {
    this.book.forEach((item) => {
      const body = document.querySelector(".book-list__body");

      const section = document.createElement("section");
      body.appendChild(section);
      section.classList.add("book-list__item");
      section.innerHTML = `
            <h2>Назва:  ${item.title}</h2>
            <p>Автор:  ${item.author}</p>
            <p>Рік видавництва: ${item.year}</p>
            <p>Жанр: ${item.genre}</p>
        `;
      console.log(item);
    });
  },
};

export { books };
