"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(firstName, lastName, companyName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
    }
    static getFullName(firstName, lastName) {
        let fullName = (firstName + ' ' + lastName);
        return fullName;
    }
    greeting() {
        console.log('Hi, I’m ' + this.firstName + ' ' + this.lastName + ' and I’m a customer');
    }
}
exports.default = Customer;
