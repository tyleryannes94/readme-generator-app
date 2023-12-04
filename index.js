// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require ("inquirer");
const generateMarkdown = require ("./utils/generateMarkdown");
const path = require ("path");


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
        name: 'contributing',
        message: 'What inputs are required for the app?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do you run or test this app?',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('You have successfully created a README.md file for your app!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      const fileName = `README_${answers.title}.md`;

        fs.writeFile(fileName, markdown, (err) => {
        if (err) {
            console.error('Error creating file:', err);
        } else {
            console.log(`Successfully created ${fileName}`);
        }
        });
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Function call to initialize app
init();
