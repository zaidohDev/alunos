var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person;
}
var user = new Student("Daniel", "de Almeida");
console.log(greeter(user));
