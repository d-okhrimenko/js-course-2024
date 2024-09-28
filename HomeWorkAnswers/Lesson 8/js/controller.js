const section = document.querySelector("#bookList");
bookList.render(books, section);

const showBtn = () => {
  section.classList.replace("hide", "show");
};

const hideBtn = () => {
  section.classList.replace("show", "hide");
};
