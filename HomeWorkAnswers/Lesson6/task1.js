let grades = [...Array(101).keys()];

const addLatestGrade = () => {
    let getGrade = getNumValue("#addGrade");
    let maxGrade = 100;
    let minGrade = 0;
    if (getGrade !== null && getGrade <= maxGrade && getGrade >= minGrade) return addArrayElement(grades, getGrade);
    return null;
}

document.querySelector("#submit").addEventListener("click", displayAddedGrade = () => {
    let isValidGrade = addLatestGrade();
    clearInput("#addGrade");

    if (isValidGrade === null) return showResult(`Enter a number from 0 to 100`, "#gradeOutput");
    return showResult(`The grade added successfully`, "#gradeOutput");
});

const avgGrade = array => (array.reduce((sum, value) => sum + value, 0) / array.length).toFixed(2);
document.querySelector("#gpa").addEventListener("click", displayAvgGrade = () => {
    showResult(`GPA = ${avgGrade(grades)}`, "#gpaOutput");
});

const maxGrade = array => Math.max(...array);
document.querySelector("#max").addEventListener("click", displayMaxGrade = () => {
    showResult(`MAX grade = ${maxGrade(grades)}`, "#maxOutput");
});

const minGrade = array => Math.min(...array);
document.querySelector("#min").addEventListener("click", displayMinGrade = () => {
    showResult(`MIN grade = ${minGrade(grades)}`, "#minOutput");
});
