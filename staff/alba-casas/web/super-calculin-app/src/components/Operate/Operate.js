import { useState } from "react";
import operate from "../../logic/operate";
import "./Operate.css";

function Operate() {
  const [result, setResult] = useState();
  const execute = (event) => {
    event.preventDefault();

    const {
      target: {
        a: { value: va },
        b: { value: vb },
        operation: { value: op },
      },
    } = event;

    const a = +va;
    const b = +vb;

    try {
      const res = operate(a, b, op);
      setResult(Math.round(((res + Number.EPSILON) * 100) / 100));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="operate">
      <form className="operate__form" onSubmit={execute}>
        <input
          className="operate__input"
          type="number"
          name="a"
          placeholder="a"
          step="any"
        ></input>
        <select id="operation" name="operation">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">:</option>
          <option value="x">x</option>
          <option value="^">^</option>
        </select>
        <input
          className="operate__input"
          type="number"
          name="b"
          placeholder="b"
          step="any"
        ></input>
        <button>=</button>
        <span>{result}</span>
      </form>
    </div>
  );
}

export default Operate;
