export function validateBook(book, books) {
    const errors = [];

    // Проверка на пустое значение названия книги
    if (!book.title) {
        errors.push('Название книги не должно быть пустым.');
    } else if (books.some(b => b.title.toLowerCase() === book.title.toLowerCase())) {
        errors.push('Книга с таким названием уже существует.');
    }

    // Проверка на пустое значение автора
    if (!book.author) {
        errors.push('Имя автора не должно быть пустым.');
    }

    // Проверка на пустое значение года издания
  /*  if (!book.year) {
        errors.push('Год издания должен быть указан.');
    } else if (isNaN(book.year) || book.year < 1450 || book.year > new Date().getFullYear()) {
        errors.push('Год издания должен быть числом и находиться в диапазоне от 1450 до текущего года.');
    }
*/
    if (!book.year || typeof book.year !== 'number' || book.year < 1450 || book.year > new Date().getFullYear()) {
        return { isValid: false, message: "Год издания должен быть числом между 1450 и текущим годом." };
    }


    // Проверка на пустое значение жанра
    if (!book.genre) {
        errors.push('Жанр не должен быть пустым.');
    }

    return errors;
}