import './GraffitiDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveGraffiti, deleteGraffiti, listGraffitis} from '../logic'
import { useParams,useNavigate, Navigate, } from 'react-router-dom'
import Button from './buttons/Button'
import noImage from '../../src/assets/images/unkown-image.png'


function GraffitiDetails({onBack}) {
    const navigate = useNavigate()
    const [graffiti, setGraffiti] = useState({})
    const [ isMyGraffiti, setIsMyGraffiti ] = useState(false)
    const { graffitiId } = useParams()

    useEffect(() => {

        try {
            retrieveGraffiti(graffitiId)
                .then(graffiti => {
                    setGraffiti(graffiti)
                    listGraffitis(sessionStorage.token)
                        .then(myGraffitis => {
                            const matchGraffiti = myGraffitis.filter(item => item.id == graffiti.id)
                            if (matchGraffiti.length) {
                                setIsMyGraffiti(true)
                            }
                        })
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }

    }, [graffitiId])

    const onDeleteGraffiti = event => {
        event.preventDefault()

        try {
            deleteGraffiti(sessionStorage.token, graffitiId)
                .then(() => onBack())
                .catch(error => {
                    alert(error.message)
                })

            } catch (error) {
                alert(error.message)
        }
    }




    return <>
        {graffiti &&
            <div className='cards-wrapper-detail'>
                <div className='cards-wrapper__big-cards-wrapper-detail'>
                    <div className='cards-wrapper__image-wrapper-detail'>
                    {graffiti.image && graffiti.image.includes('data') ? <img className='image-detail' src={`${graffiti.image}`} /> : <img className='unkown-image-detail' src={`${noImage}`} />}
                    </div>
                    <div className='card-wrapper__attributes-wrapper-detail'>
                        <div className='card-wrapper__attributes-wrapper-detail-flex'>
                            <div className='card-wrapper__attribute-wrapper-detail'>
                                {graffiti.artist && <p className='card-wrapper__attribute-wrapper__title-detail'>Artist:</p>}
                                {graffiti.style && <p className='card-wrapper__attribute-wrapper__title-detail'>Style:</p>}
                                {graffiti.address && <p className='card-wrapper__attribute-wrapper__title-detail'>Address:</p>}
                                {graffiti.city && <p className='card-wrapper__attribute-wrapper__title-detail'>City:</p>}
                                {graffiti.postalCode && <p className='card-wrapper__attribute-wrapper__title-detail'>Postal code:</p>}
                                {graffiti.location && <p className='card-wrapper__attribute-wrapper__title-detail'>Location:</p>}
                                {graffiti.status && <p className='card-wrapper__attribute-wrapper__title-detail'>Status:</p>}
                                {graffiti.spray && <p className='card-wrapper__attribute-wrapper__title-detail'>Spray:</p>}
                                {graffiti.color && <p className='card-wrapper__attribute-wrapper__title-detail'>Colors:</p>}
                                {graffiti.condition && <p className='card-wrapper__attribute-wrapper__title-detail'>Condition:</p>}
                                {graffiti.description && <p className='card-wrapper__attribute-wrapper__title-detail'>Description:</p>}
                            </div>
                            <div className='card-wrapper__attribute-wrapper-detail'>
                                {graffiti.artist && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.artist}</p>}
                                {graffiti.style && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.style}</p>}
                                {graffiti.address && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.address}</p>}
                                {graffiti.city && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.city}</p>}
                                {graffiti.postalCode && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.postalCode}</p>}
                                {graffiti.location && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.location}</p>}
                                {graffiti.status && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.status}</p>}
                                {graffiti.spray && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.spray}</p>}
                                {graffiti.color && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.color}</p>}
                                {graffiti.condition && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.condition}</p>}
                                {graffiti.description && <p className='card-wrapper__attribute-wrapper__attribute-detail'>{graffiti.description}</p>}
                            </div>
                        </div>
                        {isMyGraffiti == true ? <div className='card-wrapper__buttons-wrapper'>
                            <div className='card-wrapper__button-wrapper'>
                                <Button onClick={() => {
                                    navigate(`/update-graffiti/${graffitiId}`)
                                    }}>Modify Graffiti</Button>
                            </div>
                            <div className='card-wrapper__button-wrapper'>
                                <Button className='delete-graffiti__button' onClick={onDeleteGraffiti}>Delete</Button>
                            </div>
                            <div className='card-wrapper__button-wrapper'>
                                <Button className='delete-graffiti__button' onClick={onBack}>Back</Button>
                            </div>
                        </div> : null}
                    </div>

                </div>
            </div>
        }
    </>


}

export default GraffitiDetails
