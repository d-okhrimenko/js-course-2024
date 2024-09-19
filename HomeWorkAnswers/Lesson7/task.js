function Student(firstname, lastname, age, id, average) {
    this.name = firstname;
    this.lastname = lastname;
    this.age = age;
    this.id = id;
    this.average = average;
  }
  let studentsGrop = {
    students: [],
  
    addSt: function (firstname, lastname, age, id, average) {
      let stud = new Student(firstname, lastname, age, id, average);
      this.students.push(stud);
      console.log(`Студента ${firstname} ${lastname} додано.`);
    },
  
    removeSt: function (id) {
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === id) {
          console.log(
            `Студента ${this.students[i].name} ${this.students[i].lastname} видалено.`
          );
          this.students.splice(i, 1);
          return; 
        }
      }
      console.log(`Студента з ID ${id} не знайдено.`);
    },
  
    displaySt: function () {
      if (this.students.length === 0) {
        console.log("Немає студентів для відображення.");
      } else {
        this.students.forEach((student) => {
          console.log(`Ім'я: ${student.name}`);
          console.log(`Прізвище: ${student.lastname}`);
          console.log(`Вік: ${student.age}`);
          console.log(`ID: ${student.id}`);
          console.log(`Середній бал: ${student.average}`);
          console.log("-------------------------");
  
          alert(
            `Ім'я: ${student.name}\nПрізвище: ${student.lastname}\nВік: ${student.age}\nID: ${student.id}\nСередній бал: ${student.average}`
          );
        });
      }
    },
  
    find: function (id) {
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === id) {
          let studentInfo = `
            Ім'я: ${this.students[i].name}
            Прізвище: ${this.students[i].lastname}
            Вік: ${this.students[i].age}
            ID: ${this.students[i].id}
            Середній бал: ${this.students[i].average}
          `;
          console.log(`Знайдено студента:${studentInfo}`);
          alert(studentInfo.trim()); 
          return;
        }
      }
      console.log(`Студента з ID ${id} не знайдено.`);
    },
  };
  while (true) {
    let ch = Number(prompt("Choose: 1. Add student; 2. Delete student; 3. Display students; 4. Find student; 5.Exit."));
    switch (ch) {
      case 1:
        let nameSt = prompt("Enter first student name");
        let lastStName = prompt("Enter last student name");
        let ageSt = prompt("Enter student age");
        let idSt = Number(prompt("Enter student id"));
        let avSt = prompt("Enter student average");
        studentsGrop.addSt(nameSt, lastStName, ageSt, idSt, avSt);
        break;
      case 2:
        let dele = Number(prompt("Enter student id"));
        studentsGrop.removeSt(dele);
        break;
      case 3:
        studentsGrop.displaySt();
        break;
      case 4:
        let finding = Number(prompt("Enter student id"));
        studentsGrop.find(finding);
        break;
      case 5:
        alert("Вихід з програми.");
        break;
      default:
        alert("Невірний вибір");
        continue;
    }
    if (ch === 5) {
      break;
    }
  }
  