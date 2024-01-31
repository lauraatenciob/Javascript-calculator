import "./App.css";
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [isSecondNumber, setIsSecondNumber] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("0");

  const formula = firstNumber.concat(operator, secondNumber);

  function handleClickNumber(number) {
    if (
      (number === "0" && currentNumber === "0") ||
      (number === "0" && secondNumber === "" && operator !== "") ||
      (number === "." && currentNumber.includes("."))
    ) {
      return;
    } else if (isSecondNumber) {
      setSecondNumber(secondNumber.concat(number));
      setCurrentNumber(secondNumber.concat(number));
    } else {
      setFirstNumber(firstNumber.concat(number));
      setCurrentNumber(
        currentNumber === "0" ? number : firstNumber.concat(number)
      );
    }
  }

  function handleClickOperator(newOperator) {
    if (newOperator !== "-" && formula === "") {
      return;
    } 
    
    if (newOperator === "-" && formula === "") {
      setFirstNumber(newOperator);
      setCurrentNumber(newOperator);
    } else if (secondNumber === "" && firstNumber !== "" && firstNumber !== "-" && operator === "") {
      setOperator(newOperator);
      setIsSecondNumber(true);
    } else if (operator !== "" && secondNumber !== "" && secondNumber !== "-") {
      setFirstNumber(calculateResult());
      setOperator(newOperator);
      setSecondNumber("");
      setIsSecondNumber(true);
    } else if (newOperator === "-" && operator !== "-" && firstNumber && isSecondNumber) {
        setSecondNumber(newOperator);
        setCurrentNumber(newOperator);
    } else if (firstNumber !== "-"){ 
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
    const shortResult = Math.round(result * 10000000) / 10000000
    setCurrentNumber(shortResult.toString());
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
        <div id="screen">
          <p id="formulaScreen">{formula}</p>
          <p id="display">{currentNumber}</p>
        </div>
        <div id="buttons">
          <button id="clear" onClick={clear}>
            <i class="fa-solid fa-a"></i>
            <i class="fa-solid fa-c"></i>
          </button>
          <button
            className="operator"
            id="divide"
            onClick={() => handleClickOperator("/")}
          >
            <i class="fa-solid fa-divide"></i>
          </button>
          <button
            className="operator"
            id="multiply"
            onClick={() => handleClickOperator("*")}
          >
            <i class="fa-solid fa-x"></i>
          </button>
          <button
            className="number"
            id="seven"
            onClick={() => handleClickNumber("7")}
          >
            7
          </button>
          <button
            className="number"
            id="eight"
            onClick={() => handleClickNumber("8")}
          >
            8
          </button>
          <button
            className="number"
            id="nine"
            onClick={() => handleClickNumber("9")}
          >
            9
          </button>
          <button
            className="operator"
            id="subtract"
            onClick={() => handleClickOperator("-")}
          >
            <i class="fa-solid fa-minus"></i>
          </button>
          <button
            className="number"
            id="four"
            onClick={() => handleClickNumber("4")}
          >
            4
          </button>
          <button
            className="number"
            id="five"
            onClick={() => handleClickNumber("5")}
          >
            5
          </button>
          <button
            className="number"
            id="six"
            onClick={() => handleClickNumber("6")}
          >
            6
          </button>
          <button
            className="operator"
            id="add"
            onClick={() => handleClickOperator("+")}
          >
            <i class="fa-solid fa-plus"></i>
          </button>
          <button
            className="number"
            id="one"
            onClick={() => handleClickNumber("1")}
          >
            1
          </button>
          <button
            className="number"
            id="two"
            onClick={() => handleClickNumber("2")}
          >
            2
          </button>
          <button
            className="number"
            id="three"
            onClick={() => handleClickNumber("3")}
          >
            3
          </button>
          <button
            className="number"
            id="zero"
            onClick={() => handleClickNumber("0")}
          >
            0
          </button>
          <button id="decimal" onClick={() => handleClickNumber(".")}>
            .
          </button>
          <button id="equals" onClick={calculateResult}>
          <i class="fa-solid fa-equals"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
