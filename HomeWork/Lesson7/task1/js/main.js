import { Student, StudentManager } from './student_manager.js';

const form = document.getElementById('student-form');
const studentTable = document.getElementById('student-table');
const studentManager = new StudentManager();

// Load students from localStorage on page load
studentManager.loadStudents();
studentManager.displayStudents();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = parseInt(document.getElementById('age').value);
    const id = document.getElementById('id').value;
    const gpa = parseFloat(document.getElementById('gpa').value);

    const student = new Student(name, surname, age, id, gpa);
    studentManager.addStudent(student);

    form.reset();
});

studentTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const id = event.target.dataset.id;
        studentManager.deleteStudent(id);
    }
});