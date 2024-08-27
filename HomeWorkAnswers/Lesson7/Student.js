class Student {
    constructor(id, firstName, lastName, age, averageGrade) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.averageGrade = averageGrade;
    }
}

class StudentGroup {
    constructor() {
        this.students = [];
    }

    add(id, firstName, lastName, age, averageGrade) {
        const newStudent = new Student(id, firstName, lastName, age, averageGrade);
        this.students.push(newStudent);
    }

    remove(id) {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            alert(`Студента ${removedStudent.firstName} ${removedStudent.lastName} видалено зі списку`);
        } else {
            alert(`Студент з ідентифікаційним номером ${id} відсутній в списку`);
        }
    }

    displayStudent(id) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            alert(`ID: ${student.id}, Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}`);
        } else {
            alert(`Студент з ідентифікаційним номером ${id} відсутній в списку`);
        }
    }

    displayStudents() {
        const listStudents = this.students.map(student =>
            `ID: ${student.id}, Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, Середній бал: ${student.averageGrade}`
        ).join('\n');
        alert(listStudents);
    }
}