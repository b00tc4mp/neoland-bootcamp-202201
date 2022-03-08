import { retrieveUser } from '../logic'
import { useEffect, useState } from 'react'

function Home() {
    const [name, setName] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    return <div>
        <h1>thyLemma{name}!</h1>
    </div>
}

export default Home