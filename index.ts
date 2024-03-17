import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "enter first digit",
    type: "number",
    name: "firstnumber",
  },
  {
    message: "enter second digit",
    type: "number",
    name: "secondnumber",
  },
  {
    message: "select one of the operator to perform acrion",
    type: "list",
    name: "operators",
    choices: ["addition", "substraction", "multiplication", "division"],
  },
]);
if (answer.operators === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operators === "substraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operators === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operators === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  ("Please select valid operator");
}
