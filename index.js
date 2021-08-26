const inquirer = require("inquirer");
const fs = require("fs");

//test comment

//add employee type const requires from lib in local
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//where the responses are sent and rendered
const htmlGENERATOR = require("./lib/htmlGENERATOR");

//NEED TO ADD ROLE FOR ALL TYPES ???
//umbrella question check with Ben Monday

//no enployee questions

//manager questions
const employeeQuestionsArray = [];

//starter prompt
inquirer
  .prompt([
    {
      type: "list",
      name: "teamMember",
      message: "Which type of Team Member would you like to add next?",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I do not want to add anymore Team Members",
      ],
    },
  ])
  .then((response) =>
    response.choices === "Intern"
      ? internQuestions()
      : response.teamMember === "Manager"
      ? managerQuestions()
      : response.teamMember === "Engineer"
      ? engineerQuestions()
      : response.teamMember === "I do not want to add anymore Team Members"
      ? htmlGENERATOR()
      : console.log("You're Done!")
  );

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your Manager's Name?",
      },

      {
        type: "input",
        name: "managerId",
        message: "What is your Team Manager's ID?",
      },

      {
        type: "input",
        name: "managerEmail",
        message: "What is your Team Manager's Email?",
      },

      {
        type: "input",
        name: "managerofficeNumber",
        message: "What is your Team Manager's Office Number?",
      },
      {
        type: "list",
        name: "teamMember",
        message: "Which type of Team Member would you like to add next?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I do not want to add anymore Team Members",
        ],
      },
    ])
    .then((responses) => {
      const manager = new Manager(
        responses.managerName,
        responses.managerId,
        responses.managerEmail,
        responses.managerofficeNumber
      );
      employeeQuestionsArray.push(manager);
      teamMemberAnswer(responses.teamMember);
    })
    .catch((error) => console.log(error));
}
//engineer questions

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "EngineerName",
        message: "What is your Engineer's name?",
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is your Engineer's ID?",
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is your Engineer's Email?",
      },

      {
        type: "input",
        name: "engineerGitHub",
        message: "What is your Engineer's GitHib Username?",
      },
      {
        type: "list",
        name: "teamMember",
        message: "Which type of Team Member would you like to add next?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I do not want to add anymore Team Members",
        ],
      },
    ])
    .then((responses) => {
      const engineer = new Engineer(
        responses.engineerName,
        responses.engineerId,
        responses.engineerEmail,
        responses.engineerGitHub
      );
      employeeQuestionsArray.push(engineer);
      teamMemberAnswer(responses.teamMember);
    })
    .catch((error) => console.log(error));
}
//intern questions

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your Intern's Name?",
      },

      {
        type: "input",
        name: "internId",
        message: "What is your Intern's ID?",
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is your Intern's Email?",
      },

      {
        type: "input",
        name: "internSchool",
        message: "What is your Intern's school?",
      },
      {
        type: "list",
        name: "teamMember",
        message: "Which type of Team Member would you like to add next?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I do not want to add anymore Team Members",
        ],
      },
    ])
    .then((responses) => {
      const intern = new Intern(
        responses.internName,
        responses.internId,
        responses.internEmail,
        responses.internSchool
      );
      employeeQuestionsArray.push(intern);
      teamMemberAnswer(responses.teamMember);
    })
    .catch((error) => console.log(error));
}

// function teamMemberAnswer(response) {
//   if (response === "Intern") {
//     internQuestions();
//   } else if (response === "Manager") {
//     managerQuestions();
//   } else if (response === "Engineer") {
//     engineerQuestions();
//   } else if (response === "I do not want to add anymore Team Members") {
//     console.log("Done");
//   }
// }
//adding boilerplate stuff from previous homework for outlining

// TODO: Create a function to write GENERATED-README file
// function writeToFile(fileName, data) {
//   fs.writeFile("GENERATED-README.md", data, (err) => {
//     err
//       ? console.log(err)
//       : console.log("GENERATED-README.md file was created and written!");
//   });
// }

// // TODO: Create a function to initialize app
// function init() {
//   return inquirer.prompt(questions).then((data) => {
//     writeToFile("GENERATED-README.md", generateMarkdown(data));
//   });
// }

// // Function call to initialize app
// init()
