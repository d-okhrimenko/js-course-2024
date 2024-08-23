class Student {
    constructor(firstName, lastName, age, id, avgScore) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
        this.avgScore = avgScore;
    }
}

const studentsGroup = {

    students: [],

    addStudent(firstName, lastName, age, id, avgScore) {
        const newStudent = new Student(firstName, lastName, age, id, avgScore);
        this.students.push(newStudent);
    },

    removeStudent(id) {
        let index = this.students.findIndex(x => x.id === id)
        this.students.splice(index, 1);
    },

    showInfo() {
        this.students.forEach(x => console.log(x));
    },

    findStudent(id) {
        return this.students.find(x => x.id === id)
    }

}

//tests

studentsGroup.addStudent("studentName1", "studentLastName1", 25, 1, 90);
studentsGroup.addStudent("studentName2", "studentLastName1", 30, 2, 100);
studentsGroup.addStudent("studentName3", "studentLastName1", 18, 3, 50);

console.log("All students after adding:");
studentsGroup.showInfo();

studentsGroup.removeStudent(2);

console.log("All students after removing student with id 2:");
studentsGroup.showInfo();

console.log("Student which was founded by id 3:");
console.log(studentsGroup.findStudent(3));

