import './CreateActionForm.sass'
import { Input, Select, Checkbox, Button, Link, CheckIcon, XIcon, StopwatchIcon, MoneyIcon } from '../../components'
import { data } from 'commons'
const { requiredTimeOptions, requiredBudgetOptions } = data


export const CreateActionForm = ({ className = '', onSubmit: _onSubmit, onCancel: _onCancel }) => {

    const onSubmit = (event) => {
        event.preventDefault()
        _onSubmit && _onSubmit(event)
    }

    const onCancel = (event) => {
        _onCancel && _onCancel(event)
    }

    return <>
        <form className={className} onSubmit={onSubmit}>
            <Input type='text' name='description' placeholder='Descripción' required />
            <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} placeholder='Tiempo Requerido' required appendText={'min'} label={<StopwatchIcon />} />
            <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} placeholder='Dinero Requerido' required appendText={'€'} label={<MoneyIcon />} />
            <Checkbox id='isPublic' name='isPublic' label='Hacer Pública' />
            <div>
                <Button type='submit'> <CheckIcon /> </Button>
                <Link onClick={onCancel}><XIcon /></Link>
            </div>
        </form>
    </>
}
