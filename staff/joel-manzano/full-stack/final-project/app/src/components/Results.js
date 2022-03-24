import './Results.sass'
import { useEffect, useState } from 'react'
import { searchGraffitis } from '../logic'
import { useSearchParams } from 'react-router-dom'

function Results () {

    const [searchParams, setSearchParams]= useSearchParams()
    const [graffitis, setGraffitis] = useState([])

    const query = searchParams.get('query')

    useEffect(() => {
        try {
            searchGraffitis(query)
            // searchGraffitis(query, artist, city, postalCode, style, status, spray, colors)
            .then(graffitis => {
                setGraffitis(graffitis)
            })
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [query])


    return <>
        {graffitis.length > 0 && <ul>
            <h1>hello results of graffitis</h1>
            {graffitis.map(graffiti => <ul key={graffiti.id}>
                
                <li>{graffiti.id}</li>
                <li>{graffiti.artist}</li>
                <li>{graffiti.city}</li>
                <li>{graffiti.postalCode}</li>
                <li>{graffiti.style}</li>
                <li>{graffiti.status}</li>
                <li>{graffiti.spray}</li>
                <li>{graffiti.colors}</li>

            </ul>)}
        </ul>}
    </>
}


export default Results