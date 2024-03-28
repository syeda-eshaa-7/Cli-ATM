#!/usr/bin/env node
import inquirer from "inquirer";
let balance = 100000;
let myPin = 22334;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin"
    }
]);
if (answer.pin === myPin) {
    console.log("correct pin code");
}
else {
    console.log("incorract pin!");
}
let oprationAns = await inquirer.prompt([
    {
        name: "transaction",
        type: "list",
        choices: ["Withdraw", "Fast Cash", "Bill Payment", "Deposit", "Chack Balance"]
    }
]);
if (oprationAns.transaction === "Withdraw") {
    let ammountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: `Selact the ammount (current balance is ${balance})`
        }
    ]);
    balance -= ammountAns.amount;
    console.log(`the remaning ammount is ${balance}`);
}
if (oprationAns.transaction === "Fast Cash") {
    let ammountAns = await inquirer.prompt([
        {
            name: "amount",
            message: `Selact the ammount (current balance is ${balance})`,
            type: "list",
            choices: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000]
        }
    ]);
    balance -= ammountAns.amount;
    console.log(`the remaning ammount is ${balance}`);
}
if (oprationAns.transaction === "Bill Payment") {
    let ammountBill = await inquirer.prompt([
        {
            name: "billpay",
            message: `Selact the ammount (current balance is ${balance})`,
            type: "number",
        }
    ]);
    balance -= ammountBill.billpay;
    console.log(`your bill has been payed and this is ${balance} tha remaning amount `);
}
if (oprationAns.transaction === "Deposit") {
    let Deposit = await inquirer.prompt([
        {
            name: "diposit",
            message: `Selact the ammount (current balance is ${balance})`,
            type: "number"
        },
    ]);
    balance -= Deposit.diposit;
    console.log(`the remaning amount is ${balance}`);
}
else if (oprationAns.transaction === "Chack Balance") {
    console.log(`your balance is ${balance}`);
}
