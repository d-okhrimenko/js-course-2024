let students = {
  students_arr: [],
  add_student: function (name, lastname, age, id, avgscore) {
    let Student = {};
    Student.Name = name;
    Student.LastName = lastname;
    Student.Age = age;
    Student.ID = id;
    Student.Avg = avgscore;
    this.students_arr.push(Student);

    return Student;
  },
  delete_student: function (id) {
    index = this.students_arr.findIndex((student) => student.ID === id);
    if (index !== -1) {
      this.students_arr.splice(index, 1);
    } else {
      console.log("Такого студента немає.");
    }
  },
  show_students: function () {
    console.log(this.students_arr);
  },
  find_students: function (id) {
    let result = this.students_arr.find((student) => {
      return student.ID === id;
    });
    console.log(result);
  },
};

let Student_1 = students.add_student("Andrew", "Zhunimskiy", 18, 2193, 90);
let Student_2 = students.add_student("Tania", "Wrasovska", 21, 2100, 78);

students.show_students();
students.find_students(2100);
students.delete_student(2100);
students.show_students();
