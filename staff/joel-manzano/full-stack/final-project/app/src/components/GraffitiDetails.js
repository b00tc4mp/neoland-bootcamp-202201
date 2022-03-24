import './GraffitiDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveGraffiti } from '../logic'
import { useParams } from 'react-router-dom'

function GraffitiDetails () {
    //const [searchParams, setSearchParams]= useSearchParams()
    const [graffiti, setGraffiti] = useState({})
    const {graffitiId} = useParams()

    useEffect(() => {

        try {
            retrieveGraffiti( graffitiId )
            .then(graffiti => {
                setGraffiti(graffiti)
            })
            .catch(error => {
                alert(error.message)
            })
        } catch (error) {
            alert(error.message)
        }

    }, [graffitiId])    

    return <> 
            {graffiti &&
        
        <ul>
            <h2>{graffiti.artist}</h2>
            <li>{graffiti.description}</li>
            <img src={graffiti.urlImage}/>
            <p>{graffiti.city}</p>
            <p>{graffiti.address}</p>
            <p>{graffiti.postalCode}</p>
            <p>{graffiti.location}</p>
            <p>{graffiti.style}</p>
            <p>{graffiti.status}</p>
            <p>{graffiti.spray}</p>
            <p>{graffiti.colors}</p>
        </ul>}
    </>

}

export default GraffitiDetails

// Compos importantes
// create Graffiti
// listFavorites
// listGraffitis
