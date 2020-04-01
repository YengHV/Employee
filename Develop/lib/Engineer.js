// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

//create Engineer class and *extends* (keyword) Employee class
class Engineer extends Employee {
  // constructor contains all parameters of parent, and a new one, officeNumber
  constructor(name, id, email, github) {
    // Here, it calls parent class' constructor with
    // with sally's name, id, email, and office number
    // super only contains the parameters contained in parent object
    super(name, id, email);
    this.github = github;
  }
  
  getgithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

// next two lines create var named sally, 
// and invoke constructor function and methods in Engineer class
// new Engineer constructor function takes all four parameters, (including officeNumber)
let elsa = new Engineer("elsa", 102, "elsa@fakemail.com", "winterstorm");
console.log(elsa);

//export Engineer class
module.exports = Engineer;