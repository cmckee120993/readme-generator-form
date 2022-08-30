// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
  { name: 'Title',
  message: 'What is the title of your project?',
  type: 'input' 
},

{ name: 'Desciption',
message: 'Write a description for your project.',
type: 'input'
},

{ name: 'Contents',
message: 'Which of the following will be included in your README?',
type: 'checkbox',
choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Test Instructions']
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
