class StudentObject {
  constructor(id, firstName, lastName, age, averageScore) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.averageScore = averageScore;
  }
}

let students = {
  group: [],

  add: function (id, firstName, lastName, age, averageScore) {
    let newStudent = new StudentObject(
      id,
      firstName,
      lastName,
      age,
      averageScore
    );
    this.group.push(newStudent);
  },

  remove: function (id) {
    let index = this.group.findIndex((student) => student.id === id);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  },

  display: function () {
    if (this.group.length === 0) {
      console.log("Список студентів порожній.");
    } else {
      console.log("Список студентів:");
      this.group.forEach((student) => {
        console.log("------------------------");
        console.log(`ID: ${student.id}`);
        console.log(`Ім'я: ${student.firstName}`);
        console.log(`Прізвище: ${student.lastName}`);
        console.log(`Вік: ${student.age}`);
        console.log(`Середній бал: ${student.averageScore}`);
        console.log("------------------------");
      });
    }
  },

  find: function (id) {
    let foundStudent = null;
    for (let i = 0; i < this.group.length; i++) {
      if (this.group[i].id === id) {
        foundStudent = this.group[i];
        break;
      }
    }

    if (!foundStudent) {
      console.log(`Студента з ID: ${id} не знайдено!`);
    } else {
      console.log("------------------------");
      console.log(`ID: ${foundStudent.id}`);
      console.log(`Ім'я: ${foundStudent.firstName}`);
      console.log(`Прізвище: ${foundStudent.lastName}`);
      console.log(`Вік: ${foundStudent.age}`);
      console.log(`Середній бал: ${foundStudent.averageScore}`);
      console.log("------------------------");
    }
  },
};
