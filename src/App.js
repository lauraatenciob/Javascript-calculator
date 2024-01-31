import "./App.css";
import { useState } from "react";
import Display from "./Display";
import Numpad from "./Numpad";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [isSecondNumber, setIsSecondNumber] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("0");
  const [isResult, setIsResult] = useState(false);

  const formula = firstNumber.concat(operator, secondNumber);

  function handleClickNumber(number) {
    if (
      (number === "0" && currentNumber === "0") ||
      (number === "0" && secondNumber === "" && operator !== "") ||
      (number === "." && currentNumber.includes("."))
    ) {
      return;
    }

    if (isSecondNumber) {
      setSecondNumber(secondNumber.concat(number));
      setCurrentNumber(secondNumber.concat(number));
    } else {
      if (isResult) {
        clear();
      }

      setFirstNumber(isResult ? number : firstNumber.concat(number));
      setCurrentNumber(
        currentNumber === "0" || isResult ? number : firstNumber.concat(number)
      );
      setIsResult(false);
    }
  }

  function handleClickOperator(newOperator) {
    if (newOperator !== "-" && formula === "") {
      return;
    }

    if (newOperator === "-" && formula === "") {
      setFirstNumber(newOperator);
      setCurrentNumber(newOperator);
    } else if (
      secondNumber === "" &&
      firstNumber !== "" &&
      firstNumber !== "-" &&
      operator === ""
    ) {
      setOperator(newOperator);
      setIsSecondNumber(true);
    } else if (operator !== "" && secondNumber !== "" && secondNumber !== "-") {
      setFirstNumber(calculateResult());
      setOperator(newOperator);
      setSecondNumber("");
      setIsSecondNumber(true);
    } else if (
      newOperator === "-" &&
      operator !== "-" &&
      firstNumber &&
      isSecondNumber
    ) {
      setSecondNumber(newOperator);
      setCurrentNumber(newOperator);
    } else if (firstNumber !== "-") {
      setOperator(newOperator);
      setSecondNumber("");
      setIsSecondNumber(true);
    }
  }

  function calculateResult() {
    const firstValue = parseFloat(firstNumber);
    const secondValue = parseFloat(secondNumber);
    let result = 0;

    switch (operator) {
      case "/":
        result = firstValue / secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      default:
        result = 0;
    }
    setIsSecondNumber(!isSecondNumber);
    const shortResult = Math.round(result * 10000000) / 10000000;
    setCurrentNumber(shortResult.toString());
    setIsResult(true);
    return shortResult.toString();
  }

  function clear() {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setIsSecondNumber(false);
    setCurrentNumber("0");
  }

  return (
    <div id="app">
      <div id="calculator">
        <Display formulaScreen={formula} outputScreen={currentNumber} />
        <Numpad
          onClear={clear}
          onOperatorClick={handleClickOperator}
          onNumberClick={handleClickNumber}
          onResult={calculateResult}
        />
      </div>
    </div>
  );
}

export default App;
