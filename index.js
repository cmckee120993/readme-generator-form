// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [

{name: 'username',
message: 'What is your GitHub username?',
type: 'input'},

{name: 'email',
message: 'What is your email?',
type: 'input'},

{name: 'title',
message: 'What is the title of your project?',
type: 'input' },

{ name: 'description',
message: 'Write a short description for your project.',
type: 'input'},

{ name: 'TOC',
message: 'Select "No" for no Table of Contents. Otherwise, select what elements you will be including in your README.',
type: 'checkbox',
choices: ['No', 'Installation', 'Usage', 'Contribute', 'Tests']},

{name: 'license',
message: 'What kind of license should your project have?',
type: 'list',
choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3', 'None'],},

{name: 'install',
message: 'What command should be run to install dependencies? Type "None" if there is no install command',
type: 'input',
default: 'npm install'},

{name: 'tests',
message: 'What command should be run to run tests? Type "None" if there is no test command.',
type: 'input',
default: 'npm test'},

{name: 'usage',
message: 'What does the user need to know about using the repo?', 
type: 'input'},

{name: 'contribute',
message: 'What does the user need to know about contributing to the repo?',
type: 'input'}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(), '/dist', fileName), data, function(err) {
    if (err) {
      return err;
    } else {
      console.log('Your README has been succesfully generated.')
    };
  })
};

// TODO: Create a function to initialize app
async function init() {
  const userResponses = await inquirer.prompt(questions);

  const markdown = generateMarkdown(userResponses);
  
  await writeToFile('README.md', markdown)
};


init();
