const Controller = {
    async init() {
        const books = await Model.fetchBooks();
        View.displayBooks(books);
    }
};

document.addEventListener('DOMContentLoaded', () => Controller.init());
