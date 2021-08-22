const inquirer = require("inquirer");
const fs = require("fs");

//NEED TO ADD ROLE FOR ALL TYPES ???
//unbrella question

const kindOfEmployee = [
  {
    type: "input",
    name: "teamMember",
    message: "Which type of Team Member would you like to add next?",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "I do not want to add anymore Team Members",
    ],
  },
];

//employee questions

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Employee's Name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is your Employee's ID?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your Employee's Email?",
  },
];

//manager questions

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Manager's Name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is your Manager's ID?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your Manager's Email?",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "What is your Manager's Office Number?",
  },
];

//engineer questions

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Engineer's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is your Engineer's ID?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your Engineer's Email?",
  },

  {
    type: "input",
    name: "github",
    message: "What is your Engineer's GitHib Username?",
  },
];

//intern questions

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your Intern's Name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is your Intern's ID?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your Intern's Email?",
  },

  {
    type: "input",
    name: "school",
    message: "What is your Intern's school?",
  },
];
