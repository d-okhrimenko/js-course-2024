const bookList = {
  render(books, element) {
    // <section class="book">
    //   <h2>Whatever Happened to Harold Smith?</h2>
    //   <p>Author: Jourdan Bowser</p>
    //   <p>Year: 2006</p>
    //   <p>Genre: Comedy</p>
    // </section>

    books.forEach(book => {
      let section = document.createElement("section");
      section.classList.add("book");
      section.insertAdjacentHTML("beforeend", `<h2>Whatever Happened to Harold Smith?</h2>`);
      section.insertAdjacentHTML("beforeend", `<p>Author: Jourdan Bowser</p>`);
      section.insertAdjacentHTML("beforeend", `<p>Year: 2006</p>`);
      section.insertAdjacentHTML("beforeend", `<p>Genre: Comedy</p>`);
      element.appendChild(section);
    });
  }
}