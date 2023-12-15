import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  function appendToDisplay(value) {
    setDisplay((preValue) => preValue + value);
  }

  function clearDisplay() {
    setDisplay("");
  }

  function calculateResult() {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    }
    catch (error) {
      setDisplay("Error")
    }
  }
  return (
    <>
      <div className="app">
        <div className="calculator">
          <input type="text" value={display} disabled />
        </div>
        <div>
          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button onClick={() => appendToDisplay("+")}>+</button>
        </div>
        <div>
          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button onClick={() => appendToDisplay("-")}>-</button>
        </div>
        <div>
          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button onClick={() => appendToDisplay("*")}>*</button>
        </div>
        <div>
          <button onClick={() => appendToDisplay("0")}>0</button>
          <button onClick={clearDisplay}>C</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => appendToDisplay("/")}>/</button>
        </div>
      </div>
    </>
  );
}

export default App;
