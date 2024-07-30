let year = prompt('Введіть рік');
year = Number(year);

if (Number.isInteger(year)) {
	if (year % 4 != 0) {
		alert(year + ' - невисокосний рік');
	} else {
		if (year % 100 != 0) {
			alert(year + ' - високосний рік');
		} else {
			if (year % 400 != 0) {
				alert(year + ' - невисокосний рік');
			} else {
				alert(year + ' - високосний рік');
			}
		}
	}
} else {
	alert('Було введено некоректне число!')
}
