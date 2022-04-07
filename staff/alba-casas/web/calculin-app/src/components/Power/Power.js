import "./Power.css";
import { useState } from "react";
import { power } from "../../logic";
function Power() {
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
      const res = power(a, b);

      setResult(Math.round(res * 100) / 100);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="power">
      <h2 className="power__title">Power</h2>
      <form className="power__form" onSubmit={operate}>
        <input
          className="power__input"
          type="number"
          name="a"
          placeholder="a"
          step="any"
        ></input>
        ^
        <input
          className="power__input"
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

export default Power;
