#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const msg = "Bht Shubkamnayen";
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
const loadingMsg = async () => {
    const loading = chalkAnimation.radar(`'Loading a game please wait....'`);
    await load();
    loading.stop();
};
async function welcomeMessage(cb) {
    const showMessage = chalkAnimation.rainbow(`"Welcome to Guessing A Nmber Game!!! ${msg}"`);
    await sleep();
    showMessage.stop();
    return cb();
}
// const load = () => new Promise((res, rej) => setTimeout(res, 3000));
welcomeMessage(loadingMsg);
let playerLife = 3;
async function askQue() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    do {playerLife--
        var que = await inquirer
            .prompt([{
                type: "number",
                name: "usr_num",
                message: "Guesss A Number Between 1-10 : ",
                // validate: (answers) => {
                //     if (isNaN(answers)) {
                //         return chalk.redBright("WRONG INPUT!!! Please enter a valid number");
                //     }
                //     return true;
                // }
            }]);
        console.log(que);
        if (randomNumber === que.usr_num) {
            console.log("CONGRATS! You Guessed The Correct NUmber");
        }
        if (randomNumber < que.usr_num) {
            console.log(`"HIGH! ${que.usr_num} Is Higher Than A Correct Number "`);
        }
        if (randomNumber > que.usr_num) {
            console.log(`"LOW! ${que.usr_num}  Is Lower Than A Correct Number "`);
        }
    } while (playerLife > 0 && randomNumber !== que.usr_num);
}
