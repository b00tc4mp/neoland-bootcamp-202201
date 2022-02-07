import "./Subs.css";
import { useState } from "react";
import substract from "../../logic/substract";

function Subs() {
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
      const res = substract(a, b);

      setResult(res);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="substract">
      <h2 className="substract__title">Substract</h2>
      <form className="substract__form" onSubmit={operate}>
        <input
          className="substract__input"
          type="number"
          name="a"
          placeholder="a"
          step="any"
        ></input>
        -
        <input
          className="substract__input"
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

export default Subs;
