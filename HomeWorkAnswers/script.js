let books = [
    { title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
	{ title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
];

let form = document.forms[0]
function showBooks() {
    let container = document.getElementById("bookList")

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

        let editButton = document.createElement("button")
        editButton.textContent = "Редагувати"
        editButton.classList.add("book_edit_button")
        editButton.onclick = function () {
            const currentList = this.parentNode;
            const info = currentList.querySelectorAll("p")
            
            form.title.value = info[0].textContent
            form.author.value = info[1].textContent
            form.year.value = info[2].textContent
            form.genre.value = info[3].textContent

            currentList.remove()
            for (let i = 0; i < books.length; i++) {
                if (books[i].title === info[0].textContent) {
                    books.splice(i, 1)
                }
            }
        }

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Видалити"
        deleteButton.classList.add("book_delete_button")
        deleteButton.onclick = function () {
            const currentList = this.parentNode;
            const info = currentList.querySelectorAll("p")
            
            currentList.remove()
            for (let i = 0; i < books.length; i++) {
                if (books[i].title === info[0].textContent) {
                    books.splice(i, 1)
                }
            }
        }

        listOfInfo.appendChild(title)
        listOfInfo.appendChild(author)
        listOfInfo.appendChild(year)
        listOfInfo.appendChild(genre)
        listOfInfo.appendChild(editButton)
        listOfInfo.appendChild(deleteButton)

        container.appendChild(listOfInfo)
    }
}
showBooks()

function clearInputs() {
    const title = form.title
    const author = form.author
    const year = form.year
    const genre = form.genre

    title.value = ""
    author.value = ""
    year.value = ""
    genre.value = ""
}

function deleteOldBooks() {
    let books = document.querySelectorAll("ul")
    for (const book of books) {
        book.remove()
    }    
}

function getNewBookInfo() {
    const title = form.title.value
    const author = form.author.value
    const year = form.year.value
    const genre = form.genre.value
    
    let book = {
        title: title,
        author: author,
        year: year,
        genre: genre
    };

    clearInputs()
    deleteOldBooks()
    books.push(book)
    showBooks()
}

form.addEventListener("submit", function (event) {
    event.preventDefault()
    getNewBookInfo()
})

form.title.addEventListener("change", function() {
    form.title.setCustomValidity("")
    for (const book of books) {
        if (book["title"] === form.title.value) {
            form.title.setCustomValidity("Така книга вже існує!")
        }
    }
})