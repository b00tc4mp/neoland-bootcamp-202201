import './CreateAction.sass'
import { Input, Select, Checkbox, Button, Link, CheckIcon, XIcon, StopwatchIcon, MoneyIcon } from '.'
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
        <h2>Crear Acción</h2>
        <form onSubmit={onSubmit}>
            <Input type='text' name='description' placeholder='Descripción' required />
            <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} placeholder='Tiempo Requerido' required appendText={'min'} label={<StopwatchIcon />} />
            <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} placeholder='Dinero Requerido' required appendText={'€'} label={<MoneyIcon />} />
            <Checkbox id='isPublic' name='isPublic' label='Hacer Pública' />
            <div>
                <Button type='submit'> <CheckIcon /> </Button>
                <Link><XIcon /></Link>
            </div>
        </form>
    </>
}