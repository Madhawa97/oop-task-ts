var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.displayInfo = function () {
        console.log("Student Name: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    Teacher.prototype.displayInfo = function () {
        console.log("Teacher Name: ".concat(this.name, ", Age: ").concat(this.age, ", Subject: ").concat(this.subject));
    };
    return Teacher;
}());
var student = new Student('John Doe', 16, 10);
student.displayInfo();
var teacher = new Teacher('Jane Smith', 30, 'Mathematics');
teacher.displayInfo();
