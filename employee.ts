import Manager from "./manager"
import Worker from "./worker"

class Employee {

    public firstName: string;
    public lastName: string;
    public manager? : Manager;
    public department: string;
    protected salary: number; // not allowed outside of the classw.
    constructor(firstName: string, lastName: string, department: string, salary: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.salary = salary;
    }
    greeting(): void {
        console.log("im an employee with the name " + this.firstName)
    }
}


export default Employee;