const books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
	{ title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

function addBooks() {
    let container = document.querySelector("div")

    for (let i = 0; i < books.length; i++) {
        let listOfInfo = document.createElement("ul")

        let title = document.createElement("p")
        title.textContent = books[i]["title"]
        
        let author = document.createElement("p")
        author.textContent = books[i]["author"]

        let year = document.createElement("p")
        year.textContent = books[i]["year"]

        let genre = document.createElement("p")
        genre.textContent = books[i]["genre"]

        listOfInfo.appendChild(title)
        listOfInfo.appendChild(author)
        listOfInfo.appendChild(year)
        listOfInfo.appendChild(genre)

        container.appendChild(listOfInfo)
    }
}

addBooks()