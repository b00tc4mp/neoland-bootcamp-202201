import './Sub.css'
import { useState } from 'react'
import subtract from '../logic/subtract'

function Sub() {
    const [result, setResult] = useState()
    const operate = event => {
        event.preventDefault()
        
        const {target: { a: {value:va}, b: {value: vb}}} = event
        const a = Number(va)
        const b = Number(vb)

        try{
            const res = subtract(a,b)
            const roundedRes = Math.round((res + Number.EPSILON) * 100) / 100
            setResult(roundedRes)
        } catch (error){
            alert(error.message)
        }

    }

    return <div className="sub">
        <h2 className="sub__title">Substract</h2>
        <form className="sub__form" onSubmit={operate}>
            <input className="sub__input" type="number" placeholder="a" name="a" step="any"></input>
            -
            <input className="sub__input" type="number" placeholder="b" name="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}


export default Sub