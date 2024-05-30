#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Asking Questions from Users Through Inquirer.
//Step 1:
const answers = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    { type: "list",
        name: "operator",
        message: "Select One Operator to perform Operations",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Conditional Statement of (If Else):
if (answers.operator === "Addition") {
    console.log(chalk.yellow(answers.numberOne + answers.numberTwo));
}
else if (answers.operator === "Subtraction") {
    console.log(chalk.blue(answers.numberOne - answers.numberTwo));
}
else if (answers.operator === "Multiplication") {
    console.log(chalk.red(answers.numberOne * answers.numberTwo));
}
else if (answers.operator === "Division") {
    console.log(chalk.greenBright(answers.numberOne / answers.numberTwo));
}
else {
    console.log("Invalid operator");
}
