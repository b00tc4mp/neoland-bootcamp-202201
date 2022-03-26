import './SearchActionsForm.sass'
import { useState } from 'react'
import { Input, Select, Button, MoneyIcon, StopwatchIcon, FilterIcon, RemoveFilterIcon, ListSearchActionsResults } from '../../components'
import { data } from 'commons'
const { requiredTimeOptions, requiredBudgetOptions } = data


export const SearchActionsForm = ({ className = '' }) => {

    const [query, setQuery] = useState('')
    const [requiredBudget, setRequiredBudget] = useState('')
    const [requiredTime, setRequiredTime] = useState('')

    const search = event => {
        event.preventDefault()
        const { target: { query: { value: query }, requiredBudget: { value: _requiredBudget }, requiredTime: { value: _requiredTime } } } = event

        const requiredTime = _requiredTime ? Number(_requiredTime) : ''
        const requiredBudget = _requiredBudget ? Number(_requiredBudget) : ''

        setQuery(query)
        setRequiredBudget(requiredBudget)
        setRequiredTime(requiredTime)
    }

    const cleanSearch = event => {
        setQuery('')
        setRequiredBudget('')
        setRequiredTime('')
    }

    const onSubmit = (event) => {
        event.preventDefault()
        search()
    }

    return <>
        <form className={className} onSubmit={onSubmit}>
            <fieldset>
                <Input type='text' name='query' placeholder='Busca acciones' defaultValue={query && query} />
                <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} appendText={'min'} selected={requiredTime} placeholder='Todos' label={<StopwatchIcon />} />
                <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} selected={requiredBudget} placeholder='Todos' appendText={'€'} label={<MoneyIcon />} />
            </fieldset>
            <Button type='submit'><FilterIcon /></Button>
            <Button type='reset' onClick={cleanSearch}><RemoveFilterIcon /></Button>

        </form>
    </>
}