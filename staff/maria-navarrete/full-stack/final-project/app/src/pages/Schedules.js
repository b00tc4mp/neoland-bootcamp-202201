import './Schedules.sass'
import { ListSchedules, ActsNavigationBar } from '../components'

export const Schedules = () => {

    return <>
        <ActsNavigationBar />
        <div>
            <h2>Agendadas</h2>
            {/* <p>calendario?</p> */}
            <ListSchedules />
        </div>
    </>
}