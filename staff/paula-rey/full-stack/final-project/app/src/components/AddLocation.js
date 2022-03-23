import './AddLocation.sass'
import { createLocation } from '../logic'
import { Input, Select } from './form-elements'
import { Button } from './elements'
import { data } from 'commons'
const { locationTypes, locationCities, defaultImage } = data

export function AddLocation({ onCreated }) {

    const addLocation = async event => {
        try {
            const { target: { type: { value: type }, title: { value: title }, image: { value: image }, address: { value: address }, city: { value: city } } } = event

            const urlImage = image === ''? defaultImage : image

            await createLocation(sessionStorage.token, type, title, urlImage, address, city)
            onCreated && onCreated()

        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        addLocation(event)
    }



    return <>
        <h2>¡Añade tu localización!</h2>
        <form onSubmit={onSubmit}>
            <Select name="type" placeholder="type"options={locationTypes} required={true}/>
            <Select name="city" placeholder="city"options={locationCities} required={true}/>
            <Input type="text" name="title" placeholder="Título" />
            <Input type="text" name="image" placeholder="url(opcional)"/>
            <Input type="text" name="address" placeholder="Dirección" />
            <Button type="submit" inner="Crear"/>
        </form>
        

    </>

}

