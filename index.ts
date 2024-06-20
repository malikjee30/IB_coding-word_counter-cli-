#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(
  chalk.bold.underline.yellowBright(
    "(((((===> WEL COME TO OUR NEW CLI PROJECT OF WORDS COUNTER APP <===)))))\n"
  )
);
let myloop = true;
while(myloop){

const userInput = await inquirer.prompt([
  {
    type: "input",
    name: "para",
    message: chalk.magenta(
      "Enter your paragraph to count letters and words in it!"
    ),
  },
  {
    type: "list",
    name: "ask",
    message: chalk.greenBright("what do you want to count in your paragraph?"),
    choices: [
      "1.Letters",
      "2.Words",
      "3.Both letters & words"
    ]
  },
]);

let {para, ask} = userInput;
if(para.length === 0) emptyInput();
if(ask === "1.Letters") letterFun();
if(ask === "2.Words") wordsFun();
if(ask === "3.Both letters & words") both();

function emptyInput(){
console.log(chalk.cyan(`your input is empty! please try again with a valid input. \n `));

}
function letterFun(){
const lettersWithoutSpaces = para.replace(/\s/g, "");
const letterCount = lettersWithoutSpaces.length;
console.log(chalk.yellowBright(`\nTotal letters in your paragraph are "${letterCount}"`))

}

function wordsFun(){
const wordsArray = para.split(" ");
const wordsCount = wordsArray.length;
console.log(chalk.grey(`\n Total words in your paragraph are "${wordsCount}"`));

}
function both(){
letterFun();
wordsFun();
}
// to control loop

let countMore = await inquirer.prompt({
  type: 'confirm',
  name: 'more',
  message: chalk.greenBright('Do you want to count more'),
  default: false
})
  if(!countMore.more){
    myloop = false;
    console.log(chalk.bold.underline.red(`Thank you for using our letters and words count App!`));
    
  }

}
