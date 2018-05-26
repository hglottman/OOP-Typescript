"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("./employee"));
class Manager extends employee_1.default {
    constructor(firstName, lastName, department, salary) {
        super(firstName, lastName, department, salary);
        this.subordinates = new Array();
    }
    greeting() {
        console.log("Hi, I’m " + this.firstName + " and I manage the " + this.department + "department");
    }
    getNewEmployee(subordinate) {
        this.subordinates.push(subordinate);
    }
    fireSubordinates() {
        for (let i = 0; i < this.subordinates.length; i++) {
            console.log('sorry ' + this.subordinates[i].firstName + ', you are fired');
        }
    }
}
exports.default = Manager;
