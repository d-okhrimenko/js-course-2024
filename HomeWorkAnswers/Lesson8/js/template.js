export const bookTemplate = `
    {{#books}}
        <div class="book-item">
            <p class="book-title">{{title}}</p>
            <p>Автор: {{author}}, Написана: {{year}}р., Жанр: {{genre}}</p>
        </div>
        {{/books}}
`;