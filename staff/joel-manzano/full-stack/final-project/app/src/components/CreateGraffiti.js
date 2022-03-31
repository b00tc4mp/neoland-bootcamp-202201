
import React from 'react'
import Button from './buttons/Button'
import { Input } from './form-elements'
import { createGraffiti } from '../logic'
import "./CreateGraffiti.sass"
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import {convertToBase64} from '../components/utils/utils'

function CreateGraffiti({onBack}) {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
      });
      const graffitiImage = acceptedFiles[0];
      const graffitiImgSrc = graffitiImage && URL.createObjectURL(graffitiImage)

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
                createGraffiti(sessionStorage.token, artist, description, graffitiImage, city, address, postalCode, location, style, condition, spray, color)
                    .then(() => {
                        alert("Grafitti created")
                    })
                    .catch((error) => alert(error.message))
                })
            } catch ({ message }) {
                alert(message)
            }
    
    }

        return <div>
            <form className='container' onSubmit={handdleSubmit}>
                <h1>Add graffiti</h1>
                <Input type='text' name='artist' placeholder='Artist' />
                <Input type='text' name='description' placeholder='Description' />
                <Input type='text' name='city' placeholder='City' />
                <Input type='text' name='address' placeholder='Address' />
                <Input type='text' name='postalCode' placeholder='Postal-code' />
                <Input type='text' name='location' placeholder='Location' />
                <Input type='text' name='spray' placeholder='Spray' />
                <Input type='text' name='color' placeholder='Color' />
                <Select options={conditionOptions} name="condition" />
                <Select options={styleOptions} name="style" />
                <Button type='submit' className='button edit-button' >Add</Button>
            </form >
            <div className='flex-modify-buttons'>
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
            </div>
        </div>
}


export default CreateGraffiti