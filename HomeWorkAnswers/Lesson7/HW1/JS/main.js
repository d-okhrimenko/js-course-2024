"use strict";

window.addEventListener("load", () => {
  let grupeStudents = {
    students: [
      creatNewStudent("Vova", "Popov", 45, getSSN, 150),
      creatNewStudent("Pavlo", "Gora", 48, getSSN, 145),
      creatNewStudent("Irina", "Lovka", 45, getSSN, 155),
      creatNewStudent("Olga", "Prog", 45, getSSN, 180),
      creatNewStudent("Igor", "Kopalov", 45, getSSN, 175),
      creatNewStudent("Sergey", "Balov", 45, getSSN, 177),
      creatNewStudent("Vova", "Lupko", 45, getSSN, 154),
      creatNewStudent("Pavlo", "Zoba", 45, getSSN, 145),
      creatNewStudent("Irina", "Vovk", 45, getSSN, 167),
    ],
    addStudent: function () {
      this.students.push(creatNewStudent());
    },
    deleteStudent: function (SSN) {
      for (let i = 0; i < this.students.length; i++) {
        const value = this.students[i].SSN;
        if (String(SSN) === String(value)) {
          this.students.splice(i, 1); // Видаляємо студента з масиву
          console.log(`Student with SSN ${SSN} deleted`);
          return;
        }
      }
      console.log(`Student with SSN ${SSN} absent in group`);
    },
    printAllStudentsInfo: function () {
      for (const stud of this.students) {
        console.log('******************************');
        let fullName = stud.firstName + ' ' + stud.lastName;
        console.log(`Student SSN => ${stud.SSN}\nFull name => ${fullName}\nAge => ${stud.age}\nAverage score => ${stud.averageScore}`);
        console.log('******************************');
      }
    },
    foundStudentFromSSN: function (snn) {
      for (const el in this.students) {
        const std = this.students[el];
        if (snn === std.SSN) { 
          console.log(`${std.firstName} ${std.lastName} SNN=>${std.SSN} age=>${std.age} average score=>${std.averageScore}`)
        }
      }
    }
  };



  grupeStudents.printAllStudentsInfo();
  let studentSSN = grupeStudents.students[3].SSN;
  grupeStudents.foundStudentFromSSN(studentSSN);
});

function creatNewStudent(firstName, lastName, age, getSSN, averageScore) {
  return {
    firstName: firstName || prompt("Enter student name"),
    lastName: lastName || prompt("Enter student lastname"),
    age: age || prompt("Enter student age"),
    SSN: getSSN(),
    averageScore: averageScore || prompt("Enter student average score"),
  };
}

function getSSN() {
  let SSN = "UK";
  for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * 10);
    SSN += rand;
  }
  return SSN;
}
