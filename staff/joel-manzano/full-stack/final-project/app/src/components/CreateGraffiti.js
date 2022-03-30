
import React from 'react'
import Button from './buttons/Button'
import { Input } from './form-elements'
import { createGraffiti } from '../logic'
import "./CreateGraffiti.sass"
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import {convertToBase64} from '../components/utils/utils'

function CreateGraffiti() {

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
                <Button type='submit' >Add</Button>
            </form>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {graffitiImage && <img
                    src={graffitiImgSrc}
                    alt='photo'
                    />}
                    <Button>Choose file</Button> 
                </div>
        </div>
}


export default CreateGraffiti

//https://www.contornourbano.com/wp-content/uploads/2019/04/mll-5b234e2ce9d93-workFoto-1-1030x687.jpg