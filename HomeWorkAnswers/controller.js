// 1.   ================================
// let list = document.querySelector('.book-list__items')

// bookView.render(bookModule.books, list)

// 2.   ================================
let template = document.querySelector('#template').innerHTML
let listItems = document.querySelector('.book-list__items')

bookView.renderWithTemplate(bookModule.books, listItems, template)
// 3.   ================================
