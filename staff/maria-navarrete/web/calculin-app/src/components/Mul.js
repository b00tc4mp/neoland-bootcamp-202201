import './Mul.css'
import { useState } from 'react'
import multiply from '../logic/multiply'

function Mul() {
    const [result, setResult] = useState()
    const operate = event => {
        event.preventDefault()
        
        const {target: { a: {value:va}, b: {value: vb}}} = event
        const a = Number(va)
        const b = Number(vb)

        try{
            const res = multiply(a,b)
            const roundedRes = Math.round((res + Number.EPSILON) * 100) / 100
            setResult(roundedRes)
        } catch (error){
            alert(error.message)
        }

    }

    return <div className="mul">
        <h2 className="mul__title">Multiply</h2>
        <form className="mul__form" onSubmit={operate}>
            <input className="mul__input" type="number" placeholder="a" name="a" step="any"></input>
            x
            <input className="mul__input" type="number" placeholder="b" name="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}


export default Mul