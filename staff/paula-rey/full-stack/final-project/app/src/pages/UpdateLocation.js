import './UpdateLocation.sass'
import { updateLocation, retrieveLocation } from '../logic'
import { Input, Select } from '../components'
import { Button } from '../components'
import { data } from 'commons'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const { locationTypes, locationCities } = data

export function UpdateLocation({ onModify }) {
    const { locationId } = useParams()
    
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')


    useEffect(async() => {
        try {
            
            const location = await retrieveLocation(sessionStorage.token, locationId)
            const  { type, title, image, address, city } = location
                setType(type)
                setTitle(title)
                setImage(image)
                setAddress(address)
                setCity(city)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const modifyLocation = async event => {
        try {
            const { target: { type: { value: type }, title: { value: title }, image: { value: image }, address: { value: address }, city: { value: city } } } = event


            await updateLocation(sessionStorage.token, locationId, type, title, image, address, city)
            onModify()

        } catch (error) {
            alert(error.message)
        }

    }

    const onSubmit = event => {
        event.preventDefault()
        modifyLocation(event)
    }



    return <>
        <form onSubmit={onSubmit}>
            <Select name="type" placeholder="type"options={locationTypes} required={true} selected={type} label="Tipo"/>
            <Select name="city" placeholder="city"options={locationCities} required={true} selected={city} label="Ciudad"/>
            <Input type="text" name="title" placeholder="Título" defaultValue={title} label="Título" />
            <Input type="text" name="image" placeholder="url(opcional)" defaultValue={image} label="Inserte url"/>
            <Input type="text" name="address" placeholder="Dirección" defaultValue={address} label="Dirección" />
            <Button type="submit" innerText="Modificar"/>
        </form>
        

    </>

}

