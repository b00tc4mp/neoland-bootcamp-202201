import './SearchUserRacket.sass'
import { data } from 'commons'
import { useState } from 'react'
import { Button, Select } from '.'

const { RacketType, RacketWeight, RacketPlayer, RacketLevel } = data

export function SearchUserRacket() {
    const [type, setType] = useState('')
    const [weight, setWeight] = useState('')
    const [player, setPlayer] = useState('')
    const [level, setLevel] = useState('')

    const search = event => {
        event.preventDefault()

        const type = event.target.type.value
        const weight = event.target.weihgt.value
        const player = event.target.player.value
        const level = event.target.level.value

        setType(type)
        setWeight(weight)
        setPlayer(player)
        setLevel(level)
    }

    const cleanSearch = (event) => {
        event.preventDefault()

        setType('')
        setWeight('')
        setPlayer('')
        setLevel('')
    }

    return <>
        <form>
            <label>¿Que tipo de pala quieres?</label>
            <Select options={RacketType} selected={type}></Select>
            <label>¿Que peso ha de tener?</label>
            <Select options={RacketWeight} selected={weight}></Select>
            <label>¿Que tipo de jugadores eres?</label>
            <Select options={RacketPlayer} selected={player}></Select>
            <label>¿Que nivel tienes? </label>
            <Select options={RacketLevel} selected={level}></Select>
            <Button type='submit' />
            <ListSearchUserRacket type={type} />

        </form>
    </>
}