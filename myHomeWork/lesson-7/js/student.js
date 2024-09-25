"use strict";
//*--- student
//import { addStudentToArr } from "./additional-functions.js";

class Student {
  static count = 0; // змінна для унікальних ідентифікаторів
  constructor(name, lastName, age, idCod, averageScore) {
    this.uniqId = Student.count++; // дадаем унікальний індентифікатор до кожного об'єкту
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.idCod = idCod;
    this.averageScore = averageScore;
  }
}

export { Student };
