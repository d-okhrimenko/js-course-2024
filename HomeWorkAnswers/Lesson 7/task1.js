class Student {
	constructor(firstName, lastName, age, id, averageScore) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.id = id;
		this.averageScore = averageScore;
	}
}

class GroupOfStudents {
	constructor() {
		this.students = [];
	}

	addStudent(firstName, lastName, age, id, averageScore) {
		const newStudent = new Student(firstName, lastName, age, id, averageScore);
		this.students.push(newStudent);
		console.log(`Студент ${firstName} ${lastName} доданий до групи.`);
	}

	removeStudent(id) {
		const index = this.students.findIndex(student => student.id === id);
		if (index !== -1) {
			const removedStudent = this.students.splice(index, 1);
			console.log(`Студент ${removedStudent[0].firstName} ${removedStudent[0].lastName} видалений з групи.`);
		}
	}

	displayStudents() {
		this.students.forEach(student => {
			console.log(`Ім'я: ${student.firstName}, прізвище: ${student.lastName}, вік: ${student.age}, id: ${student.id}, середній бал: ${student.averageScore}`);
		});
	}

	searchStudentById(id) {
		const student = this.students.find(student => student.id === id);
		if (student) {
			console.log(`Студент ${student.firstName} ${student.lastName}, вік: ${student.age}, id: ${student.id}, середній бал: ${student.averageScore}.`);
		}
	}
}

const group = new GroupOfStudents();
group.addStudent('Іван', 'Іванов', 18, '1', 4.9);
group.addStudent('Василь', 'Василенко', 19, '2', 4.8);
group.displayStudents();
group.searchStudentById('1');
group.removeStudent('2');
group.displayStudents();