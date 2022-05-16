const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerCard = require('./src/managerCard');
const engineerCard = require('./src/engineerCard');
const internCard = require('./src/internCard');
const body = require('./src/body');
const employeeDb = [];

//Array of questions for employees
const engineerQuestions = 
[
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's github user name?",
    },
]

const internQuestions = 
[
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the Intern's school name?",
    },
]

const managerQuestions = 
[
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?",
    },
]

function init() {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeDb.push(manager);
        addEmployee();
    })
};
function menu () {
    inquirer.prompt({
        type: 'list',
        name: 'choices',
        message: 'Choose one of the following employee types.',
        choices: ['Engineer', 'Intern']
    })
    .then (answer => {
        if(answer.choices === 'Engineer') {
            addEngineer();
        }
        else {
            addIntern();
        }
    })
};

function addEmployee() {
    inquirer.prompt({
        type: 'confirm',
        name: 'addMore',
        message: "Would you like to add another employee?"
    })
    .then(answer => {
        if(answer.addMore === true) {
            menu()
        }
        else {
            console.log(employeeDb);
            generateHtml();
        }
    })  
    
};

function generateHtml() {
    let cards = '';
    for(let i=0; i<employeeDb.length; i++) {
        if(employeeDb[i].getRole()==='Manager'){
            cards = cards + managerCard(employeeDb[i])
        }
        if(employeeDb[i].getRole()==='Engineer'){
            cards = cards + engineerCard(employeeDb[i])
        }
        if(employeeDb[i].getRole()==='Intern'){
            cards = cards + internCard(employeeDb[i])
        }
    }
    fs.writeFileSync('./dist/team.html', body(cards))
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answer => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        employeeDb.push(engineer);
        addEmployee();
    })
};

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(answer => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        employeeDb.push(intern);
        addEmployee();
    })
};

init();

