import './Progress.sass'
import { Header } from './elements'
import { retrieveDaily } from '../logic'
import { useState, useEffect } from 'react'
import moment from "moment"

function Progress({ onLogo, onProfile, onProgress, onHelp }) {
    const [quotes, setQuotes] = useState({})

    const onSubmit = (event) => {
        event.preventDefault()

        try {
            retrieveDaily(sessionStorage.token)
                .then((quotes) => {
                    setQuotes(quotes)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <>
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />
        <h1>My Progress</h1>
        <button onClick={onSubmit}>MyDaily</button>
        {!!quotes.length && <ul className='daily__quotes'>
            {quotes.map(quote => <h1 key={quote._id}>
                <p>{quote.text}</p>
                <p>{moment(quote.createdAt).format("L")}</p>
            </h1>)}
        </ul>}
    </>
}

export default Progress