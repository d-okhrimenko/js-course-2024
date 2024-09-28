let studentsGroup = {
    students: [],

    add: function(fName, lName, age, iNumber, avgPoints) {
        this.students.push({ 
            fName: fName, 
            lName: lName, 
            age: age, 
            iNumber: iNumber, 
            avgPoints: avgPoints
        });
    },

    remove: function(iNumber) {
        let student = this.students.filter(x => x.iNumber == iNumber)[0];
        let index = this.students.indexOf(student);
        this.students.splice(index, 1);
    },

    getByINumber: function(iNumber) {
        let student = this.students.filter(x => x.iNumber == iNumber)[0];
        return this.toStrDetails(student)
    },

    toStrShort: function(student) {
        return `${student.iNumber} | ${student.fName} ${student.lName}`
    },

    toStrDetails: function(student) {
        return `Ідентифікаційний номер: ${student.iNumber}\nПрізвище: ${student.fName}\nІм'я: ${student.lName}\nВік: ${student.age}\nСередній бал: ${student.avgPoints}`
    },

    getStudents: function() {
        return this.students.map(student => this.toStrShort(student));
    },
}

let uiController = {
    displayListInP: function(list, qSelector) {
        document.querySelector(qSelector).innerHTML = list.join("<br />");
    },

    getStrByPrompt: function(message) {
        return prompt(message)
    },

    getIntByPrompt: function(message) {
        return parseInt(prompt(message))
    },

    getFloatByPrompt: function(message) {
        return parseFloat(prompt(message))
    },

    alert: function(message) {
        alert(message)
    }
}

document.querySelector("#btn-t1-preset").onclick = function () {
    studentsGroup.add("Петренко", "Тетяна", 18, 1, 76.4);
    studentsGroup.add("Пархоменко", "Галина", 19, 2, 96.3);
    studentsGroup.add("Бондар", "Катерина", 18, 3, 79.4);
    studentsGroup.add("Коваленко", "Олег", 19, 4, 86.8);
    studentsGroup.add("Лесик", "Андрій", 20, 5, 82.5);
    studentsGroup.add("Татаренко", "Тарас", 18, 6, 60);
    studentsGroup.add("Бондаренко", "Алла", 21, 7, 100);
    uiController.displayListInP(studentsGroup.getStudents(), "#t1-students");
}

document.querySelector("#btn-t1-add").onclick = function () {
    let fName = uiController.getStrByPrompt("Введіть Прізвище");
    let lName = uiController.getStrByPrompt("Введіть Ім'я");
    let age = uiController.getIntByPrompt("Введіть Вік");
    let iNumber = uiController.getIntByPrompt("Введіть ІН");
    let avgPoints = uiController.getFloatByPrompt("Введіть Середній бал");
    studentsGroup.add(fName, lName, age, iNumber, avgPoints);
    uiController.displayListInP(studentsGroup.getStudents(), "#t1-students");
}

document.querySelector("#btn-t1-del").onclick = function () {
    let iNumber = uiController.getIntByPrompt("Введіть норме стунета для видалення");
    studentsGroup.remove(iNumber);
    uiController.displayListInP(studentsGroup.getStudents(), "#t1-students");
}

document.querySelector("#btn-t1-get1").onclick = function () {
    let iNumber = uiController.getIntByPrompt("Введіть номер студента для отримання детальної інформації");
    let student = studentsGroup.getByINumber(iNumber);
    alert(student);
}