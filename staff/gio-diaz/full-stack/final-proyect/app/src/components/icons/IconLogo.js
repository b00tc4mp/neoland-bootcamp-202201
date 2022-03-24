import './IconLogo.sass'
import { HiOutlineEmojiHappy } from 'react-icons/hi';

function IconLogo({onClick}) {

    const onLogo = event => {
        event.preventDefault()
        if(onClick) onClick()

    }
    return<>
    <HiOutlineEmojiHappy className='profile__icon' onClick={onLogo}/>
</>
}

export default IconLogo
