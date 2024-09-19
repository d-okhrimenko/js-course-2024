const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];


const booksUI = {
    render(books, parentElement, template) {
        let booksHtml = "";
        books.forEach(book => {
            booksHtml += Mustache.render(template, book);
        });
        parentElement.innerHTML = booksHtml;
    }
}


let bookContainer = document.querySelector("#books");
let bookTemplate = document.querySelector("#template-book").innerHTML;
booksUI.render(books, bookContainer, bookTemplate);