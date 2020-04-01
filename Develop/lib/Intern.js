// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

//create Intern class and *extends* (keyword) Employee class
class Intern extends Employee {
  // constructor contains all parameters of parent, and a new one, officeNumber
  constructor(name, id, email, school) {
    // Here, it calls parent class' constructor with
    // with ingrid's name, id, email, and school
    // super only contains the parameters contained in parent object
    super(name, id, email);
    this.school = school;
  }
  
  getschool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// next two lines create var named ingrid, 
// and invoke constructor function and methods in Intern class
// new Intern constructor function takes all four parameters, (including officeNumber)
let ingrid = new Intern("ingrid", 109, "ingrid@fakemail.com", "stanford");
console.log(ingrid);

//export Intern class
module.exports = Intern;