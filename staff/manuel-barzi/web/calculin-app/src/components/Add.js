import './Add.css'
import { useState } from 'react'
import { add } from '../logic'

function Add() {
    const [result, setResult] = useState()

    const operate = event => {
        event.preventDefault()

        //const a = Number(event.target.a.value)
        //const b = Number(event.target.b.value)

        const { target: { a: { value: va }, b: { value: vb } } } = event
        const a = Number(va)
        const b = Number(vb)

        try {
            const res = add(a, b)

            setResult(res)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="add">
        <h2 className="add__title">Add</h2>
        <form className="add__form" onSubmit={operate}>
            <input className="add__input" type="number" name="a" placeholder="a" step="any"></input>
            +
            <input className="add__input" type="number" name="b" placeholder="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}

export default Add