const books = [
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
  ];
  function showAllBooks(arr) {
    let view = document.querySelector("#booklist");
    arr.forEach((book) => {
      let p = document.createElement("p");
      p.textContent = `Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre}`;
      view.appendChild(p);
    });
  }

  showAllBooks(books);