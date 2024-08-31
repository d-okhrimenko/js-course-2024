const renderBooks = {
    renderWithTemplate(dataBooks, element, template) {
        let html = "";
        dataBooks.forEach(book => {
            html += Mustache.render(template, book);
        });
        element.innerHTML = html;
    },

    render(dataBooks, element, template) {
        let i = 1;
        dataBooks.forEach(book => {
            //<div id="bookItem" class="bookItem">
            let eldiv = document.createElement("div");
            eldiv.className="bookItem";
            eldiv.id="bookItem"+i.toString();
            i+=1;
            //<h2>{{title}}</h2>
            let elh2 = document.createElement("h2");
            elh2.textContent = book.author;
            
            //<p>Автор: {{author}}</p>
            let elp1 = document.createElement("p");
            elp1.textContent = `Автор: ${book.author}`;

            //<p>Жанр: {{genre}}. Рік {{year}}</p>
            let elp2 = document.createElement("p");
            elp2.textContent = `Жанр: ${book.genre}. $Рік {year}`;

            eldiv.insertAdjacentElement("beforeend",elh2);
            eldiv.insertAdjacentElement("beforeend",elp1);
            eldiv.insertAdjacentElement("beforeend",elp2);

            element.appendChild(eldiv);
        });
      
    }
}