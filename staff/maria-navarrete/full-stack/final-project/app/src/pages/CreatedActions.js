import './CreatedActions.sass'
import { Link, PlusIcon, ListActions, ActsNavigationBar } from '../components'

export const CreatedActions = () => {

    return <>
        <ActsNavigationBar />
        <div>
            <h2>Mis Acciones</h2>
            <Link><PlusIcon /></Link>
            <ListActions />
        </div>
    </>
}