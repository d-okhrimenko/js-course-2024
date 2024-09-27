function createStudent(name, surname, age, id, grade) {
    let student = {};
    student.name = name;
    student.surname = surname;
    student.age = age;
    student.id = id;
    student.grade = grade;
    return student;
}

let manageStudents = {
    students: [],

    add: function (name, surname, age, id, grade) {
        const studentIds = this.students.map(student => student.id);
        if (studentIds.includes(id)) {
            alert("Такий ідентифікаційний № вже є у списку")
        }
        else {
            const newStudent = createStudent(name, surname, age, id, grade);
            this.students.push(newStudent);
            alert(`Студент ${name} ${surname} доданий до списку`);
        }
    },

    remove: function (id) {
        const studentIds = this.students.map(student => student.id);
        if (studentIds.includes(id)) {
            this.students = this.students.filter(student => student.id !== id);
            alert(`Студента з ідентифікаційним № ${id} видалено!`);
        }
        else alert(`В списку відсутній студент з ідентифікаційним № ${id}`);
    },

    showListOfStudents: function () {
        if (this.students.length === 0) {
            alert("В списку відсутні студенти");
        }
        else {
            const list = this.students.map
                (student => `Ім'я: ${student.name} Прізвище: ${student.surname} 
                Вік: ${student.age} Ідентифікаційний №: ${student.id} Середній бал: ${student.grade}`).join("\n");
            alert(list);
        }
    },

    findInfoOfStudent: function (id) {
        const info = this.students.find(student => student.id === id);
        if (info) {
            alert(`Ім'я: ${info.name} Прізвище: ${info.surname} 
            Вік: ${info.age} Ідентифікаційний №: ${info.id} Середній бал: ${info.grade}`);
        }
        else alert(`В списку відсутній студент з ідентифікаційним № ${id}`);
    }
}

document.querySelector("#btnAdd").onclick = function () {
    let name = prompt("Введіть ім'я студента");
    let surname = prompt("Введіть прізвище студента");
    let age = prompt("Введіть вік студента");
    let id = prompt("Введіть ідентифікаційний № студента");
    let grade = prompt("Введіть середній балл студента");
    manageStudents.add(name, surname, age, id, grade);
}

document.querySelector("#btnRemove").onclick = function () {
    let id = prompt("Введіть ідентифікаційний № студента")
    manageStudents.remove(id);
}

document.querySelector("#btnList").onclick = function () {
    manageStudents.showListOfStudents();
}

document.querySelector("#btnInfo").onclick = function () {
    let id = prompt("Введіть ідентифікаційний № студента");
    manageStudents.findInfoOfStudent(id);
}
