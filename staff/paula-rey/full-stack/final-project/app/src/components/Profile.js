import './Profile.sass'
import { Link } from './'


export function Profile() {

    return <>
        <nav>
            <ul>
                <li><Link>Mis datos</Link></li>
                <li><Link>Mis localizaciones</Link></li>    
                <li><Link>Usuarios seguidos</Link></li>    
                <li><Link>Eliminar cuenta</Link></li>
            </ul>
        </nav>
    </>
}

