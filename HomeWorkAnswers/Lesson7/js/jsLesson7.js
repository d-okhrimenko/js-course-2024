class Student {
    constructor(id, name, lastName, age, averageGrade) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.averageGrade = averageGrade;
    }

    showOnDisplay() {
        console.log(
            `id: ${this.id}, name: ${this.name}, last name: ${this.lastName}, age: ${this.age}, averageGrade: ${this.averageGrade}`
        );
        console.log('----------------------');
    }
}

class StudentsDatabase {
    #studentsList = [];

    addStudent(id, name, lastName, age, averageGrade) {
        this.#studentsList.push(
            new Student(id, name, lastName, age, averageGrade)
        );
        console.log(`The new student with ID ${id} has been added`);
    }

    removeStudentById(id) {
        let index = this.#studentsList.findIndex(student => student.id === id);
        this.#studentsList.splice(index, 1);
        console.log(`Student with ID ${id} was deleted`);
        console.log('----------------------');
    }

    searchStudentById(id) {
        let target = this.#studentsList.find(student => student.id === id);
        console.log(`Student with ID ${id} found:`);
        target.showOnDisplay();
    }

    showAllStudents() {
        this.#studentsList.forEach(student => student.showOnDisplay());
    }
}

// tests
let studentsDatabase = new StudentsDatabase();

studentsDatabase.addStudent(1, 'Oleh ', 'Ivanenko', 23, 10.1);
studentsDatabase.addStudent(2, 'Svitlana ', 'Petrenko', 22, 11.5);
studentsDatabase.addStudent(3, 'Kateryna ', 'Mykhailova', 24, 10.9);
studentsDatabase.addStudent(4, 'Andriy ', 'Shevchenko', 23, 10.2);

studentsDatabase.showAllStudents();

studentsDatabase.searchStudentById(2);

studentsDatabase.removeStudentById(1);

studentsDatabase.showAllStudents();