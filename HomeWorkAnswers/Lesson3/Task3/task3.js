'use strict'
const RED_COLOR = 'rgb(209, 101, 101)';
const GREEN_COLOR = 'rgb(92, 226, 66)';

const calculateBtn = document.querySelector('.btn');
const optionOne = document.querySelector('#first-option');
const optionTwo = document.querySelector('#second-option');
const optionThree = document.querySelector('#third-option');
const firstOptionInput = document.querySelector('.first-option-input');
const secondOptionInput = document.querySelector('.second-option-input');
const thirdOptionInput = document.querySelector('.third-option-input');
const firstInput = document.querySelector('#first-input');
const secondMinInput = document.querySelector('#second-min-input');
const secondMaxInput = document.querySelector('#second-max-input');
const thirdInput = document.querySelector('#third-input');
const resultHeader = document.querySelector('.result-header');
const resultMessage = document.querySelector('.result-text');

const currentYear = new Date().getFullYear();

window.addEventListener('load', () => checkOption());
optionOne.addEventListener('change', () => {
    clearPreviousResult();
    checkOption();
});
optionTwo.addEventListener('change', () => {
    clearPreviousResult();
    checkOption();
});
optionThree.addEventListener('change', () => {
    clearPreviousResult();
    checkOption();
});
calculateBtn.addEventListener('click', () => calculateLeapYear());

firstInput.setAttribute('placeholder', `e.g. ${currentYear}`);
secondMaxInput.setAttribute('placeholder', `e.g. ${currentYear}`);

function calculateLeapYear() {
    if (optionOne.checked) {
        let year = parseInt(firstInput.value);

        if (checkIsNaN(year)) return;

        if (!checkYear(year)) {
            showResultHeader(year, RED_COLOR);
            showResultMessage('The year has to be greater than <b>1582</b>, the first year the Gregorean calendar was employed.');
        } else if (isLeapYear(year)) {
            showResultHeader(year, GREEN_COLOR);
            showResultMessage(`The year <b>${year}</b> is a leap year.`);
        } else {
            showResultHeader(year, RED_COLOR);
            showResultMessage(`The year <b>${year}</b> is not a leap year.`);
        }
    } else if (optionTwo.checked) {
        let start = parseInt(secondMinInput.value);
        let end = parseInt(secondMaxInput.value);

        if (checkIsNaN(start) || checkIsNaN(end)) return;
        console.log(!checkRange(start, end));

        if (!checkYear(start) || !checkYear(end)) {
            showResultHeader('Incorrect year input!', RED_COLOR);
            showResultMessage('The years has to be greater than <b>1582</b>, the first year the Gregorean calendar was employed.');
        } else if (!checkRange(start, end)) {
            showResultHeader(end + ' <= ' + start, RED_COLOR);
            showResultMessage(`The range limits are incorrect. The end year <b>${end}</b> is lower or equal than start year <b>${start}</b>!`);
        } else {
            let leapYears = sampleFromRange(start, end);

            if (leapYears.length == 0) {
                showResultHeader('Empty sample', GREEN_COLOR);
                showResultMessage('There are no leap years in this range.');
            } else {
                showResultHeader('A sample of leap years from the range.', GREEN_COLOR);
                showResultMessage(`Select from a range: ${showYearsSample(leapYears)}`);
            }
        }

    } else if (optionThree.checked) {
        let nextLeap = searchNextLeap(currentYear);
        showResultHeader(nextLeap, GREEN_COLOR);
        showResultMessage(`The next leap year will be in <b>${nextLeap}</b>.`);
        thirdInput.value = nextLeap;
    } else {
        throw new Error('Option error');
    }
}

function sampleFromRange(start, end) {
    let resultArr = [];

    for (let i = start; i <= end; i++) {
        if (isLeapYear(i))
            resultArr.push(i);
    }

    return resultArr;
}

function searchNextLeap(currentYear) {
    return isLeapYear(currentYear) ? currentYear : searchNextLeap(++currentYear);
}

function isLeapYear(year) {
    if (year % 400 == 0)
        return true;
    else if (year % 100 == 0)
        return false;
    else if (year % 4 == 0)
        return true;
    else
        return false;
}

function checkOption() {
    if (optionOne.checked) {
        clearInput(firstInput);
        showOptionInput(firstOptionInput);
    }
    else if (optionTwo.checked) {
        clearInput(secondMinInput);
        clearInput(secondMaxInput);
        showOptionInput(secondOptionInput);
    }
    else if (optionThree.checked) {
        clearInput(thirdInput);
        showOptionInput(thirdOptionInput);
    }
    else
        throw new Error('Option error');
}

function showOptionInput(option) {
    firstOptionInput.style.display = 'none';
    secondOptionInput.style.display = 'none';
    thirdOptionInput.style.display = 'none';
    option.style.display = 'flex';
}

function checkYear(year) {
    return year >= 1582;
}

function checkIsNaN(year) {
    return isNaN(year);
}

function clearInput(input) {
    input.value = '';
}

function checkRange(start, end) {
    return end > start;
}

function showResultMessage(message) {
    resultMessage.innerHTML = message;
}

function showResultHeader(message, color) {
    resultHeader.innerHTML = message;
    resultHeader.style.color = color;
}

function showYearsSample(sample) {
    return sample.reduce((str, year, index) => {
        if (index == sample.length - 1) {
            return str + year + '.';
        }
        return str + year + ', '
    }, '');
}

function clearPreviousResult() {
    resultHeader.innerHTML = '';
    resultMessage.innerHTML = '';
}






