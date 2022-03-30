import './CreateActionForm.sass'
import { Input, Select, Checkbox, Button, Link, CheckIcon, XIcon, StopwatchIcon, MoneyIcon } from '../../components'
import { createAction } from '../../logic'
import { data } from 'commons'
const { requiredTimeOptions, requiredBudgetOptions } = data


export const CreateActionForm = ({ onCreated, onCancel }) => {

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
        <form className='createActionForm__form' onSubmit={onSubmit}>
            <fieldset className='createActionForm__fieldset'>
                <Input className='input-bordered createActionForm__input' type='text' name='description' placeholder='Descripción' required />
                <Select className='createActionForm__select' name='requiredTime' id='requiredTime' options={requiredTimeOptions} placeholder='Tiempo Requerido' required appendText={'min'} label={<StopwatchIcon className='createActionForm__icon' />} />
                <Select className='createActionForm__select' name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} placeholder='Dinero Requerido' required appendText={'€'} label={<MoneyIcon className='createActionForm__icon' />} />
                <Checkbox className='createActionForm__checkbox' id='isPublic' name='isPublic' label='Hacer Pública' />
            </fieldset>
            <div className='createActionForm__buttons'>
                <Button className='createActionForm__button' type='submit'> <CheckIcon className='createActionForm__buttonIcon' /> </Button>
                <Link className='createActionForm__button' onClick={onCancel}><XIcon className='createActionForm__buttonIcon' /></Link>
            </div>
        </form>
    </>
}
