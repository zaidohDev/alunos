class Student{
    fullName: string;
    constructor(public firstName, public lastName){
        this.fullName =firstName + '' +lastName;
    }
}

interface IPerson{
    firstName: string;
    lastName: string;
}

function greeter(person: IPerson) {
    return "Hello, " + person;
}

var user = new Student("Daniel","de Almeida");

console.log(greeter(user));