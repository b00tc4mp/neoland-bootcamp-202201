import './CreateActionForm.sass'
import { Input, Select, Checkbox, Button, Link, CheckIcon, XIcon, StopwatchIcon, MoneyIcon } from '../../components'
import { createAction } from '../../logic'
import { data } from 'commons'
const { requiredTimeOptions, requiredBudgetOptions } = data


export const CreateActionForm = ({ className = '', onCreated, onCancel }) => {

    const createNewAction = async event => {
        try {
            const { target: { description: { value: description }, requiredTime: { value: _requiredTime }, requiredBudget: { value: _requiredBudget }, isPublic: { checked: isPublic } } } = event

            const requiredTime = Number(_requiredTime)
            const requiredBudget = Number(_requiredBudget)

            await createAction(sessionStorage.token, description, isPublic, requiredTime, requiredBudget)
            onCreated && onCreated(event)

        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        createNewAction(event)
    }


    return <>
        <form className={className} onSubmit={onSubmit}>
            <fieldset>
                <Input type='text' name='description' placeholder='Descripción' required />
                <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} placeholder='Tiempo Requerido' required appendText={'min'} label={<StopwatchIcon />} />
                <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} placeholder='Dinero Requerido' required appendText={'€'} label={<MoneyIcon />} />
                <Checkbox id='isPublic' name='isPublic' label='Hacer Pública' />
            </fieldset>
            <div>
                <Button type='submit'> <CheckIcon /> </Button>
                <Link onClick={onCancel}><XIcon /></Link>
            </div>
        </form>
    </>
}
