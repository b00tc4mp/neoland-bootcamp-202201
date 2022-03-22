import './RacketDetails.sass'
import {retrieveRacket} from '../logic'
import {useEffect, useState} from 'react'

function RacketDetails({ racketId }) {
    const [racket, setRacket] = useState({})

    useEffect(() => {
        try{
            retrieveRacket(racketId)
                .then(racket => {
                    setRacket(racket)
                })
                .catch(error => alert(error.message))
        }catch (error){
            alert(error.message)
        }
    }, [])



    return <div>
        <h1>{racket.brand}</h1>
        <img src={racket.image}/>
        <p>{racket.model}</p>
        <p>{racket.price}</p>
        <p>{racket.description}</p>
        <p>{racket.level}</p>
        <p>{racket.type}</p>
        <p>{racket.player}</p>
        <p>{racket.weight}</p>
    

    </div>
}

export default RacketDetails