class Student {
    constructor(id, name, lastName, age, gpa) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gpa = gpa;
    }
}

const studentsGroup = {
    students: [],

    add: function (id, name, lastName, age, gpa) {
        const newStudent = new Student(id, name, lastName, age, gpa);
        this.students.push(newStudent);
    },

    remove: function (id) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) this.students.splice(index, 1);
    },

    get studentsList() {
        return this.students.map(student =>
            `ID: ${student.id}, Name: ${student.name}, Last Name: ${student.lastName}, Age: ${student.age}, GPA: ${student.gpa} <hr>`).join('<br>');
    },
    
    studentInfo: function (id) {
        const student = this.students.find(student => student.id === id);
        return `ID: ${student.id}, <br>Name: ${student.name}, <br>Last Name: ${student.lastName}, <br>Age: ${student.age}, <br>GPA: ${student.gpa}.`;
    }
}

studentsGroup.add(1, "Alice", "Johnson", 19, 3.2);
studentsGroup.add(2, "Michael", "Brown", 21, 3.8);
studentsGroup.add(3, "Emily", "Davis", 22, 3.6);
studentsGroup.add(4, "Daniel", "Miller", 20, 3.9);
studentsGroup.add(5, "Sophia", "Taylor", 23, 3.7);

document.querySelector("#btnAdd").addEventListener("click", () => {
    const id = getNumValue("#idAdd");
    const name = getStrValue("#name");
    const lastName = getStrValue("#lastName");
    const age = getNumValue("#age");
    const gpa = getNumValue("#gpa");
    const isValidId = studentsGroup.students.some(student => student.id === id);

    let errorMsg = "";
    if (id === null || isValidId) { errorMsg += "Invalid ID value or ID already exists.<br>"; }
    if (name === null) { errorMsg += "Invalid Name. Please check spelling and enter a valid Name.<br>"; }
    if (lastName === null) { errorMsg += "Invalid Last Name. Please check spelling and enter a valid Last Name.<br>"; }
    if (age === null) { errorMsg += "Invalid Age value. Please enter Age as a number.<br>"; }
    if (gpa === null) { errorMsg += "Invalid GPA value. Please enter GPA as a number.<br>"; }
    if (errorMsg) { showResult(errorMsg, "#addOutput"); }
    else {
        studentsGroup.add(id, name, lastName, age, gpa);
        showResult("The student data was added successfully.", "#addOutput");

        clearInput("#idAdd");
        clearInput("#name");
        clearInput("#lastName");
        clearInput("#age");
        clearInput("#gpa");
    }
});

document.querySelector("#btnRemove").addEventListener("click", () => {
    const id = getNumValue("#idRemove");
    const isValidId = studentsGroup.students.some(student => student.id === id);

    if (id === null || !isValidId) {
        showResult(`Invalid ID value or ID doesn't exist.`, "#removeOutput");
    } else {
        studentsGroup.remove(id);
        showResult("The student data was removed successfully.", "#removeOutput");
        clearInput("#idRemove");
    }
});

document.querySelector("#btnInfo").addEventListener("click", () => {
    const id = getNumValue("#idInfo");
    const isValidId = studentsGroup.students.some(student => student.id === id);

    if (id === null || !isValidId) {
        showResult(`Invalid ID value or ID doesn't exist.`, "#infoOutput");
    } else {
        showResult(studentsGroup.studentInfo(id), "#infoOutput");
        clearInput("#idInfo");
    }
});

document.querySelector("#btnList").addEventListener("click", () => {
    showResult(studentsGroup.studentsList, "#listOutput");
});
