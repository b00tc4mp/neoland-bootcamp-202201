import './Schedules.sass'
import { ListSchedules, ActionsNavigationBar } from '../components'

export const Schedules = ({ onSchedules, onCreatedActions, onFavorites }) => {


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div>
            <h2>Agendadas</h2>
            {/* <p>calendario?</p> */}
            <ListSchedules />
        </div>
    </>
}