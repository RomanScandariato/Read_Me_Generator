// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Please select an option',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create Markdown File', 'Exit']
    },
    {
        message: 'What is the title of your Project?',
        name: 'title'
    },
    {
        message: 'Please enter your Project Description',
        name: 'description'
    },
    {
        message: 'Please enter your Installation Instructions',
        name: 'installation'
    },
    {
        message: 'Please enter your Usage Information',
        name: 'usage'
    },
    {
        message: 'Please enter your Contribution Guidelines',
        name: 'contribution'
    },
    {
        message: 'Please enter your Test Instructions',
        name: 'test'
    },
    {
        message: 'Please choose a License',
        name: 'license',
        type: 'list',
        choices: ['MIT', 'BDS 3', 'Apache', 'GNU', 'No License']
    },
    {
        message: 'Please enter your email',
        name: 'email'
    },
    {
        message: 'Please enter your github',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('README file created successfully!');
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('details.md', markdownContent);
    });
}

// Function call to initialize app
init();
