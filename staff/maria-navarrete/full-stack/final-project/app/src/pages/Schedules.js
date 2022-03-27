import './Schedules.sass'
import { ListSchedules, ActionsNavigationBar } from '../components'

export const Schedules = ({ onSchedules: _onSchedules, onCreatedActions: _onCreatedActions, onFavorites: _onFavorites }) => {

    const onSchedules = event => {
        _onSchedules && _onSchedules(event)
    }

    const onCreatedActions = event => {
        _onCreatedActions && _onCreatedActions(event)
    }

    const onFavorites = event => {
        _onFavorites && _onFavorites(event)
    }


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div>
            <h2>Agendadas</h2>
            {/* <p>calendario?</p> */}
            <ListSchedules />
        </div>
    </>
}