const StudentGroup = require('./script.js'); // шлях до  файлу, де визначено StudentGroup
describe('StudentGroup', () => {
    let studentGroup;

    beforeEach(() => {
        studentGroup = StudentGroup;
    });

    test('should add a student', () => {
        studentGroup.addStudent(1, 'John', 'Doe', 20, 85);
        expect(studentGroup.students.length).toBe(1);
    });

    test('should remove a student by ID', () => {
        studentGroup.addStudent(1, 'John', 'Doe', 20, 85);
        studentGroup.removeStudent(1);
        expect(studentGroup.students.length).toBe(0);
    });

    test('should find a student by ID', () => {
        studentGroup.addStudent(1, 'John', 'Doe', 20, 85);
        const student = studentGroup.findStudentById(1);
        expect(student).toBeDefined();
    });

    test('should return undefined when searching for a non-existent student', () => {
        const student = studentGroup.findStudentById(99);
        expect(student).toBeUndefined();
    });
});
