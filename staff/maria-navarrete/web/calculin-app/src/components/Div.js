import './Div.css'
import { useState } from 'react'
import divide from '../logic/divide'

function Div() {
    const [result, setResult] = useState()
    const operate = event => {
        event.preventDefault()
        
        const {target: { a: {value:va}, b: {value: vb}}} = event
        const a = Number(va)
        const b = Number(vb)

        try{
            const res = divide(a,b)
            const roundedRes = Math.round((res + Number.EPSILON) * 100) / 100
            setResult(roundedRes)
        } catch (error){
            alert(error.message)
        }

    }

    return <div className="div">
        <h2 className="div__title">Divide</h2>
        <form className="div__form" onSubmit={operate}>
            <input className="div__input" type="number" placeholder="a" name="a" step="any"></input>
            /
            <input className="div__input" type="number" placeholder="b" name="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}


export default Div