import './Header.sass'
import { Link, Logo } from '.'

export const Header = () => {

    return <>
        <header>
            <h1>bHooman</h1>
            <Link><Logo alt='logo bHooman' type='small' /></Link>
        </header>
    </>
}