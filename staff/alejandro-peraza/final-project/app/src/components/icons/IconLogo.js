import './IconLogo.sass'
import logo from '../../assets/images/cfd.png'


function IconLogo ({ onClick }) {

    const onLogo = event => {
        event.preventDefault()
        if(onClick) onClick()
    }

    return <>
        <figure className='logo' onClick={onLogo}>
            <img className='logo-img' src={logo}/>
        </figure>
    </>

}


export default IconLogo