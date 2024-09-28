export class Dialog {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.form = this.el.querySelector("#dialog-form");
    this.closeBtn = this.el.querySelector(".dialog__btn");
    this.title = this.el.querySelector(".dialog__heading");

    this.closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.setProperties();
      this.el.close(JSON.stringify(this.item));
      this.form.reset();
    });
  }

  show(item) {
    this.item = item;
    this.title.textContent = 'Додати нову книгу';

    if (item) {
      this.addProperties(item);
      this.title.textContent = 'Редагувати книгу';
    }

    this.el.showModal();
  }

  addProperties() {
    for (const name of Object.keys(this.item)) {
      if (name === "id") continue;
      this.form.elements[name].value = this.item[name];
    }
  }

  setProperties() {
    const elements = this.form.querySelectorAll('[name]');

    if (!this.item) {
      this.item = {};
    }

    for (const element of elements) {
      this.item[element.name] = element.value;
    }
  }
}