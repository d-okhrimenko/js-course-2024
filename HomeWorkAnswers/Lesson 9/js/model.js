const listBook = {
	books: [
		{ id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
		{ id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
		{ id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
		{ id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
		{ id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" },
		{ id: 6, title: "Війна і мир", author: "Лев Толстой", year: 1869, genre: "Історичний роман" },
		{ id: 7, title: "Улісс", author: "Джеймс Джойс", year: 1922, genre: "Модернізм" },
		{ id: 8, title: "Ловець у житі", author: "Джером Селінджер", year: 1951, genre: "Роман" },
		{ id: 9, title: "Сто років самотності", author: "Габріель Гарсія Маркес", year: 1967, genre: "Магічний реалізм" },
		{ id: 10, title: "Мобі Дік", author: "Герман Мелвілл", year: 1851, genre: "Пригодницький роман" },
		{ id: 11, title: "Преступление и наказание", author: "Федір Достоєвський", year: 1866, genre: "Психологічний роман", },
		{ id: 12, title: "Гордість і упередження", author: "Джейн Остін", year: 1813, genre: "Роман" },
		{ id: 13, title: "Великий Гетсбі", author: "Френсіс Скотт Фіцджеральд", year: 1925, genre: "Роман" },
		{ id: 14, title: "Анна Кареніна", author: "Лев Толстой", year: 1877, genre: "Роман" },
		{ id: 15, title: "На Західному фронті без змін", author: "Еріх Марія Ремарк", year: 1929, genre: "Антивоєнний роман", },
		{ id: 16, title: "Маленький принц", author: "Антуан де Сент-Екзюпері", year: 1943, genre: "Філософська казка" },
		{ id: 17, title: "Дон Кіхот", author: "Мігель де Сервантес", year: 1605, genre: "Роман" },
		{ id: 18, title: "Кобзар", author: "Тарас Шевченко", year: 1840, genre: "Поезія" },
		{ id: 19, title: "Тіні забутих предків", author: "Михайло Коцюбинський", year: 1911, genre: "Повість" },
		{ id: 20, title: "Захар Беркут", author: "Іван Франко", year: 1883, genre: "Історичний роман" },
		{ id: 21, title: "Лісова пісня", author: "Леся Українка", year: 1911, genre: "Драма-феєрія" },
		{ id: 22, title: "Місто", author: "Валер'ян Підмогильний", year: 1928, genre: "Роман" },
		{ id: 23, title: "Собор", author: "Олесь Гончар", year: 1968, genre: "Роман" },
		{ id: 24, title: "Чорна рада", author: "Пантелеймон Куліш", year: 1857, genre: "Історичний роман" },
		{ id: 25, title: "Вершники", author: "Юрій Яновський", year: 1935, genre: "Роман" },
		{ id: 26, title: "Солодка Даруся", author: "Марія Матіос", year: 2004, genre: "Роман" },
		{ id: 27, title: "Маруся Чурай", author: "Ліна Костенко", year: 1979, genre: "Роман у віршах" },
		{ id: 28, title: "Енеїда", author: "Іван Котляревський", year: 1798, genre: "Поема" },
		{ id: 29, title: "Біла гвардія", author: "Михайло Булгаков", year: 1925, genre: "Роман" },
		{ id: 30, title: "Тигролови", author: "Іван Багряний", year: 1944, genre: "Роман" },
		{ id: 31, title: "Сад Гетсиманський", author: "Іван Багряний", year: 1950, genre: "Роман" },
		{ id: 32, title: "Кайдашева сім'я", author: "Іван Нечуй-Левицький", year: 1879, genre: "Повість" },
	],
	lastId: 32,

	add(book) {

		if (book.title == "" || book.author == "" || book.year == "" || book.genre == "") {
			alert(`Будь ласка, заповніть усі поля`);
		} else {
			this.lastId++;
			book.id = this.lastId;
			this.books.push(book);
			alert(`Книгу додано з ID=${this.lastId}`);
		}
	},

	remove(id) {
		let index = this.books.findIndex(x => x.id == id);
		this.books.splice(index, 1);
	},
	update(id, book) {
		let index = this.books.findIndex(x => x.id == id);
		this.books[index] = book;
	},
	find(id) {
		let index = this.books.findIndex(x => x.id == id);
		return this.books[index];
	},
};



