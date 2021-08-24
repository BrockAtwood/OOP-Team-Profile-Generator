//create class for manager from w3schools example
const Employee = require("./Employee");
//build on the employee question js

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getofficeNumber() {
    return this.officeNumber;
  }

  //needs to override employee getRole
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
