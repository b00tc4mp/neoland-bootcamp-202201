import React, { useEffect, useState } from 'react'
import Button from './buttons/Button'
import { Input } from './form-elements'
import { modifyGraffiti, retrieveGraffiti } from '../logic'
import "./ModifyGraffiti.sass"
import { } from 'react-icons/md'
import { useParams,useNavigate, Navigate, } from 'react-router-dom'
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import {convertToBase64} from '../components/utils/utils'

function ModifyGraffiti({onBack}) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
      });
      const graffitiImage = acceptedFiles[0];
      const graffitiImgSrc = graffitiImage && URL.createObjectURL(graffitiImage)
    
    
    
    const [graffiti, setGraffiti] = useState()
    const [artist, setArtist] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [postalCode, setPostalCode] = useState()
    const [location, setLocation] = useState()
    const [style, setStyle] = useState()
    const [condition, setCondition] = useState()
    const [spray, setSpray] = useState()
    const [color, setColor] = useState()
    const { graffitiId } = useParams()

    const conditionOptions = [
        { value: "exists", label: 'Exists' },
        { value: "trampled", label: 'Trampled' },
        { value: "cleaned up", label: 'Cleaned up' }
    ]

    const styleOptions = [
        { value: "unknown", label: 'Unknown' },
        { value: "tags", label: 'Tags' },
        { value: "3d", label: '3d' },
        { value: "bombing", label: 'Bombing' },
        { value: "bubbles", label: 'Bubbles' },
        { value: "blockbuster", label: 'Blockbuster' },
        { value: "realism", label: 'Realism' },
        { value: "icons", label: 'Icons' },
        { value: "trash", label: 'Trash' },
        { value: "abstract", label: 'Abstract' },
    ]

    useEffect(() => {
        try {
            retrieveGraffiti(graffitiId)
                .then(graffiti => {
                    const { artist, description, image, city, address, postalCode, location, style, condition, spray, color } = graffiti
                    setGraffiti(graffiti)
                    setArtist(artist)
                    setDescription(description)
                    setCity(city)
                    setAddress(address)
                    setPostalCode(postalCode)
                    setLocation(location)
                    setStyle(style)
                    setCondition(condition)
                    setSpray(spray)
                    setColor(color)
                    setImage(image)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }

    }, [graffitiId])

    const handdleSubmit = event => {
        event.preventDefault()

        const { target: {
            artist: { value: artist },
            description: { value: description },
            city: { value: city },
            address: { value: address },
            postalCode: { value: postalCode },
            location: { value: location },
            style: { value: style },
            condition: { value: condition },
            spray: { value: spray },
            color: { value: color } } } = event

        try {
            if (graffitiImage)
            convertToBase64(graffitiImage).then((graffitiImage) => {
                modifyGraffiti(sessionStorage.token, graffitiId, artist, description, graffitiImage, city, address, postalCode, location, style, condition, spray, color)
                    .then(() => {
                        setArtist(artist)
                        setDescription(description)
                        setImage(graffitiImage)
                        setCity(city)
                        setAddress(address)
                        setPostalCode(postalCode)
                        setLocation(location)
                        setStyle(style)
                        setCondition(condition)
                        setSpray(spray)
                        setColor(color)
                        alert('Graffifit updated ;)')
                    })
                    .catch(error => { throw error })
            })
        } catch ({ message }) {
            alert(message)
        }

    }

    const handleChangeCondition=(event) => {
        setCondition(event.value)
    }

    const handleChangeStyle=(event) => {
        setStyle(event.value)
    }

    return <>
        <form className='container' onSubmit={handdleSubmit}>
            <h1>Modify graffiti</h1>
            <Input type='text' name='artist' placeholder='Artist' defaultValue={artist} />
            <Input type='text' name='description' placeholder='Description' defaultValue={description} />
            {/* <Input type='text' name='image' placeholder='URL-image' defaultValue={image} /> */}
            <Input type='text' name='city' placeholder='City' defaultValue={city} />
            <Input type='text' name='address' placeholder='Address' defaultValue={address} />
            <Input type='text' name='postalCode' placeholder='Postal-code' defaultValue={postalCode} />
            <Input type='text' name='location' placeholder='Location' defaultValue={location} />
            <Input type='text' name='spray' placeholder='Spray' defaultValue={spray} />
            <Input type='text' name='color' placeholder='Color' defaultValue={color} />
            <Select options={conditionOptions} name="condition" value={conditionOptions.find(item => item.value === condition)} onChange={(e) => handleChangeCondition(e)} />
            <Select options={styleOptions} name="style" value={styleOptions.find(item => item.value === style)} onChange={(e) => handleChangeStyle(e)} />
            <Button type='submit' className='button edit-button' >Edit</Button>
        </form>
        <div className='select-image-wrapper' {...getRootProps()}>
                    <input {...getInputProps()} />
                    {graffitiImage && <img
                    src={graffitiImgSrc}
                    alt='photo'
                    className='selected-image'
                    />}
                        <Button className='logout-button margin-choosefile-button'>Choose file</Button> 
                </div>
            <Button className='button edit-button back-button' onClick={onBack}>Back</Button>
    </>
}


export default ModifyGraffiti