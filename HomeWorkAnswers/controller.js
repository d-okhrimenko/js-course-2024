// 1.   ================================
// let list = document.querySelector('.book-list__items')

// bookView.render(bookModule.books, list)

// 2.   ================================
let listItems = document.querySelector('.book-list__items')
let template = document.querySelector('#template').innerHTML
let bookForm = document.querySelector('#bookForm')

//inputs
const titleInput = document.querySelector('#title-input')
const authorInput = document.querySelector('#author-input')
const yearInput = document.querySelector('#year-input')
const genreInput = document.querySelector('#genre-input')
const idInput = document.querySelector('#id-input')

let editId = null

function render() {
  bookView.renderWithTemplate(bookModule.books, listItems, template)
}

bookForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
    id: idInput.value,
  }
  if (editId == null) {
    bookModule.add(book)
  } else {
    bookModule.update(editId, book)
    editId = null
  }
  render()
})

function remove(id) {
  bookModule.remove(id)
  render()
}

function edit(id) {
  const book = bookModule.find(id)

  editId = book.id

  titleInput.value = book.title
  authorInput.value = book.author
  yearInput.value = book.year
  genreInput.value = book.genre

  render()
}

render()
// 3.   ================================
