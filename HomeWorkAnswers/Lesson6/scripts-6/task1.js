"use strict";

// function that creates an array of student's marks, based on user's input
function createMarks(num) {
  const minMark = 1;
  const maxMark = 100;

  const arr = [];
  for (let i = 0; i < num; i++) {
    const mark = getRandomIntInclusive(minMark, maxMark);
    arr.push(mark);
  }
  return arr;
}

// function that  displays results of calculation for average, mim and max student's mark in alert popup window.
function displayCalculations() {
  const numStudents = getInput("Enter number of students. (Positive integer)", isValidPositiveNumber);

  if (!numStudents) {
    return;
  }

  const marksArr = createMarks(numStudents);
  console.log(marksArr); // checking in the console

  alert(` Average mark: ${getAverage(marksArr)}

  Minimum mark: ${getMinInteger(marksArr)}
  
  Maximum mark: ${getMaxInteger(marksArr)}`);
}

displayCalculations();
