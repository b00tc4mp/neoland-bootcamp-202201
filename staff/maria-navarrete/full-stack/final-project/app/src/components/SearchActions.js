import './SearchActions.sass'
import { Input, Select, Button, MoneyIcon, StopwatchIcon, FilterIcon, RemoveFilterIcon, ListSearchActionsResults } from '.'
import { data } from 'commons'
const { requiredTimeOptions, requiredBudgetOptions } = data

export const SearchActions = ({ onSearchActions }) => {

    const search = event => {
        const { target: { query: { value: query }, requiredBudget: { value: _requiredBudget }, requiredTime: { value: _requiredTime } } } = event

        const requiredTime = _requiredTime ? Number(_requiredTime) : ''
        const requiredBudget = _requiredBudget ? Number(_requiredBudget) : ''

        onSearchActions && onSearchActions({ query, requiredTime, requiredBudget })
    }

    const onSubmit = event => {
        event.preventDefault()
        search(event)
    }

    return <>
        <div>
            <form onSubmit={onSubmit} >
                <fieldset>
                    <Input type='text' name='query' placeholder='Busca acciones' />
                    <Select name='requiredTime' id='requiredTime' options={requiredTimeOptions} appendText={'min'} placeholder='Todos' label={<StopwatchIcon />} />
                    <Select name='requiredBudget' id='requiredBudget' options={requiredBudgetOptions} placeholder='Todos' appendText={'€'} label={<MoneyIcon />} />
                </fieldset>
                <Button type='submit'><FilterIcon /></Button>
                <Button type='reset'><RemoveFilterIcon /></Button>
            </form>
        </div>
    </>


}