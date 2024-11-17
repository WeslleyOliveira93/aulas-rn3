const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function updateResult(originClear = false) {
  result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

function addDigit(digit) {
  if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

  if (restart) {
    currentNumber = digit;
    restart = false;
  } else {
    currentNumber += digit;
  }

  updateResult();
}

function setOperator(newOperator) {
  if (currentNumber) {
    calculate();
    firstOperand = parseFloat(currentNumber.replace(",", "."));
    currentNumber = "";
  }
  operator = newOperator;
}

function calculate() {
  if (operator === null || firstOperand === null) return;
  let secondOperand = parseFloat(currentNumber.replace(",", "."));
  let resultValue;

  switch (operator) {
    case "+":
      resultValue = firstOperand + secondOperand;
      break;
    case "-":
      resultValue = firstOperand - secondOperand;
      break;
    case "×":
      resultValue = firstOperand * secondOperand;
      break;
    case "÷":
      resultValue = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  currentNumber = parseFloat(resultValue.toFixed(5)).toString();
  operator = null;
  firstOperand = null;
  restart = true;
  updateResult();
}

function clearCalculator() {
  currentNumber = "";
  firstOperand = null;
  operator = null;
  updateResult(true);
}

function setPercentage() {
  if (!currentNumber) return;
  let result = parseFloat(currentNumber.replace(",", ".")) / 100;

  if (["+", "-"].includes(operator) && firstOperand !== null) {
    result *= firstOperand;
  }

  currentNumber = parseFloat(result.toFixed(5)).toString();
  updateResult();
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    if (/^[0-9,]+$/.test(buttonText)) {
      addDigit(buttonText);
    } else if (["+", "-", "×", "÷"].includes(buttonText)) {
      setOperator(buttonText);
    } else if (buttonText === "=") {
      calculate();
    } else if (buttonText === "C") {
      clearCalculator();
    } else if (buttonText === "±") {
      currentNumber = (parseFloat(currentNumber || "0") * -1).toString();
      updateResult();
    } else if (buttonText === "%") {
      setPercentage();
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    addDigit(key);
  } else if (key === ",") {
    addDigit(",");
  } else if (["+", "-", "*", "/"].includes(key)) {
    const operatorMap = { "+": "+", "-": "-", "*": "×", "/": "÷" };
    setOperator(operatorMap[key]);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Escape") {
    clearCalculator();
  } else if (key === "%") {
    setPercentage();
  } else if (key === "Backspace") {
    currentNumber = currentNumber.slice(0, -1);
    updateResult();
  }
});
