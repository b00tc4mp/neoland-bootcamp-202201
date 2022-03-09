import './Div.css'
import { useState } from 'react'
import { divide } from '../logic/'

function Div() {
    const [result, setResult] = useState()

    const operate = event =>{
        event.preventDefault()

        //const a = Number(event.target.a.value)
        //const b = Number(event.target.b.value)

        const { target: { a: { value: va }, b: { value: vb } } } = event
        const a = Number(va)
        const b = Number(vb)

        try {
            const res = divide(a, b)

            setResult(res)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="div">
        <h2 className="div__title">Divide</h2>
    <form className="div__form" onSubmit= {operate}>
        <input className="div__input"type= "number" step="any" name= "a" placeholder="a"></input>
        ÷
        <input className="div__input"type= "number" step="any" name= "b" placeholder="b"></input>
        <button>=</button>
        <span>{result}</span>
        </form>      
    </div>
}

export default Div