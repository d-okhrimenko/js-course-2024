// Створити конструктор або фабричну функцію для створення об'єктів студентів
function Student(id, firstName, lastName, age, averageGrade) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.averageGrade = averageGrade;
}

// Створити об'єкт для управління групою студентів
let studentGroup = {
    students: [],

    // Додавання нового студента
    addStudent: function(id, firstName, lastName, age, averageGrade) {
        let newStudent = new Student(id, firstName, lastName, age, averageGrade);
        this.students.push(newStudent);
        alert(`Студента ${firstName} ${lastName} додано до групи.`);
    },

    // Видалення студента
    removeStudent: function(id) {
        let index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            let removedStudent = this.students.splice(index, 1)[0];
            alert(`Студента ${removedStudent.firstName} ${removedStudent.lastName} видалено з групи.`);
        } else {
            alert(`Студента з ідентифікаційним номером ${id} не знайдено.`);
        }
    },

    // Виведення списку всіх студентів
    listStudents: function() {
        if (this.students.length === 0) {
            alert("Список студентів порожній.");
        } else {
            let studentList = this.students.map(student =>
                `ID: ${student.id}, Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}`
            ).join("\n");
            alert("Список студентів:\n" + studentList);
        }
    },

    // Пошук студента за його ід
    findStudentById: function(id) {
        let student = this.students.find(student => student.id === id);
        if (student) {
            alert(`Інформація про студента: ID: ${student.id}, Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}`);
        } else {
            alert(`Студента з ідентифікаційним номером ${id} не знайдено.`);
        }
    }
};

// Додати студентів
studentGroup.addStudent(1, "Юрій", "Лисак", 20, 85);
studentGroup.addStudent(2, "Ольга", "Німчук", 19, 90);
studentGroup.addStudent(3, "Іван", "Заболоцький", 21, 78);

// Список студентів
studentGroup.listStudents();

// Знайти студента за ID
studentGroup.findStudentById(2);

// Видалити студента
studentGroup.removeStudent(1);

// Оновлений список студентів
studentGroup.listStudents();