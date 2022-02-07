import './Sub.css'
import { useState } from 'react'
import {subtract }from '../logic'

function Sub() {
    const [result, setResult] = useState()

    const operate = event =>{
        event.preventDefault()

        const { target: { a: { value: va }, b: { value: vb } } } = event
        const a = Number(va)
        const b = Number(vb)

        try {
            const res = subtract(a, b)

            setResult(res)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="sub">
        <h2 className="sub__title">Subtract</h2>
    <form className="sub__form" onSubmit= {operate}>
        <input className="sub__input"type= "number" step="any" name= "a" placeholder="a"></input>
        -
        <input className="sub__input"type= "number" step="any" name= "b" placeholder="b"></input>
        <button>=</button>
        <span>{result}</span>
        </form>      
    </div>
}

export default Sub