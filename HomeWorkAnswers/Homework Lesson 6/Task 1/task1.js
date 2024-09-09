let studentsMarks = [];

function calculateAverageMark(marksArray) {
	if (marksArray.length === 0) {
		alert("Please input MARKS to calcuate!");
		return null;
	}

	let sum = 0;
	for (const addedMark of marksArray) {
		sum += addedMark;
	}

	return sum / marksArray.length;
}

function calculateMaxMark() {
	return Math.max(...studentsMarks);
}

function calculateMinMark() {
	return Math.min(...studentsMarks);
}

function addMarkToArray() {
	let markInput = document.getElementById("markInput");
	let mark = parseFloat(markInput.value);
	if (isNaN(mark)) {
		alert("Please input NUMBER!");
	} else {
		studentsMarks.push(mark);
		markInput.value = "";
		displayMarks();
	}
}

function displayMarks() {
	document.getElementById("marksOutput").innerText = studentsMarks.join(", ");
}

function outputCalculations() {
	let averageMark = calculateAverageMark(studentsMarks);
	document.getElementById("averageMark").innerText = averageMark.toFixed(1);
	document.getElementById("highestMark").innerText = calculateMaxMark();
	document.getElementById("lowestMark").innerText = calculateMinMark();
}

function resetAll() {
	studentsMarks = [];
	document.getElementById("marksOutput").innerText = "";
	document.getElementById("averageMark").innerText = "";
	document.getElementById("highestMark").innerText = "";
	document.getElementById("lowestMark").innerText = "";
}

document.getElementById("addMarkButton").addEventListener("click", addMarkToArray);
document.getElementById("calculateButton").addEventListener("click", outputCalculations);
document.getElementById("resetButton").addEventListener("click", resetAll);
