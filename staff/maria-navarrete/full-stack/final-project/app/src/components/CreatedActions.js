import './CreatedActions.sass'
import { Link, PlusIcon, ListActions, ActsNavigationBar, NavigationBar, Header } from '.'

export const CreatedActions = () => {

    return <>
        <Header />
        <ActsNavigationBar />
        <div>
            <h2>Mis Acciones</h2>
            <Link><PlusIcon /></Link>
            <ListActions />
        </div>
        <NavigationBar />
    </>
}