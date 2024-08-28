// Клас для створення об'єкта студента
class Student {
    constructor(firstName, lastName, age, id, averageGrade) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.id = id;
      this.averageGrade = averageGrade;
    }
  }
  
  // Клас для управління групою студентів
  class StudentGroup {
    constructor() {
      this.students = [];
    }
  
    // Метод для додавання нового студента
    addStudent(firstName, lastName, age, id, averageGrade) {
      const newStudent = new Student(firstName, lastName, age, id, averageGrade);
      this.students.push(newStudent);
      console.log(`Студента ${firstName} ${lastName} додано до групи.`);
    }
  
    // Метод для видалення студента за ідентифікаційним номером
    removeStudentById(id) {
      const index = this.students.findIndex(student => student.id === id);
      if (index !== -1) {
        const removedStudent = this.students.splice(index, 1);
        console.log(`Студента ${removedStudent[0].firstName} ${removedStudent[0].lastName} видалено з групи.`);
      } else {
        console.log(`Студента з ідентифікаційним номером ${id} не знайдено.`);
      }
    }
  
    // Метод для виведення списку всіх студентів
    listAllStudents() {
      if (this.students.length === 0) {
        console.log('Група студентів порожня.');
      } else {
        console.log('Список студентів у групі:');
        this.students.forEach(student => {
          console.log(`Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, ID: ${student.id}, Середній бал: ${student.averageGrade}`);
        });
      }
    }
  
    // Метод для пошуку студента за ідентифікаційним номером
    findStudentById(id) {
      const student = this.students.find(student => student.id === id);
      if (student) {
        console.log(`Знайдено студента: Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, ID: ${student.id}, Середній бал: ${student.averageGrade}`);
      } else {
        console.log(`Студента з ідентифікаційним номером ${id} не знайдено.`);
      }
    }
  
    // Метод для додавання нового студента через prompt
    addStudentFromPrompt() {
      const firstName = prompt("Введіть ім'я студента:");
      const lastName = prompt("Введіть прізвище студента:");
      const age = parseInt(prompt("Введіть вік студента:"), 10);
      const id = parseInt(prompt("Введіть ідентифікаційний номер студента:"), 10);
      const averageGrade = parseFloat(prompt("Введіть середній бал студента:"));
  
      this.addStudent(firstName, lastName, age, id, averageGrade);
    }
  }
  
  // Функція для відображення меню гри
  function showMenu() {
    console.log(`
  Введіть дію:
  - "додати": Додати нового студента
  - "видалити": Видалити студента за ID
  - "показати": Показати список всіх студентів
  - "знайти": Знайти студента за ID
  - "вийти": Вийти з гри
  `);
  }
  
  // Функція для запуску гри
  function startGame() {
    const group = new StudentGroup();
    let isPlaying = true;
  
    while (isPlaying) {
      showMenu();
      const choice = prompt("Введіть дію:").toLowerCase();
  
      switch (choice) {
        case 'додати':
          group.addStudentFromPrompt();
          break;
        case 'видалити':
          const removeId = parseInt(prompt("Введіть ID студента, якого потрібно видалити:"), 10);
          group.removeStudentById(removeId);
          break;
        case 'показати':
          group.listAllStudents();
          break;
        case 'знайти':
          const findId = parseInt(prompt("Введіть ID студента, якого потрібно знайти:"), 10);
          group.findStudentById(findId);
          break;
        case 'вийти':
          console.log("Дякуємо за гру!");
          isPlaying = false;
          break;
        default:
          console.log("Неправильний вибір. Спробуйте ще раз.");
      }
    }
  }
  
  // Запуск гри
  startGame();
  