class Student {
    constructor(id, name, surename, age, avgScore) {
        this.id = id;
        this.name = name;
        this.surename = surename;
        this.age = age;
        this.avgScore = avgScore;
    }

    displayInfo () {
        console.log(`Name: ${this.name} ${this.surename}, ID: ${this.id}, Age: ${this.age}, Avg Score: ${this.avgScore}`);
    }
}

let group = {
    students: [],

    add: function(id, name, surename, age, avgScore) {
        this.students.push(new Student(id, name, surename, age, avgScore));
    },
    remove: function(id) {
        let index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    },
    displayGroup: function() {
        this.students.forEach(student => {
            student.displayInfo();
        });
    },
    displayStudent: function(id) {
        let student = this.students.filter(student => student.id == id)[0];
        if (student) {
            student.displayInfo();
        }
    }
}
