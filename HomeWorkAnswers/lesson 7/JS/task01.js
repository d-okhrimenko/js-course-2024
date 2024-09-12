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

    showInfo: function (msgTemplateFn, id = -1) {
        let list = (id == -1) ? this.group : this.findById(id);

        return list.map(element => this.showMsg(msgTemplateFn(element)));
    },

    deleteStudent: function(id) {
        let findIndex = (id) => {
            let foundStudent = this.findById(id);
            return this.group.indexOf(foundStudent[0]);
        }
        let foundIndex = findIndex(id);
        if (foundIndex != -1) this.group.splice(foundIndex, 1);
    },

};

groupController.addStudent("John", "Elbow", 21, 150);
groupController.addStudent("Elsea", "Woker", 20, 178);
groupController.addStudent("Ingvar", "Jahnsson", 22, 182);

groupController.showInfo(x => `id: ${x.id} | ${x.name} ${x.surname}: ${x.age} y.o. | avg.score: ${x.avgScore}`);
groupController.showInfo(x => `id: ${x.id} | ${x.name} ${x.surname}: ${x.age} y.o. | avg.score: ${x.avgScore}`, 1);

groupController.deleteStudent(0);

groupController.showInfo(x => `id: ${x.id} | ${x.name} ${x.surname}: ${x.age} y.o. | avg.score: ${x.avgScore}`);

groupController.addStudent("Icko", "Casiori", 21, 180);
groupController.showInfo(x => `id: ${x.id} | ${x.name} ${x.surname}: ${x.age} y.o. | avg.score: ${x.avgScore}`, 3);
groupController.showInfo(x => `id: ${x.id} | ${x.name} ${x.surname}: ${x.age} y.o. | avg.score: ${x.avgScore}`);

