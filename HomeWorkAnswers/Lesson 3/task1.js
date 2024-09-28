let value = prompt('Введіть число');
value = Number(value);

if (Number.isInteger(value)) {
	if (value % 2 == 0) {
		alert(value + ' - парне число');
	} else {
		alert(value + ' - непарне число');
	}
} else {
	alert('Було введено не число!');
}