// Function to create a new student object
function createStudent(id, name, surname, age, avgrade) {
  let student = {};

  student.id = id;
  student.name = name;
  student.surname = surname;
  student.age = age;
  student.avgrade = avgrade;

  return student;
}

// Object to manage students
let manageStudents = {
  students: [],

  addNewStudent: function (student) {
    this.students.push(student);
  },
  removeStudent: function (id) {
    this.students.forEach((student, index) => {
      if(student.id === id){
        this.students.splice(index, 1);
      }
    });
  },
  showStudents: function () {
    this.students.forEach((student) => {
      console.log(`
        Student ID: ${student.id}
        Name: ${student.name}
        Surname: ${student.surname}
        Age: ${student.age}
        Average Grade: ${student.avgrade}
        `);
    });
  },
  lookup: function (id) {
    this.students.forEach((student) => {
      if (student.id === id) {
        console.log(student);
      }
    });
  },
};

// Create new student
let student1 = createStudent(1, "John", "Doe", 21, 80);
let student2 = createStudent(2, "Jane", "Smith", 20, 90);
let student3 = createStudent(3, "Alice", "Black", 21, 75);
// Add a student to array students
manageStudents.addNewStudent(student1);
manageStudents.addNewStudent(student2);
manageStudents.addNewStudent(student3);
// Remove a student by ID
manageStudents.removeStudent(1);
// Show the list of students with their properties
manageStudents.showStudents();
// Search for student by ID
manageStudents.lookup(3);
