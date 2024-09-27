class Student {
    constructor(firstName,  lastName, age, id, averageGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
        this.averageGrade = averageGrade
    }
}

class GroupOfStudents {

    constructor () {
        this._students = [];
    }

    get students () {
        return this._students;
    }

    add (firstName,  lastName, age, id, averageGrade) {
        let student = new Student(firstName,  lastName, age, id, averageGrade);
        this._students.push(student);
    }

    remove (id) {
        let removed = this.students.find(student => student.id === id);
        if (!removed) {
            console.log('Такого студента немає у списку');
        } else {
            let removedIndex = this.students.indexOf(removed);
            this.students.splice(removedIndex, 1);
            }
        }
                
    displayList () {
        if(this.students.length === 0) {
            console.log('Список порожній')
        } else {
            this.students.forEach(student => {
            console.log(`Ім'я: ${student.firstName}; Прізвище: ${student.lastName}; Вік: ${student.age}; ID: ${student.id}; Середній бал: ${student.averageGrade}`);
            })
        }
    }
                
    displayOne (id) {
        const student = this.students.find(student => student.id === id);
        if (!student) {
            console.log('Такого студента немає у списку');
        } else {
            const studentIndex = this.students.indexOf(student);
            const studentObj = this.students[studentIndex];
            console.log(`Ім'я: ${studentObj.firstName}; Прізвище: ${studentObj.lastName}; Вік: ${studentObj.age}; ID: ${studentObj.id}; Середній бал: ${studentObj.averageGrade}`)
        }
    }
} 
const group = new GroupOfStudents();
group.add('Олександр', 'Прокопенко', 21, 1, 9);
group.add('Катерина', 'Богуш', 19, 2, 10);
group.add('Олег', 'Кравченко', 20, 3, 8);

group.displayList();

console.log('One student:')
group.displayOne(2)


