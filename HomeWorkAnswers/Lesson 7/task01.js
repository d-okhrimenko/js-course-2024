class Student {
    constructor (name, surname, age, id, averageGrade) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = id;
        this.averageGrade = averageGrade;
    }
};

let groupManager = {
    group: [],

    addStudent: function(name, surname, age, id, averageGrade) {
        let newStudent = new Student(name, surname, age, id, averageGrade);
        this.group.push(newStudent);
    },

    removeStudent: function(id) {
        let index = this.group.findIndex(x => x.id == id);
        if (index !== -1) {
            this.group.splice(index, 1);
            alert(`Student with ID ${id} is deleted.`);
        } else {
            alert(`Student with ID ${id} is not found.`);
        }
    },

    displayListOfStudents: function() {
        if (this.group.length === 0) {
            alert(`This list of students is empty`);
        } else {
            let result = "List of students:\n";
            this.group.forEach((student, index) => {
                result += `${index + 1}.\nName: ${student.name}\nSurname: ${student.surname}\nAge: ${student.age}\nId: ${student.id}\nAverage grade: ${student.averageGrade}\n\n`
            });
            alert(result);
        }
    },

    findStudentById: function(id) {
        let student = this.group.find(student => student.id === id);

        if (student) {
            alert(`The student was found:
                \nName: ${student.name}
                \nSurname: ${student.surname}
                \nAge: ${student.age}
                \nID: ${student.id}
                \nAverage Grade: ${student.averageGrade}`);
            return student;
        } else {
            alert(`The student with such an ID was not found.`);
            return null;
        }
    }
};

groupManager.addStudent('Oksana', 'Oksanik', 20, 1, 98);
groupManager.addStudent('Viktoria', 'Viktorienko', 22, 2, 57);
groupManager.displayListOfStudents();
groupManager.findStudentById(1);
groupManager.removeStudent(2);
groupManager.displayListOfStudents();
