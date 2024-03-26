import inquirer from "inquirer";

interface ansType {
  userId: string;
  PIN: number;
  accountType: string;
  transactionType: string;
  amount: number;
}

const ATM = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "What is your user ID?",
  },
  {
    type: "input",
    name: "PIN",
    message: "What is your PIN?",
  },
  {
    type: "list",
    name: "accountType",
    message: "What is your account type?",
    choices: ["Current", "Savings"],
    when(ATM) {
      return ATM.userId === "admin" && ATM.PIN === 1234;
    },
  },
  {
    type: "list",
    name: "transactionType",
    message: "What is your transaction type?",
    choices: ["fast cash", "withdrawal"],
  },
  {
    type: "input",
    name: "amount",
    message: "How much would you like to withdraw?",
    when(ATM) {
      return ATM.transactionType === "withdrawal";
    },
  },
  {
    type: "list",
    name: "amount",
    choices: ["1000", "2000", "5000", "10000", "20000", "50000", "100000"],
    message: "select the amount you want to withdraw",
  },
]);
const balance = Math.floor(Math.random() * 1000);
const enteredAmount = ATM.amount;
const remaining = balance - enteredAmount;
balance > enteredAmount
  ? console.log(`Transitoin was succesful. Your balance is ${remaining}`)
  : console.log(
      `Your current balance is insuficient. \n Current balance: ${balance} `
    );
