export const templateBook = `
{{#books}}
<section class="book">
    <button id="btnEdit" data-id="{{id}}"></button>
    <button id="btnDelete" data-id="{{id}}"></button>
    <h2>Title: {{title}}</h2>
    <p>Author: {{author}}</p>
    <p>Year: {{year}}</p>
    <p>Genre: {{genre}}</p>
</section>
{{/books}}`;

export const templateForm = `
  <form id="bookForm">
        <div class="close">
            <input type="button" class="close" name="btnClose" />
        </div>
        <div>
            <input type="text" class="input" id="titleInput" name="title" placeholder="Title" />
            <span class="error" id="titleError"></span>
        </div>
        <div>
            <input type="text" class="input" id="authorInput" name="author" placeholder="Author" />
            <span class="error" id="authorError"></span>
        </div>
        <div>
            <input type="text" class="input" id="yearInput" name="year" placeholder="Year" />
            <span class="error" id="yearError"></span>
        </div>
        <div>
            <input type="text" class="input" id="genreInput" name="genre" placeholder="Genre" />
            <span class="error" id="genreError"></span>
        </div>
        <div>
            <input type="submit" class="submit" name="submit" value="Submit" />
        </div>
    </form>`;
