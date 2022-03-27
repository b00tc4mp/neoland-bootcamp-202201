import { Logo, Link } from '.'
import './HeaderBar.sass'

export function HeaderBar({ onLogin, onHome }) {

    const goToLogin = event => {
        event.preventDefault()
        onLogin && onLogin(event)
    }

    const goToHome= event => {
        event.preventDefault()
        onHome && onHome(event)
    }

    return <div>
        <nav className='header-bar'>
            <Link onClick={goToHome}><Logo /></Link>
            {!sessionStorage.token && <Link onClick={goToLogin}>Iniciar Sesión</Link>}
        </nav>
    </div>
}