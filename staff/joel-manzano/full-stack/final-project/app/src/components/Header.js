import './Header.css'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";

function Header({ onProfile, onHome }) {
    const [userOptions, setuserOptions] = useState(false)
    const goToProfile = event => {
        event.preventDefault()
        onProfile()
    }

    const goToHome = event => {
        event.preventDefault()
        onHome()
    }

    const showUserOptions = () => {
        setuserOptions(!userOptions)
    }

    return (
        <div className="header">
            <div className="header__logo-wrapper" onClick={goToHome}>
                <p>Logo</p>
            </div>

            <div className='header__input-wrapper'>
                <input type='text' placeholder='Search graffitis...'/>
            </div>
           
            <div className="header__user-wrapper" onMouseEnter={showUserOptions} onMouseLeave={showUserOptions}>
                <FaUserAlt className="header__user-logo"/>
                {userOptions?(
                <div className="header__user-wrapper_options_wrapper">
                    <ul>
                        <li onClick={goToProfile}>Profile</li>
                        <li onClick={goToProfile}>Favorites</li>
                        <li onClick={goToProfile}>My graffitis</li>
                    </ul>
                </div>): null}
            </div>

        </div>
    );
}

export default Header