import './Header.sass'
import { Link, Logo } from '.'

export const Header = ({ onLogo }) => {


    return <>
        <header>
            <h1>bHooman</h1>
            <Link onClick={onLogo}><Logo alt='logo bHooman' type='small' /></Link>
        </header>
    </>
}