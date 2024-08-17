const currentDate = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const currentDayOfWeek = daysOfWeek[currentDate.getDay()];//6

alert(`Today is ${currentDayOfWeek}`);
