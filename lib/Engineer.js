//create class for engineer from w3schools example
const Employee = require("./Employee");
//build on the employee question js

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }

  getGitHub() {
    return `https://github.com/${this.GitHub}`;
  }

  //needs to override employee getRole
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
