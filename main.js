"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("./employee"));
const manager_1 = __importDefault(require("./manager"));
const customer_1 = __importDefault(require("./customer"));
const room_1 = __importDefault(require("./room"));
let tzahov = new manager_1.default('Tzahov', 'Doron', 'Finance', 400);
// console.log(tzahov.greeting());
let givon = new manager_1.default('Givon', 'Tal', 'HR', 380);
// console.log(givon.greeting());
let shimshon = new employee_1.default('Shimshon', 'Rozen', 'Finance', 280);
// console.log(shimshon.greeting());
let tal = new employee_1.default('Tal', 'Zahav', 'HR', 230);
// console.log(tal.greeting());
let shoshana = new customer_1.default('Shoshana', 'Mosh', 'IBM');
// console.log(shoshana.greeting());
let rachel = new customer_1.default('Rachel', 'Ziv', 'Microsoft');
// console.log(rachel.greeting());
var workerArray = Array();
workerArray.push(tzahov, givon, shimshon, tal, shoshana, rachel);
for (let i = 0; i < workerArray.length; i++) {
    // console.log(workerArray[i].firstName)
    workerArray[i].greeting();
}
var customerRoom = new room_1.default();
customerRoom.addOccupant(shoshana);
customerRoom.addOccupant(rachel);
console.log("current room status of cutomers");
console.log(customerRoom.occupants);
customerRoom.removeAnoccupant(shoshana);
console.log(customerRoom.occupants);
customerRoom.emptyRoom();
console.log(customerRoom.occupants);
