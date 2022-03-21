import './Details.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, retrieveLocation } from '../logic'
import { useParams } from 'react-router-dom'

function Details({locationId}) {
    const [location, setLocation] = useState({})

    useEffect(() => {
        try {
            retrieveLocation(sessionStorage.token, locationId)
                .then(location => {
                    setLocation(location)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert (error.message)
        }
    }, [])

    return <div className='detail'>
        <h1>{location.title}</h1>
        <img src={location.image}/>
        <h2>{location.type}</h2>
        <p>{location.adress}</p>
        <p>{location.city}</p>
        <p>{location.description}</p>
        
    </div>
}

export default Details