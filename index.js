#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const promise = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function rainbowlights() {
    const animationRainbow = chalkAnimation.rainbow("let's Calaculate the values!");
    await promise();
    animationRainbow.stop();
    console.log(chalk.cyan ` _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`);
}
await rainbowlights();
async function askQuestion() {
    const answers = await inquirer.prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: chalk.red("which operation you want to perform? \n "),
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Modulus",
                "Exponent",
            ],
        },
        {
            type: "number",
            name: "Operand1",
            message: "Enter 1st Value  :",
        },
        {
            type: "number",
            name: "Operand2",
            message: "Enter 2nd Value :",
        },
    ]);
    if (answers.operator == "Addition") {
        console.log(`${answers.Operand1} + ${answers.Operand2} = ${answers.Operand1 + answers.Operand2}`);
    }
    if (answers.operator == "Subtraction") {
        console.log(`${answers.Operand1} - ${answers.Operand2} = ${answers.Operand1 - answers.Operand2}`);
    }
    if (answers.operator == "Multiplication") {
        console.log(`${answers.Operand1} * ${answers.Operand2} = ${answers.Operand1 * answers.Operand2}`);
    }
    if (answers.operator == "Division") {
        console.log(`
         ${answers.Operand1} / ${answers.Operand2} = ${answers.Operand1 / answers.Operand2}`);
    }
    if (answers.operator == "Modulus") {
        console.log(`${answers.Operand1} % ${answers.Operand2} = ${answers.Operand1 % answers.Operand2}`);
    }
    if (answers.operator == "Exponent") {
        console.log(`  The power of (${answers.Operand1} raise to the power  ${answers.Operand2} = ${answers.Operand1 ** answers.Operand2})`);
    }
}
async function queForReUse() {
    do {
        await askQuestion();
        var askingUser = await inquirer.prompt({
            type: "input",
            name: "re-calculate",
            message: "Do you want to calculate more values? Enter y or n :",
        });
    } while (askingUser["re-calculate"] === "y" ||
        askingUser["re-calculate"] === "Y" ||
        askingUser["re-calculate"] === "yes" ||
        askingUser["re-calculate"] === "Yes");
}
queForReUse();
let y = "saad";
