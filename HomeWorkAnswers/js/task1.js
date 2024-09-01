class Student {
  constructor(firstName, lastName, age, id, averageGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
    this.averageGrade = averageGrade;
  }

  // Метод для отримання повної інформації про студента
  getInfo() {
    return `ID: ${this.id}, Ім'я: ${this.firstName} ${this.lastName}, Вік: ${this.age}, Середній бал: ${this.averageGrade}`;
  }
}

class StudentsGroup {
  // Приватне поле для масиву студентів
  #students;

  constructor() {
    this.#students = [];
  }

  // Додаємо нового студента
  addStudent(firstName, lastName, age, id, averageGrade) {
    const newStudent = new Student(firstName, lastName, age, id, averageGrade);
    this.#students.push(newStudent);
  }

  // Видаляємо студента з id
  removeStudent(id) {
    this.#students = this.#students.filter((student) => student.id !== id);
  }

  // Виводимо інформацію про всіх студентів
  showAllStudents() {
    this.#students.forEach((student) => {
      console.log(student.getInfo());
    });
  }

  // Шукаємо студента по ID
  findStudentById(id) {
    const student = this.#students.find((student) => student.id === id);

    if (student) {
      console.log(student.getInfo());
    } else {
      console.log(`Студента з ID ${id} не знайдено!`);
    }
  }
}

console.log('Створюємо нову групу студентів:\nnew StudentGroup()');
const group = new StudentsGroup();

console.log('Додаємо студентів у группу:\ngroup.addStudent(firstName, lastName, age, id, averageGrade)');
group.addStudent('Taras', 'Kozak', 20, 'ITVDN001', 10);
group.addStudent('Liza', 'Shpak', 20, 'ITVDN002', 10);
group.addStudent('Pavlo', 'Tkach', 20, 'ITVDN003', 7.8);
group.addStudent('Alisa', 'Budenko', 22, 'ITVDN004', 9.9);
group.addStudent('Andrii', 'Nazarenko', 19, 'ITVDN005', 11.7);

console.log('Виводимо список всіх студентів:\ngroup.showAllStudents()');
group.showAllStudents();

console.log('Знаходимо студента з ID: ITVDN001\ngroup.findStudentById("ITVDN001")');
group.findStudentById('ITVDN001');

console.log('Видаляємо студента з ID: ITVDN003\ngroup.removeStudent("ITVDN003")');
group.removeStudent('ITVDN003');

console.log('Виводимо список студентів після видалення:\ngroup.showAllStudents()');
group.showAllStudents();
