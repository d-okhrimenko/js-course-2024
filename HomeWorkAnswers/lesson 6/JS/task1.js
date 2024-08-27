let generateGrades = (qty) => {
    for (let i = 0; i < qty; i++) studentGrades.push(Math.floor(Math.random() * 100 + 1));
}

let getGradesAvg = () => Math.round(studentGrades.reduce((total, num) => total + num) / studentGrades.length);
let getMaxGrade = () => Math.max(...studentGrades);
let getMinGrade = () => Math.min(...studentGrades);

let getGradesResultsString = () => `Серед. бал: ${getGradesAvg()}` +
                                                        `\nМакс. бал: ${getMaxGrade()}` +
                                                        `\nМін. бал: ${getMinGrade()}`;

let studentGrades = [];
generateGrades(5);
console.log(studentGrades);
console.log(getGradesResultsString());