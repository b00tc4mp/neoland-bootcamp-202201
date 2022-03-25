import './Schedules.sass'
import { ListSchedules, Header, ActsNavigationBar, NavigationBar } from '.'

export const Schedules = () => {

    return <>
        <Header />
        <ActsNavigationBar />
        <div>
            <h2>Agendadas</h2>
            {/* <p>calendario?</p> */}
            <ListSchedules />
        </div>
        <NavigationBar />
    </>
}