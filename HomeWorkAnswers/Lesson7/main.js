class Student {
    constructor(name, surname, age, id, averageMark) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = id;
        this.averageMark = averageMark;
    }
}

let userManagement = {
    students: [],
    add: function(name, surname, age, id, averageMark) {
        this.students.push(new Student(name, surname, age, id, averageMark));
    },
    remove: function(id) {
        this.students.map((student, index) => {
            if (student.id === id) {
                this.students.splice(index, 1);
            }
        })
    },
    search: function(id) {
        return this.students.find(student => student.id === id);
    },
    showAll: function() {
        for (const student of this.students) {
            console.log(`Ім'я: ${student.name}
Прізвище: ${student.surname}
Вік: ${student.age}
Ідентифікаційний номер: ${student.id}
Середній бал: ${student.averageMark}`);
        }
    }
}


for (let i = 0; i < 5; i++) {
    userManagement.add("Student " + i, "Surname " + i, 20 + i, i, i * 10);
}

userManagement.showAll();

console.log(userManagement.search(2));