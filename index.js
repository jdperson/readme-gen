const fs = require("fs");
const inquirer = require("inquirer");

async function main() {
    console.log("Welcome to README Generator!\n");

    const info = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title: "
        },
        {
            type: "input",
            name: "description",
            message: "Description:\n "
        },
        {
            type: "input",
            name: "install",
            message: "Installation instructions:\n"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage information:\n"
        },
        {
            type: "input",
            name: "contrib",
            message: "Contribution guidelines:\n"
        },
        {
            type: "input",
            name: "test",
            message: "Test instructions:\n"
        },
        {
            type: "list",
            name: "liscense",
            message: "Choose a liscense:",
            choices: ["MIT", "Apache-2.0", "GPL-3.0", "ISC", "Unliscense"]
        },
        {
            type: "input",
            name: "username",
            message: "Your Github Username: "
        },
        {
            type: "input",
            name: "email",
            message: "Your contact email: "
        }
    ]);

    var content = `# ${info.title}
![Liscense](https://img.shields.io/badge/Liscense-${encodeURIComponent(info.liscense)}-green)

## Description
${info.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Liscense](#liscense)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${info.install}

## Usage
${info.usage}

## Liscense
This application is covered under the ${info.liscense} liscense.

## Contributing
${info.contrib}

## Tests
${info.test}

## Questions
If you have any questions, you can find me on GitHub [here](https://github.com/${info.username})
or by email at ${info.email}`


    fs.writeFile("./output/README.md", content, (err) => {
        err ? console.log(err) : console.log("README.md written successfully")
    })
}
    
main();
