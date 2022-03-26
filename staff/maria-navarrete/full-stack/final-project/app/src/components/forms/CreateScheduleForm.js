import './CreateActionForm.sass'
import { Input, Select, Button, Link, CheckIcon, XIcon, MoneyIcon, StopwatchIcon, CalendarIcon, RepeatIcon } from '..'
import { data } from 'commons'
const { repeatOptions } = data


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
            <Input type='text' name='description' defaultValue={description} disabled placeholder='Descripción' />
            <Input type='text' name='requiredTime' defaultValue={requiredTime} disabled label={<StopwatchIcon />} />
            <Input type='text' name='requiredBudget' defaultValue={requiredBudget} disabled label={<MoneyIcon />} />
            <Input type='date' name='date' placeholder='Fecha' label={<CalendarIcon />} required />
            <Select name='repeat' id='repeat' options={repeatOptions} required placeholder='Repetición' label={<RepeatIcon />} />
            <div>
                <Button type='submit'> <CheckIcon /> </Button>
                <Link onClick={onCancel}><XIcon /></Link>
            </div>
        </form>
    </>
}
