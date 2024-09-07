const books = [
    { id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
    { id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
    { id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
    { id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
    { id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },

];
let lastId=5;

function add(book){
    lastId++;
    book.id = lastId;
    books.push(book)
}
function remove(id){
    let index = books.findIndex(x => x.id == id)
    books.splice(index, 1)
}
function update(id, book){
    let index = books.findIndex(x => x.id == id)
    book.id = id
    books[index]= book
}
function find(id){
    let index = books.findIndex(x => x.id == id)
    return books[index]

}