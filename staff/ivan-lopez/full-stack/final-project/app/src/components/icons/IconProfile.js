import './IconProfile.sass'
import { FaUser } from 'react-icons/fa'


function IconProfile ({ onClick }) {
    
    const onIconProfile = event => {
        event.preventDefault()
        if(onClick) onClick()

    }

    return <>
    <figure className='profile-icon' onClick={onIconProfile}>
        <FaUser/>
    </figure>

    </>
}

export default IconProfile