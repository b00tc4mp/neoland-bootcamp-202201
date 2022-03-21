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
        <span>{racket.price}</span>

        <span>{racket.model}</span>
        <span>{racket.level}</span>
        <span>{racket.type}</span>
        <span>{racket.player}</span>
        <span>{racket.weight}</span>
        <p>{racket.description}</p>


    </div>
}

export default RacketDetails