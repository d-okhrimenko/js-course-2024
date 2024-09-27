
class Student {
  static autoID = 1;

  constructor(firstName, lastName, age, averageScore) {
    this.id = Student.autoID++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.averageScore = averageScore;
  }

  displayInfo() {
    return console.log(`
      ID: ${this.id}
      Student: ${this.firstName} ${this.lastName}
      Age: ${this.age}
      Average score: ${this.averageScore}`
    );
  };
}

const StudentsManager = {
  students: [],

  addStudent(firstName, lastName, age, averageScore) {
    const newStudent = new Student(firstName, lastName, age, averageScore);
    this.students.push(newStudent);
    return newStudent;
  },

  removeStudent(id) {
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      return this.students.splice(index, 1)[0];
    }
    return null;
  },

  getStudent(id) {
    return this.students.find(student => student.id === id);
  },

  getAllStudents() {
    this.students.forEach(student => student.displayInfo());
  }
};

console.log("Add students");
const student1 = StudentsManager.addStudent("John", "Doe", 25, 85);
const student2 = StudentsManager.addStudent("Jane", "Doe", 22, 90);
const student3 = StudentsManager.addStudent("Jack", "Doe", 20, 95);

console.log("Get all students");
StudentsManager.getAllStudents();

console.log("Get student by ID");
StudentsManager.getStudent(2).displayInfo();

console.log("Remove student by ID 1");
StudentsManager.removeStudent(1);

console.log("Get all students after removing");
StudentsManager.getAllStudents();