class Student {
    constructor(id, firstName, lastName, age, averageGrade) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.averageGrade = averageGrade;
    }
}

let studentGroup = {
    students: [],

    add: function (id, firstName, lastName, age, averageGrade) {
        const newStudent = new Student(id, firstName, lastName, age, averageGrade);
        this.students.push(newStudent);
    },

    remove: function (id) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            alert(`Студента ${removedStudent.firstName} ${removedStudent.lastName} видалено зі списку`);
        } else {
            alert(`Студент з ідентифікаційним номером ${id} відсутній в списку`);
        }
    },

    displayStudent: function (id) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            alert(`ID: ${student.id}, Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}`);
        } else {
            alert(`Студент з ідентифікаційним номером ${id} відсутній в списку`);
        }
    },

    displayStudents: function () {
        let listStudents = "";
        this.students.forEach(student => {
            listStudents += `ID: ${student.id}, Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}\n`;
        });
        alert(listStudents);
    },

};


studentGroup.add(1, "aa", "bb", 23, 34);
studentGroup.add(22, "пп", "рр", 24, 78);
studentGroup.add(3, "aa3", "bb3", 235, 23);

