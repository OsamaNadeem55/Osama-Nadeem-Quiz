#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold.italic.underline("Welcome to the quiz!"));
console.log(chalk.blueBright.bold("\nYou need maximum 5 marks to pass the quiz"));
let name = [];
let points = 0;
async function runQuiz() {
    let username = await inquirer.prompt([
        {
            name: "input",
            type: "input",
            message: "Enter your name",
        }
    ]);
    if (username.input) {
        name.push(username.input);
    }
    else {
        console.log("Enter your name");
    }
    // Question 1
    let q1 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Who is the current Prime Minister of Pakistan?",
            choices: ["Imran Khan", "Shahbaz Sharif", "Nawaz Sharif", "Asif Ali Zardari"],
        }
    ]);
    if (q1.answer === "Shahbaz Sharif") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 2
    let q2 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Typescript is superset of?",
            choices: ["C++", "JavaScript", "Python", "Java"],
        }
    ]);
    if (q2.answer === "JavaScript") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 3
    let q3 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Which command is used to make package.json file?",
            choices: ["node index.js", "npm i inquirer", "npm init -y", "tsc --init"],
        }
    ]);
    if (q3.answer === "npm init -y") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 4
    let q4 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Which keyword is used to declare a variable with a specific type in TypeScript?",
            choices: ["var", "let", "const", "All of the above"],
        }
    ]);
    if (q4.answer === "All of the above") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 5
    let q5 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Which of the following is NOT a valid TypeScript type?",
            choices: ["string", "number", "boolean", "variant"],
        }
    ]);
    if (q5.answer === "variant") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 6
    let q6 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Which TypeScript feature helps in defining reusable types?",
            choices: ["Functions", "Arrays", "Interfaces", "Classes"],
        }
    ]);
    if (q6.answer === "Interfaces") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 7
    let q7 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "What does TypeScript offer over plain JavaScript?",
            choices: ["Static typing", "Dynamic typing", "Both", "None of the above"],
        }
    ]);
    if (q7.answer === "Static typing") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 8
    let q8 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Which command is used to compile TypeScript files into JavaScript?",
            choices: ["npm", "jscompile", "node", "tsc"],
        }
    ]);
    if (q8.answer === "tsc") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 9
    let q9 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Which keyword in TypeScript is used to define a function that does not return any value?",
            choices: ["null", "undefined", "void", "none"],
        }
    ]);
    if (q9.answer === "void") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    // Question 10
    let q10 = await inquirer.prompt([
        {
            name: "answer",
            type: "list",
            message: "Which TypeScript feature allows you to define a type that can hold multiple types of values?",
            choices: ["Any types", "Union types", "Conditional types", "Intersection types"],
        }
    ]);
    if (q10.answer === "Union types") {
        console.log(chalk.green("Correct Answer"), points++);
    }
    else {
        console.log(chalk.red("Wrong Answer"));
    }
    console.log(chalk.yellow.bold(`\n${name[0]} scored ${points} out of 10.`));
    if (points >= 5) {
        console.log(chalk.green.bold("Congratulations! You passed the quiz."));
    }
    else {
        console.log(chalk.red.bold("Sorry! You did not pass the quiz."));
    }
}
runQuiz();
