import './CreateAction.sass'
import { Input, Select, Checkbox, Button } from '.'
import { data } from 'commons'
import { createAction } from '../logic'
const { requiredTimeOptions, requiredBudgetOptions } = data


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
        <h2>Crea una nueva acción</h2>
        <form onSubmit={onSubmit}>
            <Input type='text' name='description' label='Descripción' required />
            <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} required appendText={'min'} label='Tiempo Requerido' />
            <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} placeholder='Dinero Requerido' required appendText={'€'} label='Dinero Requerido' />
            <Checkbox id='isPublic' name='isPublic' label='Hacer Pública' />
            <Button type='submit'>Crear</Button>
        </form>
    </>
}