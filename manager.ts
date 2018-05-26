import Employee from './employee'  
import Worker from "./worker"

class Manager extends Employee{
    public subordinates : Array<Employee> = new Array<Employee>()
    constructor(firstName: string, lastName: string, department: string, salary: number){
   super(firstName, lastName, department, salary)  
    }

    greeting(){
        console.log("Hi, I’m " +this.firstName +  " and I manage the " + this.department +  "department")
    }

    getNewEmployee(subordinate: Employee){
        this.subordinates.push(subordinate)
    }
        
    fireSubordinates(){
        for (let i = 0; i < this.subordinates.length; i++) {
            console.log('sorry '+ this.subordinates[i].firstName  + ', you are fired');   
        }
    }
}

export default Manager;