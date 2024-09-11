class Student {
  constructor(firstName, lastName, age, id, averageGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
    this.averageGrade = averageGrade;
  }
}

const groupStudents = {
  students: [],
  addStudent(firstName, lastName, age, id, averageGrade) {
    const newStudent = new Student(firstName, lastName, age, id, averageGrade);
    this.students.push(newStudent);
    console.log(`Student ${firstName} ${lastName} added to group.`);
  },
  removeStudent(id) {
    const idStudent = this.students.findIndex((student) => student.id === id);
    if (idStudent !== -1) {
      this.students.splice(idStudent, 1);
      console.log(`Student with ID: ${id} deleted.`);
    } else {
      console.log(`Student with ID: ${id} not found.`);
    }
  },
  displayStudent() {
    if (this.students.length === 0) {
      console.log("Student group is empty");
    } else {
      this.students.forEach((student, index) => {
        console.log(
          `Student ${index + 1}: First name: ${student.firstName}, Last name: ${
            student.lastName
          }, Age: ${student.age}, ID: ${student.id}, Average grade: ${
            student.averageGrade
          }`
        );
      });
    }
  },

  displayStudentById(id) {
    const student = this.students.find((student) => student.id === id);

    if (!student) {
      console.log("There is no such student");
    } else {
      console.log(
        `Student: First name: ${student.firstName}, Last name: ${student.lastName}, Age: ${student.age}, ID: ${student.id}, Average grade: ${student.averageGrade}`
      );
    }
  },
};
