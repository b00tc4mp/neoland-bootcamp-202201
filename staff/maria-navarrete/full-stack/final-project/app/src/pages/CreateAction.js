import './CreateAction.sass'
import { CreateActionForm, ActsNavigationBar } from '../components'
import { createAction } from '../logic'


export const CreateAction = ({ onCreated }) => {

    const createNewAction = async event => {
        try {
            const { target: { description: { value: description }, requiredTime: { value: _requiredTime }, requiredBudget: { value: _requiredBudget }, isPublic: { checked: isPublic } } } = event

            const requiredTime = Number(_requiredTime)
            const requiredBudget = Number(_requiredBudget)

            await createAction(sessionStorage.token, description, isPublic, requiredTime, requiredBudget)
            onCreated && onCreated()
        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        createNewAction(event)
    }

    return <>
        <ActsNavigationBar />
        <div>
            <h2>Crear Acción</h2>
            <CreateActionForm onSubmit={onSubmit} />

        </div>
    </>
}