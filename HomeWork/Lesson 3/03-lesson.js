const value = prompt('Enter your year');

const showFullYear = (year, boolean) =>
    boolean ? alert(`${year} is leap year`) : alert(`${year} is not leap year`);

const getYear = (year) => {
    console.log(year);

    const yearNumber = Number(year);

    if (year === null || !year.trim()) {
        alert('Enter some year');
        return;
    }

    // if (typeof yearNumber !== "number") {
    //     alert('Year  must be number');
    //     return;
    // }

    if (isNaN(yearNumber)) {
        alert('Year must be number');
        return;
    };

    if (!Number.isInteger(yearNumber)) {
        alert('Year must be integer');
        return;
    }

    if (yearNumber < 1942) {
        alert('Year must 1942 or more');
        return;

    }

    const date = new Date(year, 2, 0);
    const days = date.getDate();

    const isLeapYear = 29 === days;
    showFullYear(yearNumber, isLeapYear);

    return;
}

getYear(value);
