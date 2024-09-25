const form = document.forms[0];

form.title.addEventListener('change', function (event) {
	if (library.books.some((book) => book.title === event.target.value)) {
		console.log(event.target.value);
		form.title.setCustomValidity(
			'The book is already listed in the library'
		);
		event.preventDefault();
	} else {
		form.title.setCustomValidity('');
	}
});

const minYear = 1450;
let currentYear = new Date().getFullYear();

form.year.addEventListener('change', function (event) {
	if (form.year.value < minYear) {
		form.year.setCustomValidity('The year should be not less than 1450');
		event.preventDefault();
	} else if (form.year.value > currentYear) {
		form.year.setCustomValidity(
			'The year should be not more than current year'
		);
		event.preventDefault();
	} else {
		form.year.setCustomValidity('');
	}
});
