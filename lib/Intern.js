//create class for intern from w3schools example
const Employee = require("./Employee");
//build on employee question js

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  //needs to override employee getRole
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
