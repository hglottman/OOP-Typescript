import Worker from "./worker"

class Customer {

public firstName: string;
public lastName: string;
public companyName: string;

constructor(firstName: string, lastName: string, companyName: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.companyName = companyName;
}

public static getFullName(firstName: string, lastName: string): string{
    let fullName = (firstName + ' ' + lastName);
    return fullName;
}

greeting(){
    console.log('Hi, I’m ' + this.firstName + ' ' + this.lastName + ' and I’m a customer')
}

}

export default Customer;