const bookList = {
    render(list, element) {


        list.forEach(book => {
            let div = document.createElement("div")
            div.innerHTML = `  
            
                <h2>${book.title}</h2>
                <h3>Автор: ${book.author}</h3>    
                <p>Рік: ${book.year}</p>
                <p>Жанр: ${book.genre}</p>`

            div.classList.add("book")
            element.appendChild(div);

        });

    }
}