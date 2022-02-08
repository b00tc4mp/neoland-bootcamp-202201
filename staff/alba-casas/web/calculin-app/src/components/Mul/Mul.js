import "./Mul.css";
import { useState } from "react";
import { multiply } from "../../logic";
function Mul() {
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
      const res = multiply(a, b);

      setResult(Math.round(res * 100) / 100);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="mul">
      <h2 className="mul__title">Mul</h2>
      <form className="mul__form" onSubmit={operate}>
        <input
          className="mul__input"
          type="number"
          name="a"
          placeholder="a"
          step="any"
        ></input>
        x
        <input
          className="mul__input"
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

export default Mul;
