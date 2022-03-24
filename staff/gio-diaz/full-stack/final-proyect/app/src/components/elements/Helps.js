import React, { useState } from 'react'
import DropDown from './DropDown'
import "./Helps.sass"

const Helps = () => {
    const [isShowDropdown, setShowDropdown] = useState(false)
    const test = !isShowDropdown

    const toggleDropdown = () => {
        setShowDropdown(true)
    }

    const toggleTest = () => {
        setShowDropdown(false)
    }


    return (
        <>
        <div className='helps__1'>
            {isShowDropdown && <DropDown className="helps__dropdown">Hola</DropDown>}
            <h1 onClick={toggleDropdown}>1</h1>
        </div>
        <div className='helps__2'>
            {test && <DropDown className="helps__dropdown">Hola</DropDown>}
            <h1 onClick={toggleTest}>2</h1>
        </div>
        </>
    )
}

export default Helps