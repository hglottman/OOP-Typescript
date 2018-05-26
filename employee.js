"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(firstName, lastName, department, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.salary = salary;
    }
    greeting() {
        console.log("im an employee with the name " + this.firstName);
    }
}
exports.default = Employee;
