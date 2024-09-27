let groupController = {
    group: [],

    getLastId: function () {
        let max = Number.MIN_VALUE;
    
        this.group.forEach(student => {
            if (student.id > max) max = student.id;
        });
        
        return max;
    },

    addStudent: function (name, surname, age, avgScore) {        
        let createStudent = (name, surname, age, avgScore) => {
            let id = (this.group.length) ? this.getLastId() + 1 : this.group.length;

            return { 
                id: id,
                name: name,
                surname: surname,
                age: age,
                avgScore: avgScore,
            }
        }

        this.group.push(createStudent(name, surname, age, avgScore));
    },

    findById: function (id) { return this.group.filter(student => student.id == id) },

    showMsg: function (msg) { console.log(msg); },

    showInfo: function (id = -1) {
        let list = (id == -1) ? this.group : this.findById(id);

        console.log(getSymbolString('*', 20));

        return list.map(element => this.showMsg(`id: ${element.id} | ${element.name} ${element.surname}: ${element.age} y.o. | avg.score: ${element.avgScore}`));
    },

    deleteStudent: function(id) {
        let foundIndex = this.group.findIndex( x => x.id == id);
        if (foundIndex != -1) this.group.splice(foundIndex, 1);
    },
};

// ініціалізація групи студеїв
groupController.addStudent("John", "Elbow", 21, 150);
groupController.addStudent("Elsea", "Woker", 20, 178);
groupController.addStudent("Ingvar", "Jahnsson", 22, 182);

// демонстрація групи студеїв
groupController.showInfo();
// демонстрація студея групи за його id
groupController.showInfo(1);
// вилучення студея з групи за його id
groupController.deleteStudent(0);

// демонстрація групи студеїв
groupController.showInfo();

// додавання студея до групи
groupController.addStudent("Icko", "Casiori", 21, 180);
// демонстрація студея групи за його id
groupController.showInfo(3);
// демонстрація групи студеїв
groupController.showInfo();

