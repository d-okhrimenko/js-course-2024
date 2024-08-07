let dateTime = new Date();
let dayWeek = dateTime.getDay();

switch (dayWeek) {
	case 0:
		alert('Сьогодні неділя');
		break;
	case 1:
		alert('Сьогодні понеділок');
		break;
	case 2:
		alert('Сьогодні вівторок');
		break;
	case 3:
		alert('Сьогодні середа');
		break;
	case 4:
		alert('Сьогодні четвер');
		break;
	case 5:
		alert("Сьогодні п'ятниця");
		break;
	case 6:
		alert('Сьогодні субота');
		break;
}