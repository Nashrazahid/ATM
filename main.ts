#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 100000;
let mypin = 6788;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "enter your pin",
  type: "number",
});
if (pinAnswer.pin === mypin) {
  console.log("correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    mybalance -= amountAns.amount;
    console.log`your remaining balance $ {mybalance}`;
    if (amountAns.amount > mybalance) {
      console.log("insuficient balance!!");
    }
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + mybalance);
  } else if (operationAns.operation === "fast cash") {
    let fastcashAns = await inquirer.prompt([
      {
        name: "fastcash",
        message: "select the amount",
        type: "list",
        choices: [1000, 5000, 10000, 20000],
      },
    ]);
    mybalance -= fastcashAns.fastcash;
    console.log("your remainig balance is:" + mybalance);
  }
} else {
  console.log("incorrect pin code");
}
