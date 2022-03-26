import { Logo, Link } from '.'
import './HeaderBar.sass'

export function HeaderBar({ onLogin }) {

    const goToLogin = event => {
        onLogin && onLogin(event)
    }

    return <div>
        <nav className='header-bar'>
            <Link><Logo /></Link>
            {!sessionStorage.token && <Link onClick={goToLogin}>Iniciar Sesión</Link>}
        </nav>
    </div>
}