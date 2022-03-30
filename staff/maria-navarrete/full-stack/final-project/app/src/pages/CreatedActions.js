import './CreatedActions.sass'
import { Link, PlusIcon, ListActions, ActionsNavigationBar } from '../components'

export const CreatedActions = ({ onSchedules, onCreatedActions, onFavorites, onCreateAction, goToCreateSchedule, goToEditAction }) => {


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div className='createdActions'>
            <div className='createdActions__header'>
                <h2 className='createdActions__title'>Mis Acciones</h2>
                <Link onClick={onCreateAction}><PlusIcon className='createAction__icon' /></Link>
            </div>
            <ListActions goToCreateSchedule={goToCreateSchedule} goToEditAction={goToEditAction} />
        </div>
    </>
}