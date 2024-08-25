// script.js

// Конструктор для створення об'єктів студентів
function Student(id, firstName, lastName, age, averageGrade) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.averageGrade = averageGrade;
}

// Об'єкт для управління групою студентів-студентів
const StudentGroup = {
    students: [],

    addStudent: function (id, firstName, lastName, age, averageGrade) {
        // Перевірка на існування студента з таким самим ID
        if (this.students.some(student => student.id === id)) {
            this.displayMessage(`Student with ID ${id} already exists.`);
            return;
        }

        const newStudent = new Student(id, firstName, lastName, age, averageGrade);
        this.students.push(newStudent);
        this.displayMessage(`Student ${firstName} ${lastName} added successfully.`);

        // Очищення полів уведення після додавання студента
        document.getElementById('studentId').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('averageGrade').value = '';
    },

    removeStudent: function (id) {
        const initialLength = this.students.length;
        this.students = this.students.filter(student => student.id !== id);
        if (this.students.length < initialLength) {
            this.displayMessage(`Student with ID ${id} removed successfully.`);
        } else {
            this.displayMessage(`Student with ID ${id} not found.`);
        }
    },

    displayStudents: function () {
        const output = document.getElementById('output');
        output.innerHTML = ''; // Очищення попереднього виводу
        if (this.students.length === 0) {
            output.innerHTML = '<p>No students in the group.</p>';
        } else {
            this.students.forEach(student => {
                const studentDiv = document.createElement('div');
                studentDiv.className = 'student-item';
                studentDiv.innerHTML = `
                    <strong>ID:</strong> ${student.id}<br>
                    <strong>Name:</strong> ${student.firstName} ${student.lastName}<br>
                    <strong>Age:</strong> ${student.age}<br>
                    <strong>Average Grade:</strong> ${student.averageGrade}
                `;
                output.appendChild(studentDiv);
            });
        }
    },

    findStudentById: function (id) {
        const student = this.students.find(student => student.id === id);
        const output = document.getElementById('output');
        output.innerHTML = ''; 
        if (student) {
            const studentDiv = document.createElement('div');
            studentDiv.className = 'student-item';
            studentDiv.innerHTML = `
                <strong>Found Student:</strong><br>
                <strong>ID:</strong> ${student.id}<br>
                <strong>Name:</strong> ${student.firstName} ${student.lastName}<br>
                <strong>Age:</strong> ${student.age}<br>
                <strong>Average Grade:</strong> ${student.averageGrade}
            `;
            output.appendChild(studentDiv);
        } else {
            output.innerHTML = `<p>Student with ID ${id} not found.</p>`;
        }
    },

    displayMessage: function (message) {
        const output = document.getElementById('output');
        output.innerHTML = `<p>${message}</p>`;
    }
};

// Функції для взаємодії з HTML-формою
function addStudent() {
    const id = parseInt(document.getElementById('studentId').value);
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const averageGrade = parseFloat(document.getElementById('averageGrade').value);

    if (!id || !firstName || !lastName || !age || !averageGrade) {
        StudentGroup.displayMessage("Please fill in all fields correctly.");
    } else {
        StudentGroup.addStudent(id, firstName, lastName, age, averageGrade);
    }
}

function removeStudent() {
    const id = parseInt(document.getElementById('studentId').value);
    if (id) {
        StudentGroup.removeStudent(id);
    } else {
        StudentGroup.displayMessage("Please enter a valid ID.");
    }
}

function displayStudents() {
    StudentGroup.displayStudents();
}

function findStudent() {
    const id = parseInt(document.getElementById('studentId').value);
    if (id) {
        StudentGroup.findStudentById(id);
    } else {
        StudentGroup.displayMessage("Please enter a valid ID.");
    }
}


//module.exports = StudentGroup; // Переконайтеся, що це додано якщо ви плануєте 
//використовувати цей код тільки у Node.js а не в браузері. В такому випадку нижня 
//частина коду, 132 - 134 рядки, не потрібна.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StudentGroup;
}
