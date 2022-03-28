import './CreateAction.sass'
import { CreateActionForm, ActionsNavigationBar } from '../components'


export const CreateAction = ({ onSchedules, onCreatedActions, onFavorites, goBack }) => {

    return <>
        <ActionsNavigationBar onSchedules={onSchedules} onCreatedActions={onCreatedActions} onFavorites={onFavorites} />
        <div>
            <h2>Crear Acción</h2>
            <CreateActionForm onCreated={goBack} onCancel={goBack} />
        </div>
    </>
}