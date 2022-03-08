import './Pow.css'
import { useState } from 'react'
import power from '../logic/power'

function Pow() {
    const [result, setResult] = useState()
    const operate = event => {
        event.preventDefault()
        
        const {target: { a: {value:va}, b: {value: vb}}} = event
        const a = Number(va)
        const b = Number(vb)

        try{
            const res = power(a,b)
            const roundedRes = Math.round((res + Number.EPSILON) * 100) / 100
            setResult(roundedRes)
        } catch (error){
            alert(error.message)
        }

    }

    return <div className="pow">
        <h2 className="pow__title">Power</h2>
        <form className="pow__form" onSubmit={operate}>
            <input className="pow__input" type="number" placeholder="a" name="a" step="any"></input>
            ^
            <input className="pow__input" type="number" placeholder="b" name="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}


export default Pow