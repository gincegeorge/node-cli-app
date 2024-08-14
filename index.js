#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import figlet from "figlet";

console.log(
    chalk.yellow(figlet.textSync("Node CLI app", { horizontalLayout: "full" }))
);

program.version("1.0.0").description("Node CLI app");

program.action(() => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What's your name?",
            },
            {
                type: "list",
                name: "choice",
                message: "Choose an option:",
                choices: ["Option 1", "Option 2", "Option 3"],
            },
        ])
        .then((result) => {
            const spinner = ora(`Doing ${result.choice}...`).start(); // Start the spinner
            setTimeout(() => {
                spinner.succeed(chalk.green(`Hi, ${result.name} Done!`));
            }, 1500);
        });
});

program.parse(process.argv);

