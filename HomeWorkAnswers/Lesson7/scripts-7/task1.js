"use strict";

///////////////// MODEL /////////////////
class Student {
  constructor(id, fName, lName, age, avrMark) {
    this.id = id;
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.avrMark = avrMark;
  }
}

class StudentGroup {
  constructor() {
    this.group = [];
  }
  addStudent(student) {
    this.group.push(student);
  }

  findStudentWithId(id, idValue) {
    const student = findObjectByProp(this.group, id, idValue);
    // const student = this.group.find((stud) => stud.id === id);

    return student;
  }
  removeStudent(id) {
    const filteredGroup = this.group.filter((student) => student.id !== id);
    this.group.splice(0, this.group.length);
    this.group.push(...filteredGroup);
  }

  getAllStudents() {
    return this.group;
  }
}

//////////////////// VIEW ///////////////////
class StudentView {
  logStudent(student) {
    if (!student) console.error("Student with such ID does not exist.");
    else printProps(student);
  }

  logAllStudents(students) {
    // students.forEach((student) => printProps(student));
    console.table(students);
  }
}

////////////////// CONTROLLER ///////////////////
class ControlStudents {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addStudent(id, fName, lName, age, avrMark) {
    const student = new Student(id, fName, lName, age, avrMark);
    this.model.addStudent(student);
  }

  removeStudent(id) {
    this.model.removeStudent(id);
  }

  logStudentWithId(id, idValue) {
    const student = this.model.findStudentWithId(id, idValue);
    this.view.logStudent(student);
  }

  logAllStudents() {
    const students = this.model.getAllStudents();
    this.view.logAllStudents(students);
  }
}

///////////////////// TESTING /////////////////////////

// initializing model, view and controller objects
const model = new StudentGroup();
const view = new StudentView();
const controller = new ControlStudents(model, view);

// adding students to the model
controller.addStudent(111111, "Vasyl", "Pupkin", 20, 87.87);
controller.addStudent(222222, "Boris", "Jonson", 17, 88.88);
controller.addStudent(333333, "Jonas", "Schmedtmann", 33, 99.2);

// logging student by his ID
controller.logStudentWithId("id", 222222);

//logging all students
controller.logAllStudents();

//removing students by ID
controller.removeStudent(444444); //
controller.removeStudent(222222);

// logging group after remove
controller.logAllStudents();
