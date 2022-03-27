import './Home.sass'
import { SearchActions, ListSearchActionsResults } from '../components'

export const Home = ({ onSearchActions: _onSearchActions, goToCreateSchedule: _goToCreateSchedule, goToUserProfile: _goToUserProfile }) => {

    const goToCreateSchedule = actionId => {
        _goToCreateSchedule && _goToCreateSchedule(actionId)
    }

    const goToUserProfile = userId => {
        _goToUserProfile && _goToUserProfile(userId)
    }

    const onSearchActions = params => {
        _onSearchActions && _onSearchActions(params)
    }


    return <>
        <SearchActions onSearchActions={onSearchActions} />
        <ListSearchActionsResults goToCreateSchedule={goToCreateSchedule} goToUserProfile={goToUserProfile} />
    </>
}