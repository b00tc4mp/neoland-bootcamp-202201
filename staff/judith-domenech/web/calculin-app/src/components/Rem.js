import './Rem.css'
import { useState } from 'react'
import {remainder} from '../logic'

function Rem() {
    const [result, setResult] = useState()

    const operate = event =>{
        event.preventDefault()

        //const a = Number(event.target.a.value)
        //const b = Number(event.target.b.value)

        const { target: { a: { value: va }, b: { value: vb } } } = event
        const a = Number(va)
        const b = Number(vb)

        try {
            const res = remainder(a, b)

            setResult(res)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="rem">
        <h2 className="rem__title">Remainder</h2>
    <form className="rem__form" onSubmit= {operate}>
        <input className="rem__input" type= "number" step="any" name= "a" placeholder="a"></input>
        /
        <input className="rem__input" type= "number" step="any" name= "b" placeholder="b"></input>
        <button>=</button>
        <span>{result}</span>
        </form>      
    </div>
}

export default Rem