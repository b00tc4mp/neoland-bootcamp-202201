import './GraffitiDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveGraffiti } from '../logic'


function GraffitiDetails ({graffitiId}) {

    const [graffiti, setGraffiti] = useState()

    useEffect(() => {

        try {
            retrieveGraffiti(sessionStorage.token, graffitiId)
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
            <li>{graffiti.location}</li>
            <li>{graffiti.city}</li>
        </ul>}
    </>

}


export default GraffitiDetails


// Compos importantes
// create Graffiti
// listFavorites
// listGraffitis
