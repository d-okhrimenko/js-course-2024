export class Student {
    constructor(name, surname, age, id, gpa) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = id;
        this.gpa = gpa;
    }
}

export class StudentManager {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        this.saveStudents();
        this.displayStudents();
    }

    deleteStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.saveStudents();
        this.displayStudents();
    }

    displayStudents() {
        const tbody = document.querySelector('#student-table tbody');
        tbody.innerHTML = '';

        this.students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.surname}</td>
        <td>${student.age}</td>
        <td>${student.id}</td>
        <td>${student.gpa}</td>
        <td><button class="delete-btn" data-id="${student.id}">Delete</button></td>
      `;
            tbody.appendChild(row);
        });
    }

    saveStudents() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    loadStudents() {
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
            this.students = JSON.parse(storedStudents).map(student => {
                return new Student(student.name, student.surname, student.age, student.id, student.gpa);
            });
        }
    }
}