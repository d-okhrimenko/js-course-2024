export class View {
  constructor(dialog) {
    this.dialog = dialog;
  }
  render(books, el, template) {
    let html = template({ books });
    el.innerHTML = html;
  }

  showDialog(context) {
    this.dialog.show(context);
  }
}