import { useState } from "react";
import { add } from "../../logic";
import "./Add.css";

function Add() {
  const [result, setResult] = useState();
  const operate = (event) => {
    event.preventDefault();
    /* const a = +event.target.a.value;
    const b = +event.target.b.value;
    */

    const {
      target: {
        a: { value: va },
        b: { value: vb },
      },
    } = event;

    const a = +va;
    const b = +vb;

    try {
      const res = add(a, b);
      setResult(Math.round(res * 100) / 100);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="add">
      <h2 className="add__title">Add</h2>
      <form className="add__form" onSubmit={operate}>
        <input
          className="add__input"
          type="number"
          name="a"
          placeholder="a"
          step="any"
        ></input>
        +
        <input
          className="add__input"
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

export default Add;
