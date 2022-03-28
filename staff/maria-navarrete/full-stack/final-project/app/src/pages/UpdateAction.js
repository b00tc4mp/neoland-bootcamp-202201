import './UpdateAction.sass'
import { ActionsNavigationBar, UpdateActionForm } from '../components'
import { useParams } from 'react-router-dom'

export const UpdateAction = ({ onSchedules, onCreatedActions, onFavorites, goBack }) => {

    const { actionId } = useParams()


    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div>
            <h2>Editar Acción</h2>
            <UpdateActionForm actionId={actionId} onUpdated={goBack} onCancel={goBack} />
        </div>
    </>
}