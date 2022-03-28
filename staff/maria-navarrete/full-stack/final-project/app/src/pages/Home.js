import './Home.sass'
import { SearchActions, ListSearchActionsResults } from '../components'

export const Home = ({ onSearchActions, goToCreateSchedule, goToUserProfile }) => {


    return <>
        <SearchActions onSearchActions={onSearchActions} />
        <ListSearchActionsResults goToCreateSchedule={goToCreateSchedule} goToUserProfile={goToUserProfile} />
    </>
}