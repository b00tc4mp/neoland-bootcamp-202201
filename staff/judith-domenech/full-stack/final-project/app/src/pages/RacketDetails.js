import './RacketDetails.sass'
import { RacketCardDetails, ListComments, CreateComment } from '../components'
import { useParams } from 'react-router-dom'


export function RacketDetails() {

    const { racketId } = useParams()

    return <div className='racket-details__container'>

        <div className='racket-details__racket-details'>
            <RacketCardDetails racketId={racketId} />
        </div>

        <div className='racket-details__racket-comment'>
            <ListComments racketId={racketId} />
        </div>

    </div>


}