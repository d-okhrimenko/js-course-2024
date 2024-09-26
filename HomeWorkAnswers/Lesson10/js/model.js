const booksList = {
    books: [
    { id: 1, title: "Add book...", author: "", year: "", genre: "" },
    { id: 2, title: "До побачення, зброє", author: "Ернест Гемінґвей", year: 1929, genre: "Роман" },
    { id: 3, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
    { id: 4, title: "Злочин і кара", author: "Федір Достоєвський", year: 1866, genre: "Роман" },
    { id: 5, title: "Убити пересмішника", author: "Гарпер Лі", year: 1960, genre: "Соціальна драма" },
    { id: 6, title: "Гордість і упередження", author: "Джейн Остін", year: 1813, genre: "Роман" },
    { id: 7, title: "Франкенштейн", author: "Мері Шеллі", year: 1818, genre: "Готика" },
    { id: 8, title: "Старий і море", author: "Ернест Гемінґвей", year: 1952, genre: "Новела" },
    { id: 9, title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг", year: 1997, genre: "Фентезі" },
    { id: 10, title: "Аліса в Країні чудес", author: "Льюїс Керролл", year: 1865, genre: "Фентезі" },
    { id: 11, title: "Браття Карамазови", author: "Федір Достоєвський", year: 1880, genre: "Роман" },
    { id: 12, title: "Володар перснів", author: "Дж. Р. Р. Толкін", year: 1954, genre: "Фентезі" },
    { id: 13, title: "Анна Кареніна", author: "Лев Толстой", year: 1877, genre: "Роман" },
    { id: 14, title: "Мобі Дік", author: "Герман Мелвілл", year: 1851, genre: "Роман" },
    { id: 15, title: "Парфумер", author: "Патрік Зюскінд", year: 1985, genre: "Історичний роман" },
    { id: 16, title: "Великий Гетсбі", author: "Френсіс Скотт Фіцджеральд", year: 1925, genre: "Роман" },
    { id: 17, title: "Портрет Доріана Ґрея", author: "Оскар Вайлд", year: 1890, genre: "Філософський роман" },
    { id: 18, title: "Процес", author: "Франц Кафка", year: 1925, genre: "Екзистенціалізм" },
    { id: 19, title: "На західному фронті без змін", author: "Еріх Марія Ремарк", year: 1929, genre: "Антивоєнний роман" },
    { id: 20, title: "Сто років самотності", author: "Габріель Гарсіа Маркес", year: 1967, genre: "Магічний реалізм" },
    { id: 21, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" }
],

lastId: 21,

add(book) {
    this.lastId++;
    book.id = this.lastId;
    this.books.push(book);
},
remove(id) {
    let index = this.books.findIndex(x => x.id == id);
    this.books.splice(index, 1);
},
update(id, book) {
    let index = this.books.findIndex(x => x.id == id);
    this.books[index] = book;
},
find(id) {
    let index = this.books.findIndex(x => x.id == id);
    return this.books[index];
},
findByTitle(title,excludedId) {
    return this.books.find(book => book.title.toLowerCase() === title.toLowerCase() && book.id !== excludedId);
  }


};