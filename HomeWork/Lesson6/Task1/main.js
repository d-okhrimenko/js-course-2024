let grades = [];

// Get average
function getAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
// Get hightest marks
function getHighest(arr){
    return Math.max(...arr);
}
// Get lowest marks
function getLowest(arr){
    return Math.min(...arr);
}

// Get students grades from user
let studentsNum = 5;
let userVal;

for(let i = 1; i <= studentsNum; i++){
     userVal = Number(prompt(`Введіть оцінку студента ${i}`));
     grades.push(userVal);
}
// Display result
const avg = getAverage(grades);
const max = getHighest(grades);
const min = getLowest(grades);

alert(`Середня оцінка дорівнює ${avg}, найвища - ${max}, найнижча - ${min}`);