// Завдання: Написати програму для управління інформацією про студентів у групі.
//Програма повинна дозволяти додавати нових студентів, видаляти студентів і виводити інформацію про всіх студентів.

// Кроки для виконання завдання:

// Створити конструктор або фабричну функцію для створення об'єктів студентів:
// Кожен об'єкт студента повинен містити наступні властивості: ім'я, прізвище, вік, ідентифікаційний номер, середній бал.

// Створити об'єкт для управління групою студентів:
// Цей об'єкт повинен містити масив студентів та методи для додавання, видалення і виведення інформації про студентів.

// Додати метод для додавання нового студента:
// Метод повинен приймати параметри для створення нового об'єкта студента і додавати його до масиву.

// Додати метод для видалення студента:
// Метод повинен видаляти студента за його ідентифікаційним номером.

// Додати метод для виведення списку всіх студентів:
// Метод повинен виводити на екран список студентів із зазначенням всіх їхніх властивостей.

// Додати функціонал для пошуку студента за його ідентифікаційним номером:
// Метод повинен шукати студента в масиві і повертати всю інформацію про нього.

class Student {
  constructor(id, name, surname, age, averageScore) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.averageScore = averageScore;
  }
  displayInfo() {
    console.log(this.name);
    console.log(this.surname);
    console.log(`${this.name}, ${this.surname}`);
  }
}

// let student1 = new Student(1, "Mykola", "Bublyk", 18, 95);
// student1.displayInfo();

let studentsDatabase = {
  students: [
    { id: 1, name: "Mykola", surname: "Bublyk", age: 18, averageScore: 96 },
    { id: 2, name: "Svitlana", surname: "Kovbasa", age: 19, averageScore: 98 },
    {
      id: 3,
      name: "Volodymyr",
      surname: "Nepyipyvo",
      age: 17,
      averageScore: 76,
    },
  ],

  add: function (id, name, surname, age, averageScore) {
    this.students.push({
      id: id,
      name: name,
      surname: surname,
      age: age,
      averageScore: averageScore,
    });
  },

  remove: function (id) {
    let student = this.students.filter((x) => x.id == id)[0];
    let index = this.indexOf(student);
    this.students.splice(index, 1);
  },

  displayList: function (list, messageTemplateFn) {
    list.forEach((x) => this.display(messageTemplateFn(x)));
  },

  display: function (message) {
    console.log(message);
  },
  promptId: function (message) {
    return +prompt(message);
  },
  promptByList: function (list, messageTemplateFn) {
    return list.map((element) => this.promptId(messageTemplateFn(element)));
  },

  findStudent: function (id) {
    let student = this.students.filter((x) => x.id == id)[0];
    return student;
    // let index = this.indexOf(student);
  },
  displayStudent: function (student, messageTemplateFn) {
    return student.display(messageTemplateFn(x));
  },
};

// let findStudentById = studentsDatabase.promptByList(
//   studentsDatabase.students,
//   (x) =>
//     `${x.id}, ${x.name}, ${x.surname}, ${x.age} років, середній бал - ${x.averageScore}`
// );

function findStudentById() {
  let id = +prompt("Введіть ID студента");
  // return studentsDatabase.findStudent(id);
  return studentsDatabase.displayStudent(id);
}

console.log(findStudentById());

studentsDatabase.displayList(
  studentsDatabase.students,
  (x) =>
    `${x.id}, ${x.name}, ${x.surname}, ${x.age} років, середній бал - ${x.averageScore}`
);
