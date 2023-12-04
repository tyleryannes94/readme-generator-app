// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require ("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this app?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
      },
      {
        type: 'input',
        name: 'contributing tech',
        message: 'What inputs are required for the app?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Are there tests needed for this app?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'ISC', 'No License'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
