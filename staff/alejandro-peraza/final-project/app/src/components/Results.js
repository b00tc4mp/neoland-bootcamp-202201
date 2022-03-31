import './Results.sass'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { findRecipesByDistilled, findRecipesByTitle, findRecipesByType } from '../logic'

function Results() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const type = searchParams.get('type')
    const query = searchParams.get('query')

    const navigate = useNavigate()

    useEffect(() => {
        try {
            if (type === 'title') {
                findRecipesByTitle(query)
                    .then(results => setResults(results))
                    .catch(error => alert(error.message))
            } else if (type === 'type') {
                findRecipesByType(query)
                    .then(results => setResults(results))
                    .catch(error => alert(error.message))
            } else if (type === 'distilled') {
                findRecipesByDistilled(query)
                    .then(results => setResults(results))
                    .catch(error => alert(error.message))
            }
        }
        catch (error) {
            alert(error.message)
        }
    }, [type, query])

    return <div className='results'>
        {results.length > 0 && <ul>
            {results.map(result => <ul key={result.id} onClick={() => {
                navigate(`/recipes/${result.id}`)
            }}>
                <div className='results__container'>
                    <h1>{result.title}</h1>
                </div>
            </ul>)}
        </ul>}
    </div >
}

export default Results