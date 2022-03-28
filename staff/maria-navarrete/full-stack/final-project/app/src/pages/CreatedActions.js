import './CreatedActions.sass'
import { Link, PlusIcon, ListActions, ActionsNavigationBar } from '../components'

export const CreatedActions = ({ onSchedules, onCreatedActions, onFavorites, onCreateAction, goToCreateSchedule, goToEditAction}) => {


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div>
            <h2>Mis Acciones</h2>
            <Link onClick={onCreateAction}><PlusIcon /></Link>
            <ListActions goToCreateSchedule={goToCreateSchedule} goToEditAction={goToEditAction} />
        </div>
    </>
}