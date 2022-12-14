const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
      managerOfficeNumber,
    );
    team.push(manager);
    createTeam()
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
      message: "what is managers id?",
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


function createEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What engineer's name?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "what is engineers id?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "what is engineers email?",
    },
    {
      type: "input",
      name: "github",
      message: "what is the engineers github username?",
    },
  ]);
}
function createIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What interns name?",
    },
    {
      type: "input",
      name: "internId",
      message: "what is interns id?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "what is interns email?",
    },
    {
      type: "input",
      name: "school",
      message: "what is interns school?",
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
        createEngineer().then(answers => {
          const {
            engineerName,
            engineerId,
            engineerEmail,
            github,
          } = answers;
          const engineer = new Engineer(
            engineerName,
            engineerId,
            engineerEmail,
            github,
          );
          team.push(engineer);
          createTeam();
          
        })
          break;
        case "Intern":
          createIntern().then(answers => {
            const {
              internName,
              internId,
              internEmail,
              school,
            } = answers;
            const intern = new Intern(
              internName,
              internId,
              internEmail,
              school,
            );
            team.push(intern);
            createTeam();
          })
          break;
        default:
          buildTeam();
      }
    });
}
function createHTML(teamArr) {
  let htmlMain = ``;

  teamArr.forEach(teamMember => {
    if (teamMember.getRole() === "Manager") {
      htmlMain = htmlMain + templates.managerTemplate(teamMember);
    }
    if (teamMember.getRole() === "Engineer") {
      htmlMain = htmlMain + templates.engineerTemplate(teamMember);
    }
    if (teamMember.getRole() === "Intern") {
      htmlMain = htmlMain + templates.internTemplate(teamMember);
    }
  });
 return htmlMain
}
function buildTeam() {
  fs.writeFileSync(PATH, createHTML(team), 'utf-8');
}
main();
