import './Sub.css'
import { useState } from 'react'
import sub from '../logic/add'

function Sub() {
    const [result, setResult] = useState ()

    const operate = event => {
        event.preventDefault()

        //const a = Number(event.target.a.value)
        //const b = Number(event.target.b.value)

        const { target: { a: { value: va }, b: { value: vb } } } = event
        const a = Number(va)
        const b = Number(vb)
        
        try {
            const res = sub(a, b)

            setResult(res)
        }catch (error) {
            alert(error.message)
        }
    }

    return <div className="sub">
        <h2 className="sub__title">Sub</h2>
        <form className="sub__form" onSubmit={operate}>
            <input className="sub__input" type="number" name="a" placeholder="a" step="any"></input>
            -
            <input className="sub__input" type="number" name="b" placeholder="b" step="any"></input>
            <button>=</button>
            <span>{result}</span>
        </form>
    </div>
}

export default Sub