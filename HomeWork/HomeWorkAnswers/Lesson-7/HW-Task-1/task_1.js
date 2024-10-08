const studentGroup = {
    students: [],

    addStudent: function (firstName, lastName, age, id, averageGrade) {
        let newStudent = new Student(firstName, lastName, age, id, averageGrade);
        this.students.push(newStudent);
        alert("Студент успішно доданий!");
    },

    removeStudent: function (id) {
        const index = this.students.findIndex(student => student.id === id);

        if (index !== -1) {
            this.students.splice(index, 1);
            alert(`Студент з ID ${id} успішно видалений!`);
        } else {
            alert(`Студента з ID ${id} не знайдено.`);
        }
    },

    listStudents: function () {
        if (this.students.length === 0) {
            alert("Список студентів порожній.");
            return;
        }

        let studentList = "Список студентів:\n";
        this.students.forEach(student => {
            studentList += `ID: ${student.id}, Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}\n`;
        });

        alert(studentList);
    },

    findStudentById: function (id) {
        const student = this.students.find(student => student.id === id);

        if (student) {
            alert(`Інформація про студента з ID ${id}:\nІм'я: ${student.firstName}\nПрізвище: ${student.lastName}\nВік: ${student.age}\nСередній бал: ${student.averageGrade}`);
        } else {
            alert(`Студента з ID ${id} не знайдено.`);
        }
    }
};


function studentManagementApp() {

    const actions = {

        add: function () {
            let firstName = prompt("Введіть ім'я студента:");
            let lastName = prompt("Введіть прізвище студента:");
            let age = Number(prompt("Введіть вік студента:"));
            let id = prompt("Введіть ID студента:");
            let averageGrade = Number(prompt("Введіть середній бал студента:"));
            studentGroup.addStudent(firstName, lastName, age, id, averageGrade);
        },
        remove: function () {
            let id = prompt("Введіть ID студента для видалення:");
            studentGroup.removeStudent(id);
        },
        list: function () {
            studentGroup.listStudents();
        },
        find: function () {
            let id = prompt("Введіть ID студента для пошуку:");
            studentGroup.findStudentById(id);
        },
        exit: function () {
            alert("Завершення програми.");
            return false; 
        }
    };

    while (true) {
        let action = prompt("Оберіть дію: додати (add), видалити (remove), показати список (list), знайти студента (find), завершити (exit)").toLowerCase();

        // Виклик методу на основі дії
        if (actions[action]) {
            const result = actions[action]();
            if (result === false) break; // Вихід з циклу, якщо action - exit
        } else {
            alert("Некоректна дія. Будь ласка, оберіть: add, remove, list, find або exit.");
        }
    }
}

let Student = function (firstName, lastName, age, id, averageGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
    this.averageGrade = averageGrade;
};


studentManagementApp();
