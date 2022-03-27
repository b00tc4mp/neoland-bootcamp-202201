import './CreateAction.sass'
import { CreateActionForm, ActionsNavigationBar } from '../components'


export const CreateAction = ({ onSchedules: _onSchedules, onCreatedActions: _onCreatedActions, onFavorites: _onFavorites, goBack: _goBack }) => {

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
            <h2>Crear Acción</h2>
            <CreateActionForm onCreated={goBack} onCancel={goBack} />
        </div>
    </>
}