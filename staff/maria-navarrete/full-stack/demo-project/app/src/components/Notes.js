import './Notes.css'
import { retrieveUser, listNotes } from '../logic'
import { useEffect, useState } from 'react'

function Notes() {
    const [name, setName] = useState()
    const [notes, setNotes] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    return <div className="notes">
        <h1>welcome home, {name}!</h1>

    </div>
}
export default Notes
