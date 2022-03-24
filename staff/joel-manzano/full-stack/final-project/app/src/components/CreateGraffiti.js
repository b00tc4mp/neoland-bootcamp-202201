import './CreateGraffiti.sass'
import { useState, useEffect } from 'react'
import { Input, Select, Button } from '.'

const CreateGraffiti = ({ userId, artist, description, image, city, address, postalCode, location, style, status, spray, color }) => {
    validateId(userId, 'userId')
    validateString(artist, 'artist')
    validateString(description, 'description')
    validateString(image, 'image')
    validateString(city, 'city')
    validateString(address, 'address')
    validateString(postalCode, 'postal code') 
    validateString(location, 'location')
    validateString(style, 'style')
    validateString(status, 'status')
    validateString(spray, 'spray')
    validateString(color, 'color')




}

export default CreateGraffiti