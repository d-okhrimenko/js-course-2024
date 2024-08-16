let countStudent = +prompt("Enter count of Student in group : ");

let studentsArray = getRandomValueForArray(countStudent);

console.log(`${studentsArray.length} students in group`);
printArray(studentsArray);

let midelRange = getMiddelRange(studentsArray);
alert(`Middel Range = ${midelRange}`);
let maxRange = getMaxRange(studentsArray);
alert(`Max Range in group = ${maxRange}`);
alert(`Min Range in group = ${getMinRange(studentsArray)}`);


// Print all value in Array
function printArray(arr) {
  arr.forEach((element) => console.log(`Range = ${element}`));
}

// Fill array random value
function getRandomValueForArray(countStudent) {
  let students = [];
  for (let index = 0; index < countStudent; index++) {
    let random = Math.floor(Math.random() * 101);
    students.push(random);
  }
  return students;
}

//Get middel range from Array
function getMiddelRange(arr) {
  let middelValue = 0;
  arr.forEach((element) => (middelValue += Number(element)));
  let lengthArray = arr.length;
  let result = middelValue / lengthArray;
  return Math.ceil(result);
}

// Max range in Array
function getMaxRange(arr) {
  let result = Math.max(...arr);
  return result;
}

// Min range in Array
function getMinRange(arr) {
  return Math.min(...arr);
}
