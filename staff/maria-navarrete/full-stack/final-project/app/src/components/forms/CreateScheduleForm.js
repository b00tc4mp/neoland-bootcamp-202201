import './CreateActionForm.sass'
import { Input, Select, Button, Link, CheckIcon, XIcon, MoneyIcon, StopwatchIcon, CalendarIcon, RepeatIcon } from '../../components'
import { retrieveAction, createSchedule } from '../../logic'
import { useState, useEffect } from 'react'
import { data } from 'commons'
const { repeatOptions } = data

export const CreateScheduleForm = ({ actionId, className = '', onCreated, onCancel: _onCancel }) => {
    const [description, setDescription] = useState('')
    const [requiredTime, setRequiredTime] = useState('')
    const [requiredBudget, setRequiredBudget] = useState('')

    useEffect(async () => {
        try {
            const action = await retrieveAction(sessionStorage.token, actionId)
            const { description, requiredTime, requiredBudget } = action
            setDescription(description)
            setRequiredTime(requiredTime)
            setRequiredBudget(requiredBudget)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const createNewSchedule = async event => {
        try {
            const { target: { date: { value: _date }, repeat: { value: repeat } } } = event
            const date = new Date(_date)
            await createSchedule(sessionStorage.token, actionId, date, repeat)
            onCreated && onCreated()
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        createNewSchedule(event)
    }

    const onCancel = event => {
        _onCancel && _onCancel(event)
    }

    return <>
        <form className={className} onSubmit={onSubmit}>
            <fieldset>
                <Input type='text' name='description' defaultValue={description} disabled placeholder='Descripción' />
                <Input type='text' name='requiredTime' defaultValue={requiredTime} disabled label={<StopwatchIcon />} />
                <Input type='text' name='requiredBudget' defaultValue={requiredBudget} disabled label={<MoneyIcon />} />
                <Input type='date' name='date' placeholder='Fecha' label={<CalendarIcon />} required />
                <Select name='repeat' id='repeat' options={repeatOptions} required placeholder='Repetición' label={<RepeatIcon />} />
            </fieldset>
            <div>
                <Button type='submit'> <CheckIcon /> </Button>
                <Link onClick={onCancel}><XIcon /></Link>
            </div>
        </form>
    </>
}
