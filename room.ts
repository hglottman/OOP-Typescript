interface Name {
    firstName: string;
    lastName: string;
}

class Room<T extends Name> {
        public occupants: Array<T> = new Array<T>();
    
        addOccupant(newOccupant: T) {
            this.occupants.push(newOccupant);
            // console.log(this.occupants)
        }

        emptyRoom(): void {  
            var currentOccupants = this.occupants;
   
               this.occupants.forEach(() => {
                   this.occupants.pop()
               })       
           }

           removeAnoccupant<T extends Name> (occupantToRemove: T){
            let checkIfFound: Boolean = false
            for (let i = 0; i < this.occupants.length; i++) {
                if(occupantToRemove.firstName == this.occupants[i].firstName && occupantToRemove.lastName == this.occupants[i].lastName){
                this.occupants.splice(i, 1)
                checkIfFound = true;
                break;     
            }  
            }
            if(checkIfFound != true){
                console.log("there is no one here named " + occupantToRemove.firstName + " " + occupantToRemove.lastName) 
            }
              
        }

}

export default Room;
