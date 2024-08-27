class Student {
    constructor(id, name, lastName, age, average) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.lastName = lastName;
        this.average = average;
    }

    lengthLine = 40;

    displayInfo() {
        console.log("=".repeat(this.lengthLine));
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Average: ${this.average}`);
        console.log("=".repeat(this.lengthLine));
    }
}

class Group {
    constructor() {
        this.group = [];
    }

    add(id, name, lastName, age, average) {
        let existId = this.group.filter((student) => student.id === id)[0];
        if(existId === undefined) {

            this.group.push(new Student(id, name, lastName, age, average));
        } else this.showMessage(`Студент з ID ${id} та ім'ям ${name} вже є у списку групи`);
    }

    remove(id) {
        let existId = this.group.filter((student) => student.id === id)[0];
        if (existId === undefined) {
            this.showMessage(`Студента з ID ${id} немає у списку групи`);
        } else {
            let index = this.group.indexOf(existId);
            this.group.splice(index, 1);
        }
    }

    find(id) {
        let existId = this.group.filter((student) => student.id === id)[0];
        if (existId === undefined) {
            this.showMessage(`Студента з ID ${id} немає у списку групи`);
        } else {
            existId.displayInfo();
        }
    }

    displayStudents() {
        this.group.forEach((student) => {
            student.displayInfo();
        });
    }

    showMessage(message) {
        console.log(message);
    }
}

function main() {
    const group = new Group();

    group.add(1, "Slavik", "Tymchuk", 40, 200);
    group.add(2, "Andriy", "Koval", 32, 180);
    group.add(3, "Iryna", "Zhuk", 29, 195);
    group.add(4, "Petro", "Lysenko", 37, 205);
    group.add(5, "Viktoriya", "Danylova", 26, 230);
    group.add(6, "Volodymyr", "Pavlenko", 39, 185);

    console.log("Виводимо список студентів");

    group.displayStudents();

    console.log("Додаємо студента з ID 7");
    group.add(7, "Olena", "Shevchenko", 25, 220);
    
    console.log("Додаємо студента з вже існуючим ID 7");
    group.add(7, "Olena", "Shevchenko", 25, 220);
    
    
    console.log("Шукаємо студента з ID 7");
    group.find(7);

    console.log("Шукаємо студента з неуснуючим ID 10");
    group.find(10);
    
    
    console.log("Видаляємо студента з ID 7");
    group.remove(7);

    console.log("Видаляємо студента з неіснуючим ID 77");
    group.remove(77)

    }

