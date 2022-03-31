import './IconLogo.sass'
import logo from '../../assets/images/topaddleicon.png'

function IconLogo({ onClick }) {
/* 
    const onLogo = event => {
        event.preventDefault()
        if(onClick) onClick()
    } */

    return <> 
        <figure className='logo'>
            <img className='logo-img' src={logo}/>
        </figure>
    </>

}

export default IconLogo