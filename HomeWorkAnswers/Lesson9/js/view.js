const bookList = {
    render(list, element) {
        element.innerHTML = '';

        list.forEach(book => {
            let div = document.createElement("div")
            
            let buttons = document.createElement("div")
            buttons.classList.add("buttons")

            const buttonRename=document.createElement('button');
            buttonRename.textContent = 'Редагувати';
            buttonRename.classList.add("buttonRename")
            buttonRename.onclick=function(){
                editBook(book.id);
            };

            const buttonRemove=document.createElement('button');
            buttonRemove.textContent = `Видалити`;
            buttonRemove.classList.add("buttonRemove")
            buttonRemove.onclick=function(){
                deleteBook(book.id);
            };

            const bookTitle = document.createElement('h2');
            bookTitle.textContent = book.title;
    
            const bookAuthor = document.createElement('h3');
            bookAuthor.textContent = `Автор: ${book.author}`;
    
            const bookYear = document.createElement('p');
            bookYear.textContent = `Рік : ${book.year}`;
    
            const bookGenre = document.createElement('p');
            bookGenre.textContent = `Жанр: ${book.genre}`;

            div.appendChild(bookTitle);
            div.appendChild(bookAuthor);
            div.appendChild(bookYear);
            div.appendChild(bookGenre)
            div.appendChild(buttons);
            buttons.appendChild(buttonRename);
            buttons.appendChild(buttonRemove);
            // div.innerHTML = `  
            
            //     <h2>${book.title}</h2>
            //     <h3>Автор: ${book.author}</h3>    
            //     <p>Рік: ${book.year}</p>
            //     <p>Жанр: ${book.genre}</p>`

            div.classList.add("book")
            element.appendChild(div);

            
        });

    }
}