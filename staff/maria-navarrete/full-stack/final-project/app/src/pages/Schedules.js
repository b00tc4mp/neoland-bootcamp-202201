import './Schedules.sass'
import { ListSchedules, ActionsNavigationBar } from '../components'

export const Schedules = ({ onSchedules, onCreatedActions, onFavorites }) => {


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div className='schedules'>
            <h2 className='schedules__title'>Agendadas</h2>
            {/* <p>calendario?</p> */}
            <ListSchedules />
        </div>
    </>
}