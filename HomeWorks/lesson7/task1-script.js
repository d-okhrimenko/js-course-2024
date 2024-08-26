const studentManager = {
    students: [],

    addStudent: function(firstName, lastName, age, studentID, averageGrade) {
        const student = { firstName, lastName, age, studentID, averageGrade };
        this.students.push(student);
    },

    removeStudent: function(studentID) {
        this.students = this.students.filter(student => student.studentID !== studentID);
    },

    searchStudent: function(studentID) {
        return this.students.find(student => student.studentID === studentID);
    },

    getAllStudents: function() {
        return this.students;
    }
};

const ui = {
    addStudentToList: function(student) {
        const studentList = document.getElementById('studentList');
        const li = document.createElement('li');
        li.textContent = `${student.firstName} ${student.lastName}, Вік: ${student.age}, ID: ${student.studentID}, Середній бал: ${student.averageGrade}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.onclick = () => {
            studentManager.removeStudent(student.studentID);
            this.displayAllStudents();
        };
        li.appendChild(deleteButton);
        studentList.appendChild(li);
    },

    displayAllStudents: function() {
        const studentList = document.getElementById('studentList');
        studentList.innerHTML = '';
        studentManager.getAllStudents().forEach(student => this.addStudentToList(student));
    },

    showSearchResult: function(student) {
        const searchResult = document.getElementById('searchResult');
        if (student) {
            searchResult.textContent = `Знайдено студента: ${student.firstName} ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}`;
        } else {
            searchResult.textContent = 'Студента не знайдено.';
        }
    },

    clearInputFields: function() {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('age').value = '';
        document.getElementById('studentID').value = '';
        document.getElementById('averageGrade').value = '';
    }
};

document.getElementById('addStudentBtn').addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const studentID = document.getElementById('studentID').value;
    const averageGrade = document.getElementById('averageGrade').value;

    if (firstName && lastName && age && studentID && averageGrade) {
        studentManager.addStudent(firstName, lastName, age, studentID, averageGrade);
        ui.displayAllStudents();
        ui.clearInputFields();
    } else {
        alert('Будь ласка, заповніть усі поля.');
    }
});

document.getElementById('searchStudentBtn').addEventListener('click', () => {
    const studentID = document.getElementById('searchID').value;
    const student = studentManager.searchStudent(studentID);
    ui.showSearchResult(student);
});
