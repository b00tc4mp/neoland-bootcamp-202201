import './SearchUserRacketForm.sass'
import { data } from 'commons'
import { useState } from 'react'
import { Button, Select, ListSearchUserRacket } from '.'

const { RacketType, RacketWeight, RacketPlayer, PlayerLevel } = data

export function SearchUserRacket() {
    const [type, setType] = useState('')
    const [weight, setWeight] = useState('')
    const [player, setPlayer] = useState('')
    const [level, setLevel] = useState('')

    const search = event => {
        event.preventDefault()

        const type = event.target.type.value
        const weight = event.target.weight.value
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
        <form onSubmit={search}>
            <ul>
              <li> <Select options={RacketType} selected={type} name="type" placeholder="Todos" label="¿Que tipo de pala quieres?"></Select> </li> 
              <li> <Select options={RacketWeight} selected={weight} name="weight" placeholder="Todos" label="¿Que peso ha de tener?"></Select> </li>
              <li> <Select options={RacketPlayer} selected={player} name="player" placeholder="Todos" label="¿Que tipo de jugadores eres?"></Select> </li>
              <li> <Select options={PlayerLevel} selected={level} name="level" placeholder="Todos" label="¿Que nivel tienes?"></Select> </li>
              <li> <Button type='submit' /></li>
            </ul>
        </form>
        <ListSearchUserRacket type={type} weight={weight} player={player} level={level} />
    </>
}