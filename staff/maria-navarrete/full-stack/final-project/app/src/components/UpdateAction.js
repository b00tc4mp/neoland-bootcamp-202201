import './UpdateAction.sass'
import { useState, useEffect } from 'react'
import { Input, Select, Checkbox, Button } from '.'
import { data } from 'commons'
import { retrieveAction, updateAction } from '../logic'
const { requiredTimeOptions, requiredBudgetOptions } = data


export const UpdateAction = ({ actionId, onUpdate }) => {

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
            onUpdate && onUpdate()

            const action = await retrieveAction(sessionStorage.token, actionId)
            const { description: newDescription, public: newIsPublic, requiredTime: newRequiredTime, requiredBudget: newRequiredBudget } = action
            setDescription(newDescription)
            setIsPublic(newIsPublic)
            setRequiredTime(newRequiredTime)
            setRequiredBudget(newRequiredBudget)

        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        updateUserAction(event)
    }

    return <>
        <form onSubmit={onSubmit}>
            <Input type='text' name='description' defaultValue={description} label='Descripción:' required />
            <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} required={true} appendText={'min'} selected={requiredTime} label='Tiempo requerido:' required />
            <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} required={true} appendText={'€'} selected={requiredBudget} label='Dinero requerido' required />
            <Checkbox id='isPublic' name='isPublic' label='Hacer Pública' checked={isPublic} />
            <Button type='submit'>Modificar</Button>
        </form>
    </>
}