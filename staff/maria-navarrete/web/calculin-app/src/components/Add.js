import './Add.css'
import { useState } from 'react'
import add from '../logic/add'

function Add() {
    const [result, setResult] = useState()
    const operate = event => {
        event.preventDefault()
        
        const {target: { a: {value:va}, b: {value: vb}}} = event
        const a = Number(va)
        const b = Number(vb)

        try{
            const res = add(a,b)
            const roundedRes = Math.round((res + Number.EPSILON) * 100) / 100
            setResult(roundedRes)
        } catch (error){
            alert(error.message)
        }
    }

    return <div className="add">
        <h2 className="add__title">Add</h2>
        <form className="add__form" onSubmit={operate}>
            <input className="add__input" type="number" placeholder="a" name="a" step="any"></input>
            +
            <input className="add__input" type="number" placeholder="b" name="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}


export default Add