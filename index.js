const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");

const templates = require("./src/templates");

const DIST = path.resolve(__dirname, "dist");
const PATH = path.join(DIST, "team.html");

const team = [];

function main() {
  createManager().then((answers) => {
    const {
      mangerName,
      managerId,
      managerEmail,
      managerOfficeNumber,
    } = answers;
    const manager = new Manager(
      mangerName,
      managerId,
      managerEmail,
      managerOfficeNumber
    );
    team.push(manager);
  });
}

function createManager() {
  console.log("Lets start building your team");
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is team manager name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "what is managers name?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "what is managers email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "what is managers Office number?",
    },
  ]);
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberChoice",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Ive finished my team"],
      },
    ])
    .then((answer) => {
      switch (answer.teamMemberChoice) {
        case "Engineer":
          break;
        case "Intern":
          break;
        default:
          buildTeam();
      }
    });
}
function createHTML(teamArr) {
  const htmlMain = ``;

  teamArr.forEach((teamMember) => {
    if (teamMember.getRole() === "Manager") {
      htmlMain = htmlMain + templates.managerTemplate(teamMember);
    }
  });
}
function buildTeam() {
  fs.writeFileSync(PATH, createHTML(team), 'uta-8');
}
main();
