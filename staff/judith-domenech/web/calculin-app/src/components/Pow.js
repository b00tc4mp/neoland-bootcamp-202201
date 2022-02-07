import './Pow.css'
import { useState } from 'react'
import {pow} from '../logic'

function Pow() {
    const [result, setResult] = useState()

    const operate = event => {
        event.preventDefault()
        
        const { target: { a: { value: va }, b: { value: vb } } } = event
        const a = Number(va)
        const b = Number(vb)

        try {
            const res = pow(a, b)

            setResult(res)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="pow">
        <h2 className="pow__title">Pow</h2>
        <form className="pow__form" onSubmit={operate}>
            <input className="pow__input" type="number" name="a" placeholder="a" step="any"></input>
            ^
            <input className="pow__input" type="number" name="b" placeholder="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}

export default Pow