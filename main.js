#! /usr/bin/env node
import inquirer from 'inquirer';
let myBalance = 50000;
let myPin = 1234;
let pinNumber = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Code",
        type: "number",
    },
]);
if (pinNumber.pin === myPin) {
    console.log("Crrect Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please selsct option ",
            type: "list",
            choices: ["withdraw", "CheckBalance",]
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`Your account Balance is ${myBalance}, You can not withdraw ${amountAns.amount}`);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`You withdraw ${amountAns.amount}`);
            console.log(`. Now,Your remaining Balance is ${myBalance}`);
            console.log("Thanks for using This ATM.");
        }
    }
    else if (operationAns.operation === "CheckBalance") {
        console.log(`Your current Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin code");
}
;
