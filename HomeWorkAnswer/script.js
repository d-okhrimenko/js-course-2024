"use strict";

class Student {
    constructor(firstName, lastName, age, id, averageGrade) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.id = id;
      this.averageGrade = averageGrade;
    }
  }

let management = {
    
    students: [],

    add: function (firstName, lastName, age, id, averageGrade) {
      const newStudent = new Student(
        firstName,
        lastName,
        age,
        id,
        averageGrade
      );
      this.students.push(newStudent);
    },


    remove: function (id) {
      const index = this.students.findIndex(
        (student) => student.id == id
      );
      this.students.splice(index, 1);
    },

  
    displayInfo: function () {
      this.student.forEach((student) => {
        console.log(
          `Name: ${student.firstName} ${student.lastName} Age: ${student.age} Id:${student.id} Grade: ${student.averageGrade}`
        );
      });
    },

    findStudentById: function (id) {
      const student = this.students.find((student) => student.id == id);
        return `Name: ${student.firstName} ${student.lastName} Age: ${student.age} Id:${student.id} Grade: ${student.averageGrade}`;
    },
};


