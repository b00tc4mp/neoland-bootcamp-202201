import logoBrand from '../../assets/images/logoBrand.png'
import logo from '../../assets/images/logo.png'

const logoS = {width: '20vw', maxWidth: '100px'}
const logoM = {width: '30vw', maxWidth: '150px'}
const logoL = { width: '50vw', maxWidth: '180px'}
const imgStyled = {width:'100%'}

export const Logo = ({ className = '', alt = 'logo bHooman', type = 'small' }) => {
    return <>
        <figure className={className} style={type === 'small' ? logoS : type === 'main' ? logoL : logoM}>
            <img style={imgStyled} src={type === 'small' ? logo : type === 'main' ? logoBrand : logo} alt={alt} />
        </figure>
    </>
}
