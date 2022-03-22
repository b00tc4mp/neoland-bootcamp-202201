import './Logo.sass'
import logoBrand from '../../assets/images/logoBrand.png'
import logo from '../../assets/images/logo.png'


export const Logo = ({ alt = 'logo bHooman', className = '', type = 'small' }) => {
    return <>
        <figure className={className}>
            <img src={type === 'small' ? logo : type === 'main' ? logoBrand : logo} alt={alt} />
        </figure>
    </>
}
