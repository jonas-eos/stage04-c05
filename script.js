const firstNumber = readNumbers("Insert the first number:");
const secondNumber = readNumbers("Insert the second number:");

const sum = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const mod = firstNumber % secondNumber;

const isPair = checkIfSumIsPair(firstNumber, secondNumber);
const numbersIsEqual = checkIfBothNumberIsEqual(firstNumber, secondNumber);

showCalculatorResult("sum", sum);
showCalculatorResult("subtraction", subtraction);
showCalculatorResult("multiplication", multiplication);
showCalculatorResult("division", division);
showCalculatorResult("mod", mod);
showCalculatorResult("mod", mod);
alert(`The sum of both numbers is ${isPair}: ${sum}`);
alert(`Both numbers are ${numbersIsEqual}`);

function readNumbers(pText) {
  let number = prompt(pText);
  number = Number(number);

  return number;
}

function checkIfSumIsPair(pFirstNumber, pSecondNumber) {
  const calculation = (pFirstNumber + pSecondNumber) % 2;
  const isPair = calculation === 0 ? "pair" : "odd";

  return isPair;
}

function checkIfBothNumberIsEqual(pFirstNumber, pSecondNumber) {
  const isEqual = pFirstNumber === pSecondNumber ? "equal": "diferent";

  return isEqual;
}

function showCalculatorResult(pOperation, pNumber) {
  alert(`The ${pOperation} of both numbers are: ${pNumber}`);
}
