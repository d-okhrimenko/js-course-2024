// Конструктор для створення об'єктів студентів
function Student(firstName, lastName, age, studentId, gpa) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.studentId = studentId;
  this.gpa = gpa;
}

// Об'єкт для управління групою студентів
const studentGroup = {
  students: [],

  // Метод для додавання нового студента
  addStudent: function (student) {
    this.students.push(student);
    this.updateStudentListUI();
  },

  // Метод для видалення студента за його ID
  removeStudent: function (studentId) {
    this.students = this.students.filter(
      (student) => student.studentId !== studentId
    );
    this.updateStudentListUI();
  },

  // Метод для виведення списку всіх студентів
  updateStudentListUI: function () {
    const list = document.getElementById("studentList");
    list.innerHTML = "";
    this.students.forEach((student) => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${student.studentId}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, GPA: ${student.gpa}`;
      list.appendChild(listItem);
    });
  },

  // Метод для пошуку студента за його ID
  searchStudent: function (studentId) {
    const student = this.students.find(
      (student) => student.studentId === studentId
    );
    const resultDiv = document.getElementById("searchResult");
    if (student) {
      resultDiv.textContent = `Found Student - ID: ${student.studentId}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, GPA: ${student.gpa}`;
    } else {
      resultDiv.textContent = "Student not found.";
    }
  },
};

// Прив'язка функцій до кнопок
document
  .getElementById("addStudentButton")
  .addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const studentId = document.getElementById("studentId").value.trim();
    const gpa = parseFloat(document.getElementById("gpa").value.trim());

    if (firstName && lastName && age && studentId && gpa) {
      const newStudent = new Student(firstName, lastName, age, studentId, gpa);
      studentGroup.addStudent(newStudent);
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("age").value = "";
      document.getElementById("studentId").value = "";
      document.getElementById("gpa").value = "";
    } else {
      alert("Please fill out all fields.");
    }
  });

document
  .getElementById("removeStudentButton")
  .addEventListener("click", function () {
    const studentId = document.getElementById("removeStudentId").value.trim();
    if (studentId) {
      studentGroup.removeStudent(studentId);
      document.getElementById("removeStudentId").value = "";
    } else {
      alert("Please enter a Student ID to remove.");
    }
  });

document
  .getElementById("searchStudentButton")
  .addEventListener("click", function () {
    const studentId = document.getElementById("searchStudentId").value.trim();
    if (studentId) {
      studentGroup.searchStudent(studentId);
      document.getElementById("searchStudentId").value = "";
    } else {
      alert("Please enter a Student ID to search.");
    }
  });
