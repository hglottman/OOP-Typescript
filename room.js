"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Room {
    constructor() {
        this.occupants = new Array();
    }
    addOccupant(newOccupant) {
        this.occupants.push(newOccupant);
        // console.log(this.occupants)
    }
    emptyRoom() {
        var currentOccupants = this.occupants;
        this.occupants.forEach(() => {
            this.occupants.pop();
        });
    }
    removeAnoccupant(occupantToRemove) {
        let checkIfFound = false;
        for (let i = 0; i < this.occupants.length; i++) {
            if (occupantToRemove.firstName == this.occupants[i].firstName && occupantToRemove.lastName == this.occupants[i].lastName) {
                this.occupants.splice(i, 1);
                checkIfFound = true;
                break;
            }
        }
        if (checkIfFound != true) {
            console.log("there is no one here named " + occupantToRemove.firstName + " " + occupantToRemove.lastName);
        }
    }
}
exports.default = Room;
