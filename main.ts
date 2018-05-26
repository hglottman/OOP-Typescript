import Employee from './employee'  
import Manager from './manager'
import Customer from './customer'
import Worker from "./worker"
import Room from "./room"



let tzahov = new Manager ('Tzahov', 'Doron', 'Finance', 400);
// console.log(tzahov.greeting());

let givon =  new Manager ('Givon', 'Tal', 'HR', 380);
// console.log(givon.greeting());

let shimshon = new Employee ('Shimshon', 'Rozen', 'Finance', 280);
// console.log(shimshon.greeting());

let tal = new Employee ('Tal', 'Zahav', 'HR', 230);
// console.log(tal.greeting());

let shoshana = new Customer ('Shoshana', 'Mosh','IBM');
// console.log(shoshana.greeting());

let rachel = new Customer ('Rachel', 'Ziv', 'Microsoft');
// console.log(rachel.greeting());


var workerArray = Array<Worker>()
workerArray.push(tzahov, givon, shimshon, tal, shoshana, rachel);

for (let i = 0; i < workerArray.length; i++) {
    // console.log(workerArray[i].firstName)
    workerArray[i].greeting();   
}

var customerRoom = new Room <Customer>();

customerRoom.addOccupant(shoshana);
customerRoom.addOccupant(rachel);
console.log("current room status of cutomers")
console.log(customerRoom.occupants)


customerRoom.removeAnoccupant(shoshana);
console.log(customerRoom.occupants)
customerRoom.emptyRoom();
console.log(customerRoom.occupants);


