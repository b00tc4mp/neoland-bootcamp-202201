import './GraffitiList.sass'
import { useEffect, useState } from 'react'
import { listGraffitis, searchGraffitis } from '../logic'
import { useNavigate } from 'react-router-dom'
import noImage from '../../src/assets/images/unkown-image.png'


function GraffitiList() {

    const [graffitis, setGraffitis] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        try {
            listGraffitis(sessionStorage.token)
                .then(graffitis => {
                    setGraffitis(graffitis)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    
    return <div className='cards-wrapper'>
        {graffitis.length > 0 && <div className='cards-wrapper'>
            {graffitis.map(graffiti => <div className='cards-wrapper__small-cards-wrapper' key={graffiti.id} onClick={() => {
                navigate(`/search/${graffiti.id}`)
            }}>
                <div className='cards-wrapper__image-wrapper'>
                {graffiti.image && graffiti.image.includes('data') ? <img className='image' src={`${graffiti.image}`} /> : <img className='unkown-image' src={`${noImage}`} />}
                </div>
                <div className='card-wrapper__attributes-wrapper'>
                    <div className='card-wrapper__attribute-wrapper'>
                        <p className='card-wrapper__attribute-wrapper__title'>Artist:</p>
                        <p className='card-wrapper__attribute-wrapper__attribute'>{graffiti.artist}</p>
                    </div>
                    <div className='card-wrapper__attribute-wrapper'>
                        <p className='card-wrapper__attribute-wrapper__title'>City:</p>
                        <p className='card-wrapper__attribute-wrapper__attribute'>{graffiti.city}</p>
                    </div>
                    <div className='card-wrapper__attribute-wrapper'>
                        <p className='card-wrapper__attribute-wrapper__title'>Style:</p>
                        <p className='card-wrapper__attribute-wrapper__attribute'>{graffiti.style}</p>
                    </div>
                </div>
            </div>)}
        </div>}
    </div>
}

export default GraffitiList