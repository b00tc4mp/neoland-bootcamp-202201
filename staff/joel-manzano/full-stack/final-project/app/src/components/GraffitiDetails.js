import './GraffitiDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveGraffiti, searchGraffitis } from '../logic'


function GraffitiDetails ({graffitiId}) {

    const [graffiti, setGraffiti] = useState()

    useEffect(() => {

        try {
            searchGraffitis(sessionStorage.token, graffitiId)
            .then(graffiti => {
                
                setGraffiti(graffiti)

            })
            .catch(error => {
                alert(error.message)
            })
        } catch (error) {
            alert(error.message)
        }

    }, [])    

    return <> {graffiti &&
        <ul>
            <li>{graffiti.artist}</li>
            <li>{graffiti.description}</li>
            <li>{graffiti.image}</li>
            <li>{graffiti.city}</li>
            <li>{graffiti.address}</li>
            <li>{graffiti.postalCode}</li>
            <li>{graffiti.location}</li>
            <li>{graffiti.style}</li>
            <li>{graffiti.status}</li>
            <li>{graffiti.spray}</li>
            <li>{graffiti.colors}</li>
        </ul>}
    </>

}


export default GraffitiDetails


// Compos importantes
// create Graffiti
// listFavorites
// listGraffitis
