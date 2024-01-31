export default function Numpad({
  onClear,
  onOperatorClick,
  onNumberClick,
  onResult,
}) {
  return (
    <div id="buttons">
      <button id="clear" onClick={onClear}>
        <i class="fa-solid fa-a"></i>
        <i class="fa-solid fa-c"></i>
      </button>
      <button
        className="operator"
        id="divide"
        onClick={() => onOperatorClick("/")}
      >
        <i class="fa-solid fa-divide"></i>
      </button>
      <button
        className="operator"
        id="multiply"
        onClick={() => onOperatorClick("*")}
      >
        <i class="fa-solid fa-x"></i>
      </button>
      <button className="number" id="seven" onClick={() => onNumberClick("7")}>
        7
      </button>
      <button className="number" id="eight" onClick={() => onNumberClick("8")}>
        8
      </button>
      <button className="number" id="nine" onClick={() => onNumberClick("9")}>
        9
      </button>
      <button
        className="operator"
        id="subtract"
        onClick={() => onOperatorClick("-")}
      >
        <i class="fa-solid fa-minus"></i>
      </button>
      <button className="number" id="four" onClick={() => onNumberClick("4")}>
        4
      </button>
      <button className="number" id="five" onClick={() => onNumberClick("5")}>
        5
      </button>
      <button className="number" id="six" onClick={() => onNumberClick("6")}>
        6
      </button>
      <button
        className="operator"
        id="add"
        onClick={() => onOperatorClick("+")}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      <button className="number" id="one" onClick={() => onNumberClick("1")}>
        1
      </button>
      <button className="number" id="two" onClick={() => onNumberClick("2")}>
        2
      </button>
      <button className="number" id="three" onClick={() => onNumberClick("3")}>
        3
      </button>
      <button className="number" id="zero" onClick={() => onNumberClick("0")}>
        0
      </button>
      <button id="decimal" onClick={() => onNumberClick(".")}>
        .
      </button>
      <button id="equals" onClick={onResult}>
        <i class="fa-solid fa-equals"></i>
      </button>
    </div>
  );
}
