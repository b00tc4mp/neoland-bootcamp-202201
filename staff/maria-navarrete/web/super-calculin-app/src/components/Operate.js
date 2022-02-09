import './Operate.css'
import { useState } from 'react'
import operate from '../logic/operate'

function Operate() {
    const [result, setResult] = useState()
    const execute = event => {
        event.preventDefault()

        const { target: { a: { value: va }, b: { value: vb }, operation: { value: op } } } = event
        const a = Number(va)
        const b = Number(vb)

        try {
            const res = operate(a, b, op)
            const roundedRes = Math.round((res + Number.EPSILON) * 100) / 100
            setResult(roundedRes)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="operate">
        <form className="operate__form" onSubmit={execute}>
            <input className="operate__input" type="number" placeholder="a" name="a" step="any"></input>
            <select id="operation" name="operation">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="x">x</option>
                <option value="/">/</option>
                <option value="^">^</option>
            </select>
            <input className="operate__input" type="number" placeholder="b" name="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}


export default Operate