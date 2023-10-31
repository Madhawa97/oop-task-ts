interface User {
    name: string;
    age: number;
    displayInfo(): void;
}

class Student implements User {
    name: string;
    age: number;
    grade: number;

    constructor(name: string, age: number, grade: number) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Student Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

class Teacher implements User {
    name: string;
    age: number;
    subject: string;

    constructor(name: string, age: number, subject: string) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    displayInfo() {
        console.log(`Teacher Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
    }
}

let student = new Student('John Doe', 16, 10);
student.displayInfo();

let teacher = new Teacher('Jane Smith', 30, 'Mathematics');
teacher.displayInfo();
