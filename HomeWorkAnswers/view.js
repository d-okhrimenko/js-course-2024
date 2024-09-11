// const bookView = {
//   render(books, element) {
//     //         <li class="book-list__item">
//     //     <h2 class="book-list__title">Назва: 1984</h2>
//     //     <p class="book-list__author">Автор: Джордж Орвелл</p>
//     //     <p class="book-list__year">Рік: 1949</p>
//     //     <p class="book-list__genre">Жанр: Антиутопія</p>
//     //   </li>
//     books.forEach((book) => {
//       let listItem = document.createElement('li')
//       listItem.classList.add('book-list__item')
//       listItem.insertAdjacentHTML('beforeend', `<h2>Назва: ${book.title}</h2>`)
//       listItem.insertAdjacentHTML('beforeend', `<p>Автор: ${book.author}</p>`)
//       listItem.insertAdjacentHTML('beforeend', `<p>Рік: ${book.year}</p>`)
//       listItem.insertAdjacentHTML('beforeend', `<p>Жанр: ${book.genre}</p>`)
//       element.appendChild(listItem)
//     })
//   },
// }

// 2.   ================================

const bookView = {
  renderWithTemplate(books, element, template) {
    let listItems = ''
    books.forEach((book) => {
      listItems += Mustache.render(template, book)
    })
    element.innerHTML = listItems
  },
}
