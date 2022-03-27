import './CreatedActions.sass'
import { Link, PlusIcon, ListActions, ActionsNavigationBar } from '../components'

export const CreatedActions = ({ onSchedules: _onSchedules, onCreatedActions: _onCreatedActions, onFavorites: _onFavorites, onCreateAction: _onCreateAction, goToCreateSchedule: _goToCreateSchedule, goToEditAction: _goToEditAction }) => {

    const onSchedules = event => {
        _onSchedules && _onSchedules(event)
    }

    const onCreatedActions = event => {
        _onCreatedActions && _onCreatedActions(event)
    }

    const onFavorites = event => {
        _onFavorites && _onFavorites(event)
    }

    const onCreateAction = event => {
        _onCreateAction && _onCreateAction(event)
    }

    const goToCreateSchedule = event => {
        _goToCreateSchedule && _goToCreateSchedule(event)
    }

    const goToEditAction = event => {
        _goToEditAction && _goToEditAction(event)
    }


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div>
            <h2>Mis Acciones</h2>
            <Link onClick={onCreateAction}><PlusIcon /></Link>
            <ListActions goToCreateSchedule={goToCreateSchedule} goToEditAction={goToEditAction} />
        </div>
    </>
}