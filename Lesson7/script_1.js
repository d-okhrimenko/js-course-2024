console.log('index_1.html');

let isValidNumberRange = (input) => input >= 0 && input <= 4;
let isValidNumber = (input) => typeof input === 'string' && input.trim() !== '' && !isNaN(input) && input !== null;

let choicePosition = {
  1: function() {
    alert(students.getAllList());
  },

  2: function() {
    let firstName = prompt('Введіть ім`я студента:');
    let lastName = prompt('Введіть прізвище студента:');
    let age = prompt('Введіть вік студента:');
    let idNumber = prompt('Введіть ID студента:');
    let gpa = prompt('Введіть середній бал студента:');

    students.addStudent(firstName, lastName, age, idNumber, gpa);
    console.log(students.arrStudents);
  },

  3: function() {
    let lastName = prompt('Введіть прізвище студента якого шукаєте:');
    students.searchStudent(lastName);
  },

  4: function() {
    let idNumber = prompt(students.getAllList() + '\nВведіть ID студента якого ВИДАЛЯЕМО:');
    students.removeStudent(idNumber);
  }
}

class Student {
  constructor(firstName, lastName, age, idNumber, gpa){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.idNumber = idNumber;
    this.gpa = gpa;
  }

  getInfo() {
    return `${this.firstName} ${this.lastName}, Age: ${this.age}, ID: ${this.idNumber}, GPA: ${this.gpa}`;
  }
}

let students = {
  arrStudents: [],

  addStudent: function(firstName, lastName, age, idNumber, gpa) {
    this.arrStudents.push(new Student(firstName, lastName, age, idNumber, gpa))
  },

  removeStudent: function(idNumber) {
    indexStudent = this.arrStudents.findIndex(student => student.idNumber == idNumber);
    if(indexStudent !== -1) {
      this.arrStudents.splice(indexStudent, 1);
    } else {
      alert('Студента з таким ID не існує в списку!');
    }
  },

  getAllList: function() {
    let text = 'Список студентів:';
    this.arrStudents.forEach((s, index) => {
      text += `\n${++index }. ${s.firstName} ${s.lastName}, age: ${s.age}, ID: ${s.idNumber}, GPA: ${s.gpa}`;
    })
    return text;
  },

  searchStudent: function(searchLastName) {
    let student = this.arrStudents.find(el => el.lastName == searchLastName);
    if(student) {
      alert(student.getInfo());
    } else {
      alert('Студента з таким прізвищем не знайдено!');
    }
  }
}

// Фейкові данні для заповнення масиву студентів.
students.arrStudents.push(new Student('Daniel', 'Shwarc', '45', '0001', '88'));
students.arrStudents.push(new Student('Tanya', 'Shulc', '38', '0002', '91'));


while(true) {
  let userInput = prompt('Робота зі списком студентів:\n1. - Вивести список студентів.\n2. - Створити студента.\n3. - Знайти студента\n4. - Видалити студента\n0. - EXIT');
  if(isValidNumber(userInput) && isValidNumberRange(userInput)) {
    userInput = Math.floor(Number(userInput));
    if(userInput === 0) break;
    choicePosition[userInput]();
  } else {
    alert('Введіть коректне значення!');
  }
}
