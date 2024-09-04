function createStudent(name, surname, age, id, avgMark) {
    return {
        name: name,
        surname: surname,
        age: age,
        id: id,
        avgMark: avgMark
    };
}

let students = {
    studentsList: [],
    addStudent: function() {
        let name = prompt("Введіть ім'я");
        let surname = prompt("Введіть прізвище");
        let age = parseInt(prompt("Введіть вік"));
        let id = parseInt(prompt("Введіть ідентифікаційний номер"));
        let avgMark = parseFloat(prompt("Введіть середній бал"));

        this.studentsList.push(createStudent(name, surname, age, id, avgMark));
    },

    deleteStudent: function() {
        let idOfStudent = parseInt(prompt("Введіть ідентифікаційний номер студента"));
        for (let i = 0; i < this.studentsList.length; i++) {
            if (this.studentsList[i].id === idOfStudent) {
                this.studentsList.splice(i, 1); 
            }
        }
    },

    showStudents: function() {
        let studentListString = "";
        for (let student of this.studentsList) {
            studentListString += `Name: ${student.name}, Surname: ${student.surname}, Age: ${student.age}, ID: ${student.id}, Avg Mark: ${student.avgMark}\n`;
        }
        alert(studentListString);
    }
}