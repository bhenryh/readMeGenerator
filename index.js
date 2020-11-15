const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions.',
    },
    {
        type: 'input',
        name: 'uses',
        message: 'Describe how to use this application.',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Choose the type of license to apply to this application.',
        choices: ['MIT license', 'Apache License 2.0', 'GPLv3', 'Creative Commons'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to this application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the cases for testing this application?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter the link to your gitHub repo.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
]);

const generateREADME = (answers) =>
`# ${answers.title}
    
### Created by ${answers.name}

[![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)]
    
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
    * ${answers.description}

## Installation
    * ${answers.install}

## Usage
    * ${answers.uses}

## License
    * ${answers.license}

## Contributions
    * ${answers.contribute}

## Tests
    * ${answers.test}

## Questions
### If you have any questions, please contact me through gitHub or email.
    * Github link: ${answers.gitHub}
    * Email: ${answers.email}`

promptUser()
.then((answers) => writeFileAsync('output/README.md', generateREADME(answers)))
.then(() => console.log('Sucessfully wrote to README.md'))
.catch((err) => console.error(err));







