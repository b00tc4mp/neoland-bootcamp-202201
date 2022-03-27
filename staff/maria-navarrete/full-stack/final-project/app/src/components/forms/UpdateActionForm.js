import './UpdateActionForm.sass'
import { useState, useEffect } from 'react'
import { Input, Select, Checkbox, Button, Link, StopwatchIcon, MoneyIcon, CheckIcon, XIcon } from '..'
import { retrieveAction, updateAction } from '../../logic'
import { data } from 'commons'
const { requiredTimeOptions, requiredBudgetOptions } = data


export const UpdateActionForm = ({ actionId, className = '', onUpdated, onCancel: _onCancel }) => {

    const [description, setDescription] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const [requiredTime, setRequiredTime] = useState('')
    const [requiredBudget, setRequiredBudget] = useState('')

    useEffect(async () => {
        try {
            const action = await retrieveAction(sessionStorage.token, actionId)
            const { description, public: isPublic, requiredTime, requiredBudget } = action
            setDescription(description)
            setIsPublic(isPublic)
            setRequiredTime(requiredTime)
            setRequiredBudget(requiredBudget)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateUserAction = async event => {
        try {
            const { target: { description: { value: description }, requiredTime: { value: _requiredTime }, requiredBudget: { value: _requiredBudget }, isPublic: { checked: isPublic } } } = event

            const requiredTime = Number(_requiredTime)
            const requiredBudget = Number(_requiredBudget)

            await updateAction(sessionStorage.token, actionId, description, isPublic, requiredTime, requiredBudget)
            onUpdated && onUpdated()

        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        updateUserAction(event)
    }

    const onCancel = event => {
        _onCancel && _onCancel(event)
    }

    return <>
        <form className={className} onSubmit={onSubmit}>
            <fieldset>
                <Input type='text' name='description' defaultValue={description} placeholder='Descripción' required />
                <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} required={true} appendText={'min'} selected={requiredTime} placeholder='Tiempo requerido' label={<StopwatchIcon />} required />
                <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} required={true} appendText={'€'} selected={requiredBudget} placeholder='Dinero requerido' label={<MoneyIcon />} required />
                <Checkbox id='isPublic' name='isPublic' label='Hacer Pública' checked={isPublic} />
            </fieldset>
            <div>
                <Button type='submit'> <CheckIcon /> </Button>
                <Link onClick={onCancel}><XIcon /></Link>
            </div>
        </form>
    </>
}
