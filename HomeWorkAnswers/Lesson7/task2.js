function Student(id, firstName, lastName, age, avarageScore) {
    this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.avarageScore = avarageScore
}

let students = {
    allStudents: [],

    addStudent(...studentInfo) {
        let student = new Student(studentInfo[0], studentInfo[1], studentInfo[2], studentInfo[3]);
        this.allStudents.push(student);
    },

    removeStudent(studentId) {
        let foundStudent = this.allStudents.find(item => item.id == studentId);
        let index = this.allStudents.indexOf(foundStudent);
        if (index != -1) {
            this.allStudents.splice(index, 1);
        }
    },

    displayStudents() {
        this.allStudents.forEach(elem => console.log(elem));
    },

    findStudent(studentId) {
        let foundStudent = this.allStudents.find(item => item.id == studentId);
        foundStudent == undefined ? console.log(`Студент з id ${studentId} не знайдений`) : console.log(foundStudent);
    }
}

students.addStudent(1, "first1", "last1", 21, 81);
students.addStudent(2, "first2", "last2", 22, 82);
students.addStudent(3, "first3", "last3", 23, 83);
students.addStudent(4, "first4", "last4", 24, 84);
students.addStudent(5, "first5", "last5", 25, 85);


students.displayStudents();
console.log("-----")
students.findStudent(4);
console.log("-----")
students.removeStudent(1);
students.removeStudent(4);
students.displayStudents();