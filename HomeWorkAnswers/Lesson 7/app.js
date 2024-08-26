class Student {
	constructor(firstName, lastName, age, id, avgGrade) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.id = id;
		this.avgGrade = avgGrade;
	}
	getInfo() {
		return `ID: ${this.id}, Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Avg Grade: ${this.avgGrade}`;
	}
}

class StudentGroup {
	constructor() {
		this.students = [];
	}

	addStudent(student) {
		this.students.push(student);
	}

	removeStudent(id) {
		this.students = this.students.filter((student) => student.id !== id);
	}

	findStudentById(id) {
		const student = this.students.find((student) => student.id === id);
		if (student) {
			return student.getInfo();
		} else {
			return `Student with ID: ${id} not found.`;
		}
	}

	addStudentViaPrompt() {
		const firstName = prompt("Enter first name:");
		const lastName = prompt('Enter last name:');
		const age = parseInt(prompt('Enter age:'), 10);
		const id = parseInt(
			prompt('Enter ID:'),
			10
		);
		const avgGrade = parseFloat(prompt('Enter everage grade:'));

		if (
			!firstName ||
			!lastName ||
			isNaN(age) ||
			isNaN(id) ||
			isNaN(avgGrade)
		) {
			console.log('Wrong data. Try once more.');
		} else {
			this.addStudent(
				new Student(firstName, lastName, age, id, avgGrade)
			);
			console.log('Student is added.');
		}
	}
}


const group = new StudentGroup();
group.addStudentViaPrompt();

group.addStudent(new Student("John", "Doe", 20, 1, 3.5));
group.addStudent(new Student("Jane", "Smith", 22, 2, 3.8));
group.addStudent(new Student("Alice", "Johnson", 21, 3, 4.0));

let uiContrller = {
    display: function (message) {
        console.log(message)
    },
	displayList: function (list, messageTemplateFn) {
		list.forEach((x) => this.display(messageTemplateFn(x)));
	},
};


uiContrller.displayList(group.students, student => student.getInfo()
)




console.log("Find student by ID 2:");
console.log(group.findStudentById(2));


group.removeStudent(1);

