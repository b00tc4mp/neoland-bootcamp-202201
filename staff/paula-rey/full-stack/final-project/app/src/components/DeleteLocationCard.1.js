import './DeleteLocationCard.sass'
import { Button, CheckIcon, WrongIcon } from '.'
import { useState, useEffect } from 'react'
import { deleteLocation } from '../logic'


export function DeleteLocationCard() {
     
    

    return <>
        <div>
            <h2>¿Seguro que quieres borrar esta localización?</h2>
            <Button /*onClick={goToMyLocations}*/><CheckIcon/></Button>
            <Button /*onClick={goToMyLocations}*/><WrongIcon/></Button>

        </div>
    </>
}



