import './Header.sass'
import { Link, Logo } from '.'

export const Header = ({ onLogo: _onLogo }) => {

    const onLogo = event => {
        _onLogo && _onLogo(event)
    }

    return <>
        <header>
            <h1>bHooman</h1>
            <Link onClick={onLogo}><Logo alt='logo bHooman' type='small' /></Link>
        </header>
    </>
}