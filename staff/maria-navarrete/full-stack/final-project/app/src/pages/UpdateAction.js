import './UpdateAction.sass'
import { ActionsNavigationBar, UpdateActionForm } from '../components'
import { useParams } from 'react-router-dom'

export const UpdateAction = ({ onSchedules: _onSchedules, onCreatedActions: _onCreatedActions, onFavorites: _onFavorites, goBack: _goBack }) => {

    const { actionId } = useParams()

    const goBack = event => {
        _goBack && _goBack(event)
    }

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
            <h2>Editar Acción</h2>
            <UpdateActionForm actionId={actionId} onUpdated={goBack} onCancel={goBack} />
        </div>
    </>
}