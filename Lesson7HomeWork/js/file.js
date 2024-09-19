// Клас для студентів
class Student {
    constructor(id, firstName, lastName, age, averageGrade) {
        this.id = id; // Ідентифікаційний номер студента
        this.firstName = firstName; // Ім'я студента
        this.lastName = lastName; // Прізвище студента
        this.age = age; // Вік студента
        this.averageGrade = averageGrade; // Середній бал студента
    }

    // Метод для виведення інформації про студента
    getInfo() {
        return `ID: ${this.id}, Ім'я: ${this.firstName}, Прізвище: ${this.lastName}, Вік: ${this.age}, Середній бал: ${this.averageGrade}`;
    }
}

// Клас для групи студентів
class StudentGroup {
    constructor() {
        this.students = []; // Масив для зберігання студентів
    }

    // Метод для додавання нового студента
    addStudent(id, firstName, lastName, age, averageGrade) {
        const student = new Student(id, firstName, lastName, age, averageGrade);
        this.students.push(student);
        console.log(`Студент ${firstName} ${lastName} доданий.`);
        // Виведення на сторінку HTML
        const studentElement = document.createElement("p");
        studentElement.textContent = student.getInfo();
        document.getElementById("list").appendChild(studentElement);
    }

    // Метод для видалення студента за його ідентифікаційним номером
    removeStudent(id) {
        const index = this.students.findIndex((student) => student.id === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1);
            console.log(`Студент з ID: ${id} видалений.`);
        } else {
            console.log(`Студента з ID: ${id} не знайдено.`);
        }
    }

    // Метод для виведення списку всіх студентів
    listStudents() {
        if (this.students.length === 0) {
            console.log("Немає студентів у групі.");
        } else {
            this.students.forEach((student) => {
                console.log(student.getInfo());
            });
        }
    }

    // Метод для пошуку студента за ідентифікаційним номером
    findStudentById(id) {
        const student = this.students.find((student) => student.id === id);
        if (student) {
            console.log("Знайдено студента: " + student.getInfo());
        } else {
            console.log(`Студента з ID: ${id} не знайдено.`);
        }
    }
}

// Група студентів
const group = new StudentGroup();

// Додавання студентів
group.addStudent(1, "Іван", "Іванов", 20, 90);
group.addStudent(2, "Марія", "Петренко", 22, 85);
group.addStudent(3, "Олег", "Сидоренко", 21, 78);

// Список студентів
group.listStudents();

// Пошук студента за ID
group.findStudentById(2);

// Видалення студента
group.removeStudent(3);

// Оновлений список студентів
group.listStudents();
