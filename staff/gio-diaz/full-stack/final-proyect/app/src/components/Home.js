import './Home.sass'
import { useEffect, useState } from 'react'
import { retrieveUser, retrieveRandomQuote, retrieveNote } from '../logic'
import { Header, Modal, RandomQuote } from './elements'
import moment from "moment"



function Home({ onLogo, onProfile, onProgress, onHelp }) {
    const [name, setName] = useState()
    const [quote, setQuote] = useState({})
    const [note, setNote] = useState()
    console.log(note)

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    useEffect(() => {
        try {
            retrieveRandomQuote()
                .then((quote) => {
                    setQuote(quote)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()

        try {
            retrieveNote(sessionStorage.token)
                .then((note) => {
                    setNote(note)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }
    return <>
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />
        <p>Happy day, {name}</p>
        <h1><RandomQuote quote={quote} /></h1>
        <button onClick={onSubmit}>Retrieve Note</button>
        {!!note && <div>
            <p>{note.text}</p>
            <p>{moment(note.createdAt).format("L")}</p>
            </div>}
        <Modal />
    </>
}

export default Home