import { useState } from 'react'
import { HiOutlineEmojiHappy, HiSun } from "react-icons/hi"
import { createNote } from '../../logic'
import { Input } from "./index"
import "./Modal.sass"

const Modal = () => {
    const [mood, setMood] = useState()


    const handleClickExcelent = () => {
        setMood("5")
    }

    const handleClickGood = () => {
        setMood("4")
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const { target: { text: { value: text } } } = event

        try {
            createNote(sessionStorage.token, text, mood)
                .then(() => {
                    alert("Recuerda hacer el toast >:(")
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <header>
                <h1>Create Note</h1>
            </header>
            <div>
                <Input type="text" name="text" />
            </div>
            <div>
                <HiOutlineEmojiHappy onClick={handleClickExcelent} className='icon__happy' />
                <HiSun onClick={handleClickGood} />
            </div>
            <div>
                <button>Create Note</button>
            </div>
        </form>
    )
}

export default Modal