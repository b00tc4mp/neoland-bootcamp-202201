import "./Division.css";
import { useState } from "react";
import division from "../../logic/division";

function Div() {
  const [result, setResult] = useState();

  const operate = (event) => {
    event.preventDefault();

    const {
      target: {
        a: { value: va },
        b: { value: vb },
      },
    } = event;
    const a = +va;
    const b = +vb;

    try {
      const res = division(a, b);

      setResult(Math.round(res * 100) / 100);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="division">
      <h2 className="division__title">Division</h2>
      <form className="division__form" onSubmit={operate}>
        <input
          className="division__input"
          type="number"
          name="a"
          placeholder="a"
          step="any"
        ></input>
        :
        <input
          className="division__input"
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

export default Div;
