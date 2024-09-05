export class View {
  constructor() { }
  render(books, el, template) {
    let html = "";
    books.forEach(book => html += template(book));
    el.innerHTML = html;
  }
}