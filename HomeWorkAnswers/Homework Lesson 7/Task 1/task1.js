class Student {
    constructor(firstName, lastName, age, id, avrgMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
        this.avrgMark = avrgMark;
  }
}

let studentsGroup = {
    students: [],

    addStudent: function (firstName, lastName, age, id, avrgMark) {
        this.students.push(new Student(firstName, lastName, age, id, avrgMark));
    },

    removeStudent: function (id) {
        let student = this.students.filter((x) => x.id === id)[0];
        let index = this.students.indexOf(student);
        this.students.splice(index, 1);
    },

    getStudentData: function (id) {
        let student = this.students.find((student) => student.id === id);
        console.log(`Student info:\nName: ${student.firstName} ${student.lastName}, Age: ${student.age}, ID: ${student.id}, Average Mark: ${student.avrgMark}`);
    },

    getAllStudentsData: function () {
        console.log("Students in group:");
        this.students.forEach((student, index) => {
        console.log(`${index + 1}. Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, ID: ${student.id}, Average Mark: ${student.avrgMark}`);
        });
    }
}

studentsGroup.addStudent("Anakin", "Skywalker", 20, 1, 4);
studentsGroup.addStudent("Padme", "Amidala", 25, 2, 5);
studentsGroup.addStudent("Obi Wan", "Kenobi", 35, 3, 5);
studentsGroup.getAllStudentsData();
studentsGroup.getStudentData(2);
studentsGroup.removeStudent(3);
studentsGroup.getAllStudentsData();
