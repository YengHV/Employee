// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

//create Manager class and *extends* (keyword) Employee class
class Manager extends Employee {
  // constructor contains all parameters of parent, and a new one, officeNumber
  constructor(name, id, email, officeNumber) {
    // Here, it calls parent class' constructor with
    // with sally's name, id, email, and office number
    // super only contains the parameters contained in parent object
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

// next two lines create var named sally, 
// and invoke constructor function and methods in Manager class
// new Manager constructor function takes all four parameters, (including officeNumber)
let sally = new Manager("sally", 102, "sally@fakemail.com", 20);
console.log(Manager);

//export Manager class
module.exports = Manager;