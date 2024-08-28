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
        let nesessaryElements = ["ім'я", "прізвище", "вік", "ідентифікаційний номер", "середній бал"]
        let studentData = []
        for (let i = 0; i < nesessaryElements.length; i++) {
            if (i === 2 || i === 3) {
                const currentData = parseInt(prompt(`Введіть ${nesessaryElements[i]}`));
                studentData.push(currentData)
            } else if (i === 4) {
                const currentData = parseFloat(prompt(`Введіть ${nesessaryElements[i]}`));
                studentData.push(currentData)
            } else {
                const currentData = prompt(`Введіть ${nesessaryElements[i]}`);
                studentData.push(currentData)
            }
        }
        this.studentsList.push(createStudent(studentData[0], studentData[1], studentData[2], studentData[3], studentData[4]));

        let newStudent = document.createElement("tr")
        let name = document.createElement("td")
        let surname = document.createElement("td")
        let age = document.createElement("td")
        let id = document.createElement("td")
        let avgMark = document.createElement("td")

        name.textContent = studentData[0]
        surname.textContent = studentData[1]
        age.textContent = studentData[2]
        id.textContent = studentData[3]
        avgMark.textContent = studentData[4]

        newStudent.appendChild(name)
        newStudent.appendChild(surname)
        newStudent.appendChild(age)
        newStudent.appendChild(id)
        newStudent.appendChild(avgMark)

        document.getElementById("place_for_students").appendChild(newStudent)
    },

    deleteStudent: function() {
        let idOfStudent = parseInt(prompt("Введіть ідентифікаційний номер студента"));
        if (this.studentsList.indexOf(idOfStudent)) {
            for (let i = 0; i < this.studentsList.length; i++) {
                if (this.studentsList[i].id === idOfStudent) {
                    this.studentsList.splice(i, 1);
                    alert("Студента видалено")
                }
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