class Student {
  constructor(firstName, lastName, age, id, averageScore) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.age = age),
      (this.id = id),
      (this.averageScore = averageScore);
  }
}

let groupController = {
  group: [
    new Student('FN1', 'LN1', 19, 1, 50),
    new Student('FN2', 'LN2', 24, 2, 70),
  ],

  addStudent(student) {
    this.group.push(student);
  },

  removeStudent(id) {
    this.group = this.group.filter((s) => s.id !== id);
  },

  searchStudent(id) {
    let desiredStudent = this.group.find((s) => s.id === id);
    console.log(this.getInfoPerStudent(desiredStudent));
  },

  getInfoPerStudent(s) {
    return `${s.firstName}, ${s.lastName}, ${s.age}, ${s.id}, ${s.averageScore}`;
  },

  displayGroupInfo() {
    this.group.forEach((x) =>
      console.log(`${this.group.indexOf(x)}. ${this.getInfoPerStudent(x)}`)
    );
    console.log('-------');
  },
};

// App Business logic:
groupController.displayGroupInfo();
groupController.addStudent(new Student('FN3', 'LN3', 25, 3, 75));
groupController.addStudent(new Student('FN4', 'LN4', 20, 4, 99));
groupController.displayGroupInfo();
groupController.removeStudent(3);
groupController.displayGroupInfo();

groupController.searchStudent(4);
